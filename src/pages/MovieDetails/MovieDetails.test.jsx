/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { useFetchContext } from "../../context/FetchContext";
import MovieDetails from "./MovieDetails";
import { expect } from "vitest";

vi.mock("../../context/FetchContext", () => ({
  useFetchContext: vi.fn(),
}));
const mockMovieData = [
  {
    title: "Inception",
    year: "2010",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt"],
    genre: ["Action", "Sci-Fi"],
    country: ["USA"],
    language: ["English"],
    imdb_rating: "8.8",
    oscar_nominations: 8,
    oscar_nominations_list: ["Best Picture", "Best Director"],
    oscar_winning: 4,
  },
];

const renderWithProviders = (ui) => {
  return render(
    <MemoryRouter initialEntries={["/movies/inception"]}>
      <Routes>
        <Route path="/movies/:movieName" element={ui} />
      </Routes>
    </MemoryRouter>
  );
};

describe("Movie Details Page", () => {
  it("Display movie detials", async () => {
    useFetchContext.mockReturnValue({
      MovieData: mockMovieData,
      loading: true,
      error: null,
    });

    renderWithProviders(<MovieDetails />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("Display movie detials", async () => {
    useFetchContext.mockReturnValue({
      MovieData: mockMovieData,
      loading: false,
      error: null,
    });

    renderWithProviders(<MovieDetails />);

    await waitFor(() => {
      expect(screen.getByText("Inception")).toBeInTheDocument();
      expect(screen.getByText("2010")).toBeInTheDocument();
      expect(
        screen.getByText("Leonardo DiCaprio, Joseph Gordon-Levitt")
      ).toBeInTheDocument();
    });
  });
});
