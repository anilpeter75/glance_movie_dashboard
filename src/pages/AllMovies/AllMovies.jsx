import React, { useState, useEffect } from "react";
import debounce from "debounce";
import Select from "react-select";
import { useFetchContext } from "@/context/FetchContext";
import Search from "@/components/ui/Search";
import ProductCard from "@/components/ui/ProductCard";
import Filtericon from "@/assets/filtericon.svg";
import Loading from "@/components/ui/Loading";

const sort = [
  { value: "low_high", label: "Old to New" },
  { value: "new", label: "Newest First" },
];

export default function AllMovies() {
  const { MovieData, error, loading } = useFetchContext();
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [sortData, setsortData] = useState("");
  const [filters, setFilters] = useState({
    imdb: [],
    gener: [],
  });
  const [filtersValue, setFiltersValue] = useState({
    imdb: [],
    genre: [],
  });
  console.log(filtersValue);

  useEffect(() => {
    const data = MovieData?.map((item) => item.imdb_rating);
    const uniqueData = [...new Set(data)];
    setFilters((prevState) => ({
      ...prevState,
      imdb: uniqueData,
    }));
    const genredata = MovieData?.map((item) => item.genre);
    const uniqueGenres = [...new Set(genredata.flat())]; //  and remove duplicates
    setFilters((prevState) => ({
      ...prevState,
      gener: uniqueGenres,
    }));
  }, [MovieData]);

  // Filter Data
  useEffect(() => {
    if (!MovieData) return;

    let filteredData = [...MovieData];
    console.log("Selected Ratings:", filtersValue.imdb);
    console.log(
      "Movie Ratings:",
      filteredData.map((movie) => movie.imdb_rating)
    );

    // Filter by IMDB Rating
    if (filtersValue.imdb.length > 0) {
      filteredData = filteredData.filter((movie) =>
        filtersValue.imdb.includes(movie.imdb_rating)
      );
    }

    // Filter by Genres
    if (filtersValue.genre.length > 0) {
      filteredData = filteredData.filter((movie) =>
        filtersValue.genre.every((g) => movie.genre.includes(g))
      );
    }

    // Apply Search
    if (searchData) {
      filteredData = filteredData.filter((movie) =>
        movie.title.toLowerCase().includes(searchData.toLowerCase())
      );
    }

    // Apply Sorting
    if (sortData?.value === "low_high") {
      filteredData.sort((a, b) => parseInt(a.year) - parseInt(b.year));
    } else if (sortData?.value === "new") {
      filteredData.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    }

    setData(filteredData);
  }, [filtersValue, searchData, sortData, MovieData]);

  useEffect(() => {
    const debouncedSearch = debounce(() => setSearchData(searchData), 300);
    debouncedSearch();

    return () => debouncedSearch.clear();
  }, [searchData]);

  const handleCheckbox = (type, value) => {
    setFiltersValue((prev) => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter((v) => v !== value)
        : [...prev[type], value],
    }));
  };
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <h2 className="text-4xl font-semibold mb-4 text-center ">Movie List</h2>
      <div className="grid  lg:grid-cols-[150px_1fr] grid-cols-[110px_1fr] gap-4">
        <div className="lg:ml-3 my-form">
          <div className="flex">
            <p className="text-xl mb-4">Filters</p>
            <img src={Filtericon} alt="Filtericon" className="size-8" />
          </div>

          <div>
            <p className="text-lg underline underline-offset-4">IMDB</p>
            {filters?.imdb?.map((rating) => (
              <div className="flex gap-3 my-1 items-center" key={rating}>
                <input
                  type="checkbox"
                  checked={filtersValue.imdb.includes(rating)}
                  onChange={() => handleCheckbox("imdb", rating)}
                />
                <label>{rating}</label>
              </div>
            ))}
          </div>

          <div className="mt-3">
            <p
              className="text-xl underline underline-offset-4
"
            >
              Genre
            </p>
            {filters?.gener?.map((genre) => (
              <div className="flex gap-3 my-1 items-center" key={genre}>
                <input
                  type="checkbox"
                  checked={filtersValue.genre.includes(genre)}
                  onChange={() => handleCheckbox("genre", genre)}
                />
                <label>{genre}</label>
              </div>
            ))}
          </div>
        </div>

        {/* ****** */}
        <div>
          <div className="grid lg:grid-cols-3 items-center gap-4">
            <Search setSearchData={setSearchData} searchData={searchData} />
            <div className=" text-black">
              <Select
                options={sort}
                placeholder="Sort"
                theme={(theme) => ({
                  ...theme,
                  colors: {
                    ...theme.colors,
                    primary25: "hotpink",
                    primary: "black",
                  },
                })}
                onChange={(selectedOption) => setsortData(selectedOption)} // Correct usage
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-5">
            {data?.map((movie) => (
              <ProductCard movie={movie} key={movie.title} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
