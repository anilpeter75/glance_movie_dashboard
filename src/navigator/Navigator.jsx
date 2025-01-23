import { Routes, Route } from "react-router";
import Home from "@/pages/Home";
import NavBar from "@/components/Layout/NavBar";
import Footer from "@/components/Layout/Footer";
import MovieDetails from "@/pages/MovieDetails/MovieDetails";
import AllMovies from "@/pages/AllMovies/AllMovies";
import ScrollToTop from "@/components/ScrollToTop";
export default function Navigator() {
  return (
    <div>
      <NavBar />
      <div className="pt-5 bg-primaryClr px-5 min-h-screen">
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:movieName" element={<MovieDetails />} />
            <Route path="/all_movies" element={<AllMovies />} />
          </Routes>
        </ScrollToTop>
      </div>
      <Footer />
    </div>
  );
}
