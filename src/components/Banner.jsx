import React from "react";
import bannerImage from "../assets/images/bannerImage.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative w-full min-h-full bg-gray-800">
        <img
          src={bannerImage}
          alt="Banner Image"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-bitter">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 ">
            Daily Delicious Discoveries
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl">
            Explore a world of flavors with daily updated recipes. Find your
            next favorite dish and keep your kitchen inspired.
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
