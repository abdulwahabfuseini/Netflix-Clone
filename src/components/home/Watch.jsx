import React from "react";

const Watch = () => {
  return (
    <div className="flex items-center justify-center w-full h-full px-6 py-20 bg-black lg:px-14">
      <div className="className='max-w-5xl leading-10 text-center lg:text-left lg:w-96">
        <h1 className="mb-3 text-3xl font-bold lg:text-5xl">
          Watch everywhere
        </h1>
        <p className="w-full lg:w-[400px] text-lg lg:text-2xl font-semibold">
          Stream unlimited movies and TV shows on your phone, tablet, laptop,
          and TV.
        </p>
      </div>
      <div className="w-[420px] text-black hidden lg:block">
        <p>.</p>
      </div>
    </div>
  );
};

export default Watch;
