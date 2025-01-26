import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import NavBar from "@/components/Layout/NavBar";
import Loading from "@/components/Loading";
import ScrollToTop from "@/components/ScrollToTop";
const Footer = lazy(() => import("@/components/Layout/Footer"));
const MovieDetails = lazy(() => import("@/pages/MovieDetails/MovieDetails"));
const AllMovies = lazy(() => import("@/pages/AllMovies/AllMovies"));

export default function Navigator() {
  return (
    <div>
      <NavBar />
      <div className="pt-2 bg-primaryClr px-5 min-h-screen">
        <ScrollToTop>
          <Suspense fallback={<Loading />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:movieName" element={<MovieDetails />} />
              <Route path="/all_movies" element={<AllMovies />} />
            </Routes>
          </Suspense>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}
