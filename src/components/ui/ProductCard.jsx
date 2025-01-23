import DummyImage from "@/assets/dummyImage.png";
import { Link } from "react-router";
export default function ProductCard({ movie }) {
  return (
    <Link
      to={`/details/${movie.title.replace(/\s+/g, "_").toLowerCase()}`}
      state={movie}
      className="group block"
    >
      <img
        src={DummyImage}
        alt="DummyImage"
        className="h-[150px] w-full object-cover sm:h-[250px] group-hover:scale-105 transition duration-150 ease-in-out"
      />

      <div className="mt-3 flex justify-between text-sm">
        <div>
          <h3 className=" group-hover:underline group-hover:underline-offset-4">
            {movie.title}
          </h3>

          <p>imdb Rating :{movie.imdb_rating}</p>
          <span className=" text-gray-500">{movie.year}</span>

          <p className="mt-1.5 text-pretty text-xs text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
            nobis, quia soluta quisquam voluptatem nemo.
          </p>
        </div>
      </div>
    </Link>
  );
}
