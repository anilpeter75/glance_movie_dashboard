import React from "react";
import { useFetchMovies } from "../../Hooks/useFetchMovies";
import MovieData from '../../Data/MovieData'
import DummyImage from '../../assets/dummyImage.png'
export default function MovieList() {
  // const { movies, loading, error } = useFetchMovies();

  // if (loading) return <p>Loading movies...</p>;
  // if (error) return <p>Error: {error}</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {MovieData.slice(0, 5).map((movie) => (
        <a href="#" className="group block">
          <img
            src={DummyImage}
            alt="DummyImage"
            className="h-[150px] w-full object-cover sm:h-[250px]"
          />

          <div className="mt-3 flex justify-between text-sm">
            <div>
              <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4">
                {movie.title}
              </h3>
              
              <p>imdb Rating :{movie.imdb_rating}</p>

              <p className="mt-1.5 text-pretty text-xs text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
                nobis, quia soluta quisquam voluptatem nemo.
              </p>
            </div>

            <p className="text-gray-900">$299</p>
          </div>
        </a>
      ))}
    </div>
  );
}
