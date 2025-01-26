/* eslint-disable no-undef */
import { render, screen, waitFor } from "@testing-library/react";
import { MovieFetchProvider, useFetchContext } from "./FetchContext"; // Adjust the import based on your file structure

// Mocking the fetch API
global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([{ id: 1, title: "Inception" }]), // Mock movie data
  })
);

const TestComponent = () => {
  const { MovieData, loading, error } = useFetchContext();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {MovieData.map((movie) => (
        <p key={movie.id}>{movie.title}</p>
      ))}
    </div>
  );
};

describe("MovieFetchProvider", () => {
  it("fetches and displays movie data", async () => {
    render(
      <MovieFetchProvider>
        <TestComponent />
      </MovieFetchProvider>
    );

    // Check for loading state
    expect(screen.getByText(/loading/i)).toBeInTheDocument();

    // Wait for the movie data to be displayed
    await waitFor(() =>
      expect(screen.getByText("Inception")).toBeInTheDocument()
    );

    // Check that loading state is gone
    expect(screen.queryByText(/loading/i)).not.toBeInTheDocument();
  });
});
