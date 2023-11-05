"use client";

import { Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import RelatedMovies from "@/components/movies/RelatedMovies";
import Layout from "@/components/layout/Layout";
import { MoviesData } from "@/assets/Data/MoviesData";
import { notFound } from "next/navigation";

const getSingleMovie = (single) => {
  // const movie = MoviesData.find((movie) => movie.title === id);
  const movie = MoviesData[single];
  if (movie) {
    return movie;
  }
  return notFound();
};

const SingleMovie = ({ params }) => {
  const movie = getSingleMovie(params.singleMovie);
  return (
    <Layout>
      <div className="relative w-full h-full">
        <Image
          width={180}
          height={120}
          src={`/images/movies/${movie?.cover}`}
          alt={movie?.title}
          className="w-full h-[2000px] sm:h-[1600px] object-cover "
        />
        <div className="absolute top-0 bottom-0 left-0 flex-col w-full h-full px-3 bg-dry bg-opacity-90 lg:py-14 sm:px-8 lg:px-24 ">
          <div className="grid grid-cols-1 pt-10 sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 lg:gap-16 sm:py-10">
            <div className="sm:h-[550px] col-span-1 rounded-md overflow-hidden">
              <Image
                width={180}
                height={120}
                src={`/images/movies/${movie?.poster}`}
                alt={movie?.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="col-span-1 py-8 sm:py-0">
              <Image
                width={180}
                height={120}
                src={`/images/Logo/${movie?.imageTitle}`}
                alt={movie?.title}
                className="object-contain h-24 mb-10 w-80"
              />

              <h1 className="text-lg sm:text-xl">{movie?.title}</h1>
              <div className="flex items-center gap-4 py-3 text-slate-400">
                <h4 className="relative before:contents() before:-right-2 before:bottom-1 before:border-r before:h-4 before:absolute before:border-r-slate-500 ">
                  {movie?.year}
                </h4>
                <h4 className="relative before:contents() before:-right-2 before:bottom-1 before:border-r before:h-4 before:absolute before:border-r-slate-400 border px-1 border-slate-400">
                  {movie?.PG}
                </h4>
                <h4 className="relative before:contents() before:-right-2 before:bottom-1 before:border-r before:h-4 before:absolute before:border-r-slate-400 ">
                  {movie?.time}
                </h4>
                <h4 className="">{movie?.genres}</h4>
              </div>
              <Typography.Paragraph className="leading-6 text-white lg:w-96">
                {movie?.desc}
              </Typography.Paragraph>
              <p className=" text-slate-400">
                Starring: <span className="text-white">{movie?.Starring}</span>{" "}
              </p>
              <div className="flex items-center gap-10 py-10">
                <p className=" text-slate-400">
                  Review: <span className="text-white "> {movie?.review}</span>
                </p>
                <p className=" text-slate-400">
                  Rate: <span className="text-white ">{movie?.rate}k</span>
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center w-full h-20 gap-3 px-6 py-4 bg-black">
            <Image
              width={180}
              height={120}
              src="/favicon.png"
              alt="Logo"
              className="object-contain h-16"
            />
            <div className="flex flex-col items-center justify-between sm:flex-row sm:w-full">
              <h5>Watch all you want</h5>
              <Link href="/">
                <button className="px-3 py-1 text-sm bg-red-600 rounded sm:py-2 sm:text-md">
                  JOIN NOW
                </button>
              </Link>
            </div>
          </div>
          <div className="pt-20 sm:pt-32">
            <header className="text-xl sm:text-2xl">More Like This</header>
            <div className="grid grid-cols-2 pt-8 sm:grid-cols-4 gap-y-3 gap-x-2">
              {movie.related?.map((movie) => (
                <RelatedMovies key={movie.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SingleMovie;
