"use client"

import { useAuth } from "@/contexts/AuthContext";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleLogout = () => {
    auth.logout();
    router.push("/");
  };

  return (
    <div className="relative w-full px-4 py-3 sm:py-0 h-18 lg:px-20 sm:px-8 bg-main">
      <div className="flexBox">
        <div className="">
          <Link href="/movie">
            <Image
              width={100}
              height={100}
              src="/images/Logo/Netflix.png"
              alt="Logo"
              className="object-contain h-14 sm:h-16 "
            />
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="hidden sm:block">UNLIMITED TV SHOWS & MOVIES</h1>
          <button onClick={handleLogout} className="px-2 py-1 border">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
