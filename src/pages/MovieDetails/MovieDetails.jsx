import Star from "@/assets/star.svg";
import { useEffect, useState } from "react";
import MovieData from "../../Data/MovieData";
import { useParams } from "react-router-dom";


export default function MovieDetails() {
  const [movieDetails, setMovieDetails] = useState({});
  const { movieName } = useParams();

  useEffect(() => {
    const filteredMovie = MovieData.filter(
      (movie) => movie.title.replace(/\s+/g, "_").toLowerCase() === movieName
    );
    setMovieDetails(filteredMovie[0]);
  }, [movieName]);

  if(movieDetails.cast===undefined){
    return <p>Loading movies...</p>;
  }
  return (
    <div className=" mx-auto px-4 mt-5">
      <div className="border-[0.5px] border-grey-300 pb-5">
        <div className="bg-widgetbgclr py-5 px-2">
          <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {movieDetails.title}
          </div>
          <p className="text-xl md:text-2xl">{movieDetails.year}</p>
        </div>
        <div className="grid gap-6 p-6 sm:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Cast</h3>
              <p>{movieDetails.cast.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Genre</h3>
              <div className="flex flex-wrap gap-2">
                {movieDetails.genre.map((genre) => (
                  <div key={genre}>{genre}</div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Country</h3>
              <p>{movieDetails.country.join(", ")}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Language</h3>
              <p>{movieDetails.language.join(", ")}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">IMDb Rating</h3>
              <div className="flex items-center gap-2">
                <img src={Star} alt="Star" className="w-5 h-5" />
                <span className="text-2xl font-bold">
                  {movieDetails.imdb_rating}
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">
                Oscar Nominations ({movieDetails.oscar_nominations})
              </h3>
              <ul className="list-disc list-inside">
                {movieDetails.oscar_nominations_list.map((nomination) => (
                  <li key={nomination}>{nomination}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Oscar Wins</h3>
              <p>
                {movieDetails.oscar_winning === 0
                  ? "No Oscar wins"
                  : `${movieDetails.oscar_winning} Oscar wins`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
