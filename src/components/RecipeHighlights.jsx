import React, { use } from "react";
import CountUp from "react-countup";
import AuthContext from "./context/AuthContext";

const RecipeHighlights = () => {
  const { theme } = use(AuthContext);
  const stats = [
    {
      title: "Recipes Added",
      subtitle: "Total recipes created by our foodie community",
      value: 1245,
      gradient: "from-blue-100 to-blue-200",
    },
    {
      title: "Wishlist Saves",
      subtitle: "Recipes saved for future cooking adventures",
      value: 783,
      gradient: "from-green-100 to-green-200",
    },
    {
      title: "Recipe Likes",
      subtitle: "Love shown to delicious dishes",
      value: 600,
      gradient: "from-purple-100 to-purple-200",
    },
    {
      title: "Top Recipes",
      subtitle: "Most-loved recipes shining bright",
      value: 200,
      gradient: "from-pink-100 to-pink-200",
    },
  ];

  return (
    <section
      className={` py-10 text-center ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600 pt-24`}
    >
      <h2 className="text-3xl lg:text-5xl font-bold mb-6 font-bitter dark:text-white">
        Recipe Highlights
      </h2>
      <p className="text-xl text-gray-600 dark:text-white">
        Builds trust by showing achievements and growth.
      </p>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 mt-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br  ${
              theme ? "dark" : stat.gradient
            }  dark:bg-zinc-500 rounded-2xl shadow p-6`}
          >
            <div className="text-left space-y-4">
              <h1 className="text-3xl font-bold mt-2 text-gray-700 dark:text-white">
                {stat.title}
              </h1>
              <p className="dark:text-white">{stat.subtitle}</p>
              {
                <CountUp
                  className="text-4xl font-bold dark:text-white"
                  end={stat.value}
                  duration={10}
                ></CountUp>
              }
              <span className="text-4xl font-bold dark:text-white">+</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeHighlights;
