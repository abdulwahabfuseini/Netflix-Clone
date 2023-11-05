import Image from "next/image";
import { DownloadApp } from "./HomeData";

const Download = () => {
  return (
    <div className="w-full h-full px-6 py-6 bg-black">
      <div className="flex justify-center text-center flex-items-center lg:text-left">
        {DownloadApp.map((download, index) => {
          return (
            <div
              key={index}
              className="flex flex-col-reverse items-center justify-center lg:flex-row gap-y-10"
            >
              <div className="relative">
                <Image
                  width={550}
                  height={60}
                  objectFit="contain"
                  src={`/images/Logo/${download.cover}`}
                  alt="download"
                />
              </div>
              <div className="w-full lg:w-[580px]">
                <h1 className="w-full mb-4 text-3xl font-bold lg:text-5xl ">
                  {download.title}
                </h1>
                <p className="font-semibold lg:text-2xl">{download.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Download;
