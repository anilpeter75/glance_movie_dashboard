import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { useFetchContext } from "@/context/FetchContext";
import Home from "./index";
import { expect } from "vitest";

vi.mock("@/context/FetchContext", () => ({
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
  return render(<MemoryRouter>{ui}</MemoryRouter>);
};

describe("Home Component", () => {
  it("shows loading state", () => {
    useFetchContext.mockReturnValue({
      MovieData: [],
      loading: true,
      error: null,
    });

    renderWithProviders(<Home />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it("shows error state", () => {
    useFetchContext.mockReturnValue({
      MovieData: [],
      loading: false,
      error: "Failed to fetch movies.",
    });

    renderWithProviders(<Home />);

    expect(
      screen.getByText("Error: Failed to fetch movies.")
    ).toBeInTheDocument();
  });

  it("renders movie data", () => {
    useFetchContext.mockReturnValue({
      MovieData: mockMovieData,
      loading: false,
      error: null,
    });

    renderWithProviders(<Home />);
    screen.debug();
    // expect(screen.getByText(/oscar statistics/i)).toBeInTheDocument();
    // expect(screen.getByText(/inception/i)).toBeInTheDocument();
    // expect(screen.getByText(/the matrix/i)).toBeInTheDocument();
  });
});
