import React from "react";
import { Routes, Route } from "react-router";
import Home from "../pages/Home/Home";
import NavBar from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
export default function Navigator() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
