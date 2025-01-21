import React from "react";
import MovieList from "./MovieList";
import OscarStatistics from "./OscarStatistics";

export default function Home() {
  return (
    <div className="px-5 bg-primaryClr text-white pt-5">
      <MovieList />
      <OscarStatistics />
    </div>
  );
}
