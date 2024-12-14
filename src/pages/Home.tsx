import { useEffect, useState } from "react";
import HeaderSection from "../components/organisms/HeaderSection";
import MoviesSection from "../components/organisms/MoviesSection";
import LoadingState from "../components/molecules/LoadingState";
import useFectchMovies from "../hooks/useFectchMovies";
import { Movie } from "../types/types";
import FooterSection from "../components/organisms/FooterSection";

const Home = () => {
  const [query, setQuery] = useState("Avengers");
  const [bookmark, setBookmark] = useState<Movie[]>([]);

  const { movies, loading } = useFectchMovies(query);

  useEffect(() => {
    const movieBookmarks = localStorage.getItem("movie-bookmark");
    const parsedBookmarks = movieBookmarks ? JSON.parse(movieBookmarks) : [];
    setBookmark(parsedBookmarks);
  }, []);

  // Add to LocalStorage
  const saveToLocalStorage = (items: Movie[]) => {
    localStorage.setItem("movie-bookmark", JSON.stringify(items));
  };

  // Add movie to bookmarks
  const addMovieToBookmark = (movie: Movie) => {
    const newBookmarkList = [...bookmark, movie];
    setBookmark(newBookmarkList);
    saveToLocalStorage(newBookmarkList);
  };

  // Remove movie from bookmarks
  const removeMovieFromBookmark = (movie: Movie) => {
    const newBookmarkList = bookmark.filter(
      (bookmarkMovie) => bookmarkMovie.imdbID !== movie.imdbID
    );
    setBookmark(newBookmarkList);
    saveToLocalStorage(newBookmarkList);
  };

  return (
    <main className="flex flex-col w-full h-full">
      <HeaderSection query={query} setQuery={setQuery} />
      {loading ? (
        <LoadingState />
      ) : (
        <MoviesSection
          movies={movies}
          addMovieToBookmark={addMovieToBookmark}
          removeMovieFromBookmark={removeMovieFromBookmark}
          bookmark={bookmark}
        />
      )}
      <FooterSection />
    </main>
  );
};

export default Home;
