import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Heading from "@/components/ui/Heading";
import ProductCard from "@/components/ui/ProductCard";
import Button from '@/components/ui/Button'
export default function MovieList({ MovieData }) {
  const [sort, setSort] = useState([]);

  useEffect(() => {
    const sort = MovieData?.sort((a, b) => parseInt(b.year) - parseInt(a.year));
    setSort(sort);
  }, [MovieData]);
  return (
    <div className=" p-2 bg-widgetbgclr rounded-lg">
      <Heading heading="Latest List" className="pl-2" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mx-2">
        {sort?.slice(0, 5).map((movie) => (
          <ProductCard movie={movie} key={movie.title} />
        ))}
      </div>
      <Link to="all_movies" className="flex justify-center mt-5 mb-2">
      <Button title="Load More"/>
      </Link>
    </div>
  );
}
