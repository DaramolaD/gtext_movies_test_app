import { useState } from "react";

import useLocalStorage from "../hooks/useLocalStorage";
import MoviesSection from "../components/organisms/MoviesSection";
import { Movie } from "../types/types";

import avatar from "../assets/avatar.png";
import menu from "../assets/menu.svg";
import closeIcon from "../assets/x.svg";

const BookmarkPage = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [bookmark, setBookmark] = useLocalStorage("movie-bookmark", []);

  const removeMovieFromBookmark = (movie: Movie) => {
    const updatedBookmark = bookmark.filter((b) => b.imdbID !== movie.imdbID);
    setBookmark(updatedBookmark);
  };

  const navLinks = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Bookmark", url: "/bookmarks" },
  ];

  return (
    <main className="flex flex-col w-full h-full p-4">
      <header className="sticky top-0 flex flex-col gap-5 bg-[#1C2127] z-50">
        <div className="flex items-center py-4 justify-between border-b border-[#32383f]">
          <div className="text-xl md:2xl text-white hover:text-blue-500">
            GTEXT
          </div>
          <nav className="hidden md:flex items-center justify-center gap-3">
            {navLinks.map(({ id, text, url }) => (
              <a key={id} href={url} className="text-base hover:text-blue-500">
                {text}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <img
              src={avatar}
              alt="Avatar"
              className="size-8 rounded-full cursor-pointer"
            />
            <img
              src={menu}
              alt="Menu"
              className="flex md:hidden"
              onClick={() => setIsMobileNavOpen(true)}
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileNavOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-[#1C2127] flex flex-col z-50">
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#32383f]">
              <div className="text-xl text-white">GTEXT</div>
              <img
                src={closeIcon}
                alt="Close"
                className="cursor-pointer bg-[#e5e7eb] rounded-md py-1 px-1"
                onClick={() => setIsMobileNavOpen(false)}
              />
            </div>
            <nav className="flex flex-col items-center gap-5 mt-10">
              {navLinks.map(({ id, text, url }) => (
                <a
                  key={id}
                  href={url}
                  className="text-lg text-white hover:text-blue-500"
                  onClick={() => setIsMobileNavOpen(false)}
                >
                  {text}
                </a>
              ))}
            </nav>
          </div>
        )}
        <h1 className="text-base md:text-2xl font-bold text-center mb-5">My Bookmarked Movies</h1>
      </header>
      <section className="flex flex-col w-full h-full py-4">
        {bookmark.length > 0 ? (
          <MoviesSection
            movies={bookmark}
            removeMovieFromBookmark={removeMovieFromBookmark}
            bookmark={bookmark}
          />
        ) : (
          <p className="text-center text-gray-500">
            No bookmarks yet. Add some movies!
          </p>
        )}
      </section>
    </main>
  );
};

export default BookmarkPage;
