import React, { useContext } from "react";
import AuthContext from "./context/AuthContext";

const NewsLetter = () => {
  const { theme } = useContext(AuthContext);
  return (
    <div
      className="w-full dark:bg-gray-500 py-20"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/5g0BzRtR/banner-Imag2-optinal.jpg')",
        // backgroundPosition: "center center",
        // backgroundBlendMode: "multiply",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col flex-wrap content-center md:mr-[30%] lg:mr-[55%] justify-center p-4 py-20  md:p-5">
        <div
          className={`bg-[#e3dccce8] p-20 rounded-2xl ${
            theme ? "dark" : ""
          }  dark:bg-zinc-600`}
        >
          <h1 className="text-5xl antialiased font-bold leading-none text-center font-bitter dark:text-white ">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-white">
            Find out about events and other news
          </p>
          <div className="flex flex-row">
            <input
              type="text"
              placeholder="example@email.com"
              className="w-3/5 p-3 rounded-l-lg sm:w-2/3 border border-amber-900 dark:text-gray-200 dark:border-amber-50"
            />
            <button
              type="button"
              className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-green-500 dark:bg-violet-600 dark:text-gray-50"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
