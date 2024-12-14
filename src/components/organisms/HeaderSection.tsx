import { Dispatch, SetStateAction, useState } from "react";
import menu from "../../assets/menu.svg";
import closeIcon from "../../assets/x.svg";
import avatar from "../../assets/avatar.png";

interface HeaderSectionProps {
  query: string;
  setQuery: Dispatch<SetStateAction<string>>;
}

const HeaderSection = ({ query, setQuery }: HeaderSectionProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const navLink = [
    {
      id: 1,
      text: "Home",
      url: "/",
    },
    {
      id: 2,
      text: "Bookmark",
      url: "/bookmarks",
    },
  ];
  return (
    <header className="sticky top-0 flex flex-col gap-5 bg-[#1C2127] py-5 z-50">
      <div className="flex items-center pb-1 justify-between border-b border-[#32383f]">
        
        {/* Logo */}
        <div className="text-xl md:2xl text-white hover:text-blue-500">
          GTEXT
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-3">
          {navLink.map(({ id, text, url }) => (
            <a key={id} href={url} className="text-base hover:text-blue-500">
              {text}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <img
            src={avatar}
            alt=""
            className="size-8 rounded-full cursor-pointer"
          />
          <img
            src={menu}
            alt=""
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
            {navLink.map(({ id, text, url }) => (
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
      <div className="flex justify-end w-full">
        <input
          type="text"
          placeholder="Enter a title "
          className="py-2 px-3 text-black"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
    </header>
  );
};

export default HeaderSection;
