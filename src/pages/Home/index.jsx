import { lazy, Suspense } from "react";
import { useFetchContext } from "@/context/FetchContext";
import Loading from "@/components/ui/Loading";
import PieChart_Rating from "./Chart_RatingPie";
import OscarWinningByYear from "./OscarByYear";
const MovieList = lazy(() => import("./LatestMovieList"));
const OscarStatistics = lazy(() => import("./OscarStatisticsBar"));

export default function Home() {
  const { MovieData, error, loading } = useFetchContext();
  if (loading) return <Loading />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="lg:px-5  text-white flex flex-col gap-8">
      <div className=" grid lg:grid-cols-2 grid-cols-1 gap-5">
        <PieChart_Rating MovieData={MovieData} />
        <OscarWinningByYear movieData={MovieData} />
      </div>
      <Suspense fallback={<Loading />}>
        <OscarStatistics MovieData={MovieData} />
        <MovieList MovieData={MovieData} />
      </Suspense>
    </div>
  );
}
