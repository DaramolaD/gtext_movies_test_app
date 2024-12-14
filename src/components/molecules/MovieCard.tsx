import React from "react";
import ArrowRight from "../../assets/arrow-right.svg";
import star from "../../assets/star_.svg";
import bookmarkPlus from "../../assets/bookmark-plus.svg";
import bookmarkX from "../../assets/bookmark-x.svg";
import Button from "../atoms/Button";
import { useNavigate } from "react-router-dom";

interface MovieCardProps {
  title?: string;
  year?: string;
  type?: string;
  image?: string;
  imdbID?: string;
  isBookmarked: boolean;
  onClick: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  year,
  image,
  type,
  imdbID,
  onClick,
  isBookmarked,
}) => {
  const navigate = useNavigate();
  const handleClick = (imdbID: string | undefined) => {
    navigate(`/movie/${imdbID}`);
  };

  return (
    <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md hover:shadow-lg group rounded-lg overflow-hidden bg-gray-800">
      {/* Movie Image */}
      <img
        src={image}
        alt={`${title} poster`}
        className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Card Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start gap-4 w-full">
          {/* Content Container */}
          <div className="flex-1 text-start overflow-hidden">
            <h3 className="text-lg font-semibold text-white truncate">
              {title || "Untitled Movie"}
            </h3>
            <p className="text-sm text-gray-400 truncate">
              Year: {year || "Unknown"}
            </p>
            <p className="text-sm text-gray-400 truncate">
              Type: {type || "Unknown"}
            </p>
          </div>

          {/* Bookmark Button */}
          <Button
            icon={<img src={isBookmarked ? bookmarkX : bookmarkPlus} alt="Bookmark" className="w-4 h-4" />}
            iconPosition="right"
            onClick={onClick}
            className={`text-sm !px-2 !py-2 ${
              isBookmarked
                ? "bg-gray-400 hover:bg-gray-500"
                : "bg-yellow-500 hover:bg-yellow-600/50"
            }`}
          />
        </div>

        {/* Ratings & Buttons */}

        <div className="flex items-center justify-between">
          {/* Ratings */}
          <div className="flex items-center gap-1 text-yellow-400">
            <img src={star} alt="Rating" className="w-4 h-4 fill-white" />
            <span>4.5</span>
          </div>

          {/* Button */}
          <Button
            icon={
              <img src={ArrowRight} alt="Arrow Right" className="w-4 h-4" />
            }
            iconPosition="right"
            onClick={() => handleClick(imdbID)}
            className="text-sm px-2 max-sm:py-1 bg-blue-500 hover:bg-blue-600"
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
