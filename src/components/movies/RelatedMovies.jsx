import Image from "next/image";
import Link from "next/link";

const RelatedMovies = ({ movie }) => {
  return (
    <div className="w-full h-full">
      <Link href={`/movie/${movie?.id}`} key={movie.title}>
        <div className="relative">
          <Image
            width={600}
            height={120}
            src={`/images/movies/${movie.cover}`}
            alt={movie?.title}
            className="object-cover w-full h-32 sm:h-52"
          />
        </div>
      </Link>
    </div>
  );
};

export default RelatedMovies;
