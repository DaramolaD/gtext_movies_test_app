import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovieDetails } from "../services/movieService";
import { DetailMovie } from "../types/types";

import menu from "../assets/menu.svg";
import closeIcon from "../assets/x.svg";
import avatar from "../assets/avatar.png";
import star from "../assets/star_.svg";
import ErrorState from "../components/molecules/ErrorState";
import LoadingState from "../components/molecules/LoadingState";
import MissingMovieIdState from "../components/molecules/MissingMovieIdState";
import FooterSection from "../components/organisms/FooterSection";

const DetailPage = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [movie, setMovie] = useState<DetailMovie | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) return;

      try {
        const response = await getMovieDetails(id);
        setMovie(response.data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);
  console.log("movie", movie);

  const navLinks = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "Bookmark", url: "/bookmarks" },
  ];

  if (!id) return <MissingMovieIdState />;
  if (loading) return <LoadingState />;
  if (!movie) return <ErrorState />;

  return (
    <main className="flex flex-col w-full h-full">
      <header className="sticky top-0 flex flex-col gap-5 bg-[#1C2127] py-5 z-50">
        <div className="flex items-center pb-1 justify-between border-b border-[#32383f]">
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
        
        <h1 className="text-base md:text-2xl text-left font-bold">Movie Detail</h1>
      </header>

      <section className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <img
            src={movie.Poster}
            alt={`${movie?.Title || "movie"} img`}
            className="w-full max-h-[500px] object-center object-contain"
          />
          <div className="flex w-full text-left items-start flex-col gap-2">
            <div className="flex w-full items-center gap-1">
              <h2 className="w-full text-left text-xl font-semibold">
                Title: {movie?.Title || "N/A"}
              </h2>
              <div className="flex w-fit items-center gap-2">
                <div className="ml-2 flex items-center gap-1 text-yellow-400">
                  <img
                    src={star}
                    alt="Rating"
                    className="min-w-4 min-h-4 fill-white"
                  />
                </div>
                <span className="text-base md:text-lg">
                  {movie?.imdbRating || "N/A"}
                </span>
              </div>
            </div>
            <p className="text-sm md:text-base text-white/70">
              Writer:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Writer || "N/A"}
              </span>
            </p>
            <p className="text-start text-sm md:text-base text-white/70">
              Plot:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Plot || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Type:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Type || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Year:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Year || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Genre:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Genre || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Actors:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Actors || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Awards:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Awards || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Box Office:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.BoxOffice || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Director:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Director || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Votes:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.imdbVotes || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Released:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Released || "N/A"}
              </span>
            </p>
            <p className="text-sm md:text-base text-white/70">
              Language:
              <span className="ml-2 text-base md:text-lg text-white">
                {movie?.Language || "N/A"}
              </span>
            </p>
          </div>
        </div>
      </section>

      
      <FooterSection />
    </main>
  );
};

export default DetailPage;
