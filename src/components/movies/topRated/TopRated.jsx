"use client";

import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PuffLoader from "react-spinners/PuffLoader";
import { Rate } from "antd";
import { MoviesData } from "@/assets/Data/MoviesData";
import Image from "next/image";

const TopRated = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="w-full h-full px-3 py-12 sm:px-10">
      <header className="text-xl font-semibold text-whitesm:text-2xl">
        <h1>TopRated Movies</h1>
      </header>
      <div className="relative mt-5 text-center">
        <Swiper
          spaceBetween={9}
          // pagination={{ clickable: true }}
          autoplay={{ delay: 6000, disableOnInteraction: false }}
          loop={true}
          speed={3000}
          modules={[Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 2.16,
            },
            400: {
              slidesPerView: 2.16,
            },
            600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4.4,
            },
          }}
        >
          {MoviesData.slice(5, 36).map((rated) => {
            return (
              <SwiperSlide key={rated.id} className="mb-24">
                {loading ? (
                  <PuffLoader
                    color="yellow"
                    loading={loading}
                    size={50}
                    margin={2}
                  />
                ) : (
                  <div className="relative">
                    <Image
                      width={600}
                      height={120}
                      src={`/images/movies/${rated?.cover}`}
                      alt={rated?.title}
                      className="relative object-cover w-full h-52 sm:h-60 lg:h-72"
                    />
                    <button className="absolute bottom-0 left-0 right-0 w-full py-2 text-center bg-dry bg-opacity-80">
                      <Rate defaultValue={5} />
                    </button>
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRated;
