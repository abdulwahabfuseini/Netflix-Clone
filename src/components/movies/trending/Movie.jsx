import Image from "next/image";
import Link from "next/link";


const Movie = ({ trend }) => {
  return (
    <div className="relative w-full h-full rounded border-glass transitions">
      <Link href={`/movie/${trend?.title}`}>
      <Image
          width={600}
          height={120}
          src={`/images/movies/${trend?.cover}`}
          alt={trend?.title}
          className="relative object-cover  h-40 sm:h-48 lg:h-52"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center text-white sm:py-2 bg-dry">
        <h1 className="font-semibold text-center truncate">{trend?.title}</h1>
      </div>
    </div>
  );
};

export default Movie;
