import { createContext, useContext, useState, useEffect } from "react";
import MovieData1 from "../Data/MovieData";
const FetchContext = createContext();

export const MovieFetchProvider = ({ children }) => {
  const [MovieData, setMovieData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://run.mocky.io/v3/8d1a830d-f9d1-4bc6-bcd4-093d2ceffa05"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setMovieData(data);
      } catch (err) {
        setMovieData(MovieData1);
        // setError(err.message || "Failed to fetch movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [MovieData1]);

  return (
    <FetchContext.Provider value={{ MovieData, error, loading }}>
      {children}
    </FetchContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFetchContext = () => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("useFetchContext must be used within a MovieFetchProvider");
  }
  return context;
};
