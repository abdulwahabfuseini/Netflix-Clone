import React from "react";
import { CreatePro } from "./HomeData";
import Image from "next/image";

const Create = () => {
  return (
    <div className="w-full h-full px-4 py-10 bg-black">
      <div className="flex items-center justify-center text-center lg:text-left">
        {CreatePro.map((kids, index) => {
          return (
            <div
              key={index}
              className="flex flex-col-reverse items-center justify-center lg:flex-row gap-y-10"
            >
              <div>
                <Image
                  width={650}
                  height={60}
                  objectFit="contain"
                  src={`/images/Logo/${kids.cover}`}
                  alt="kids"
                />
              </div>
              <div className="w-full lg:w-[550px]">
                <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
                  {kids.title}
                </h1>
                <p className=" lg:text-2xl">{kids.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Create;
