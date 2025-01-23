import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { MovieFetchProvider, useFetchContext } from "./FetchContext";

const mockData = [
  { title: "Movie 1", year: "2022" },
  { title: "Movie 2", year: "2021" },
];

describe("MovieFetchProvider", () => {
  beforeEach(() => {
    // Mock fetch globally
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Restore original fetch after each test
    vi.restoreAllMocks();
  });

  it("fetches movie data successfully and updates context", async () => {
    // Mock a successful fetch
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const wrapper = ({ children }) => <MovieFetchProvider>{children}</MovieFetchProvider>;

    const { result } = renderHook(() => useFetchContext(), { wrapper });

    // Initially, loading should be true
    expect(result.current.loading).toBe(true);

    // Wait for the fetch to complete
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Check that the fetched data is in context
    expect(result.current.MovieData).toEqual(mockData);
    expect(result.current.error).toBe(null);
  });

  it("handles fetch failure and uses fallback data", async () => {
    // Mock a failed fetch
    fetch.mockRejectedValueOnce(new Error("Fetch failed"));

    const wrapper = ({ children }) => <MovieFetchProvider>{children}</MovieFetchProvider>;

    const { result } = renderHook(() => useFetchContext(), { wrapper });

    // Initially, loading should be true
    expect(result.current.loading).toBe(true);

    // Wait for the fetch to complete
    await waitFor(() => expect(result.current.loading).toBe(false));

    // Check that fallback data (MovieData1) is used
    expect(result.current.MovieData).toEqual(expect.any(Array)); // Replace with the actual fallback data if needed
    expect(result.current.error).toBe(null);
  });
});
