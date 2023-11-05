import Image from "next/image";
import Link from "next/link";

const ComedyCard = ({ comedy }) => {
  return (
    <div className="relative w-full h-full rounded transitions ">
      <Link href={`/movie/${comedy?.title}`}>
        <Image
          width={600}
          height={120}
          src={`/images/movies/${comedy?.cover}`}
          alt={comedy?.title}
          className="relative object-cover w-full h-40 sm:h-48 lg:h-52"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 w-full text-center text-white sm:py-2 bg-dry">
        <h1 className="font-semibold truncate">{comedy?.title}</h1>
      </div>
    </div>
  );
};

export default ComedyCard;
