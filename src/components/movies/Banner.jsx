"use client";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { MoviesData } from "../../assets/Data/MoviesData";
import MovieInfo from "./MovieInfo";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full h-full">
      <Swiper
        direction="vertical"
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        className="w-full h-48 md:h-72 sm:h-60 xl:h-96"
      >
        {MoviesData.slice(0, 6).map((movie, index) => (
          <SwiperSlide key={index} className="relative">
            <Image
              fill
              src={`/images/movies/${movie?.cover}`}
              alt={movie?.title}
              className="object-cover w-full h-full"
            />
            <MovieInfo movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
