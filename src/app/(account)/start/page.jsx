"use client"

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Start = () => {
  const router = useRouter();

  return (
    <div>
      <div className="fixed top-0 left-0 flex items-center justify-between w-full px-4 text-black bg-white shadow-sm sm:px-8">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src="/images/Logo/Netflix.png"
            alt="Logo"
            className="object-contain h-16"
          />
        </Link>
        <Link href="/create">
          <button className="text-lg">Sign In</button>
        </Link>
      </div>
      <div className="grid w-full h-full gap-2 text-black bg-white py-44 place-items-center place-content-center">
        <div className="flex items-center justify-center gap-2">
          <Image
            width={60}
            height={60}
            src="/images/laptop.png"
            alt="/"
            className="object-contain w-20 h-16"
          />
          <Image
            width={60}
            height={60}
            src="/images/monitor.png"
            alt="/"
            className="object-contain w-20 h-16"
          />
          <Image
            width={60}
            height={60}
            src="/images/mobile-phone.png"
            alt="/"
            className="object-contain w-18 h-14"
          />
        </div>
        <p className="text-xs">STEP 1 OF 3</p>
        <h1 className="text-2xl font-semibold text-center">
          Finish setting up your <br /> account
        </h1>
        <h6 className="text-sm text-center">
          NetFlix is personalized for you. <br />
          Create a password to watch on any <br />
          device at any time.
        </h6>
        <button
          onClick={() => router.push("/register", { replace: true })}
          className="w-full py-2 mt-3 text-lg text-center text-white bg-red-600 rounded cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Start;
