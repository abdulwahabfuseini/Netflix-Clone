"use client"

import { FaHeart, FaRegCalendarAlt } from "react-icons/fa";
import { BiTime } from "react-icons/bi";

const MovieInfo = ({ movie }) => {
  return (
    <div className="absolute p-2 font-bold rounded-md left-6 lg:left-40 bottom-6 lg:bottom-20">
      <h3 className="text-lg sm:text-3xl">{movie.title}</h3>
      <div className="gap-6 py-5 flexBox">
        <div className="gap-2 text-lg flex-cen">
          <h4>{movie.category}</h4>
        </div>
        <div className="gap-2 flex-cen">
          <FaRegCalendarAlt />
          <h4>{movie.year}</h4>
        </div>
        <div className="gap-2 flex-cen">
          <BiTime />
          <h4>{movie.time}</h4>
        </div>
      </div>
      <div className="gap-3 flex-cen">
        <button className="px-4 py-2 text-white transition rounded-md bg-SubMain hover:text-main hover:bg-white text-md sm:text-lg lg:text-xl">
          Watch
        </button>
        <FaHeart className="w-10 h-10 p-2 rounded-md bg-glass backdrop-blur-sm hover:text-SubMain" />
      </div>
    </div>
  );
};

export default MovieInfo;
