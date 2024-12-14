import MovieCard from "../molecules/MovieCard";
import { Movie } from "../../types/types";
import EmptyState from "../molecules/EmptyState";

interface MoviesSectionProps {
  movies: Movie[];
  addMovieToBookmark?: (movie: Movie) => void;
  removeMovieFromBookmark?: (movie: Movie) => void;
  bookmark: Movie[];
}

const MoviesSection = ({
  movies,
  addMovieToBookmark,
  removeMovieFromBookmark,
  bookmark,
}: MoviesSectionProps) => {
  return (
    <section className="p-4 flex justify-center items-center w-full h-full">
      {!movies || movies.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          {movies.map((movie, index) => (
            <MovieCard
              key={index}
              // movie={movie}
              title={movie?.Title}
              year={movie?.Year}
              type={movie?.Type}
              imdbID={movie?.imdbID}
              image={movie?.Poster}
              isBookmarked={bookmark.some((b) => b.imdbID === movie.imdbID)}
              onClick={() =>
                bookmark.some(
                  (bookmarkMovie) => bookmarkMovie.imdbID === movie.imdbID
                )
                  ? removeMovieFromBookmark?.(movie)
                  : addMovieToBookmark?.(movie)
              }
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default MoviesSection;
