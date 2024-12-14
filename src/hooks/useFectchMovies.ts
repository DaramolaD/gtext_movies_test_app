import { useEffect, useState } from "react";
import { getSearchMovies } from "../services/movieService";

const useFectchMovies = (query: string) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }
      setLoading(true);
      try {
        const movieResults = await getSearchMovies(query);
        setMovies(movieResults);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading };
};

export default useFectchMovies;



