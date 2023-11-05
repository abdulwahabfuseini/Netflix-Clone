import Create from "@/components/home/Create";
import Download from "@/components/home/Download";
import Enjoy from "@/components/home/Enjoy";
import Hero from "@/components/home/Hero";
import Question from "@/components/home/Question";
import Watch from "@/components/home/Watch";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="bg-dry text-white">
      <div className="w-full h-full  space-y-1.5 bg-stone-700 ">
        <Hero />
        <Enjoy />
        <Download />
        <Watch />
        <Create />
        <Question />
        <Footer />
      </div>
    </div>
  );
}
