"use client"

import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PuffLoader from "react-spinners/PuffLoader";
import Movie from "./Movie";
import { MoviesData } from "@/assets/Data/MoviesData";

const TrendingMovies = () => {
  const [loading, setLoading] = useState(false);
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevtEl] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full px-3 py-12 sm:px-10">
      <header className="text-xl font-semibold text-white sm:text-2xl">
        <h1>Trending Movies</h1>
      </header>
      <div className="relative mt-5 text-center">
        <Swiper
          navigation={{ nextEl, prevEl }}
          spaceBetween={9}
          loop={true}
          speed={3000}
          modules={[Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 2.16,
            },
            400: {
              slidesPerView: 2.16,
            },
            600: {
              slidesPerView: 3.2,
            },
            768: {
              slidesPerView: 3.2,
            },
            1024: {
              slidesPerView: 4.4,
            },
          }}
        >
          {MoviesData.slice(6, 19).map((trend) => {
            return (
              <SwiperSlide key={trend.id}>
                {loading ? (
                  <PuffLoader
                    color="yellow"
                    loading={loading}
                    size={50}
                    margin={2}
                  />
                ) : (
                  <Movie trend={trend} />
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="items-center justify-center hidden gap-6 lg:flex">
          <button
            ref={(node) => setPrevtEl(node)}
            className="absolute z-20 -left-6 top-20"
          >
            <FaChevronLeft className="w-10 h-10 p-2 font-bold hover:border-2 hover:rounded-full hover:border-star text-star hover:ring-2 hover:ring-slate-300 hover:bg-dry text-SubMain" />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="absolute z-20 -right-6 top-20"
          >
            <FaChevronRight className="w-10 h-10 p-2 font-bold hover:border-2 hover:rounded-full hover:border-star text-star hover:ring-2 hover:ring-slate-300 hover:bg-dry text-SubMain" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrendingMovies;
