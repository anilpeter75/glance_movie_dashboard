import MovieList from "./LatestMovieList";
import OscarStatistics from "./OscarStatisticsBar";
import { useFetchContext } from "@/context/FetchContext";
import PieChart_Rating from "./Chart_RatingPie";
import OscarWinningByYear from "./";

export default function Home() {
  const { MovieData, error, loading } = useFetchContext();

  if (loading) return <p>Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className="px-5  text-white flex flex-col gap-8">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
        <PieChart_Rating MovieData={MovieData} />
        <OscarWinningByYear movieData={MovieData} />
      </div>

      <OscarStatistics MovieData={MovieData} />
      <MovieList MovieData={MovieData} />
    </div>
  );
}
