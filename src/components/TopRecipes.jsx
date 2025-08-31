import React, { use, useEffect, useState } from "react";
import { Link } from "react-router";
import { Typewriter } from "react-simple-typewriter";
import AuthContext from "./context/AuthContext";

const TopRecipes = () => {
  const { setIsLoading, theme } = use(AuthContext);
  const [topRecipes, setTopRecipes] = useState([]);
  // console.log(theme);

  useEffect(() => {
    setIsLoading(true);
    // fetch("https://b11a10-server-side-ashahab007.vercel.app/top-recipes")
    fetch("http://localhost:3000/top-recipes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setTopRecipes(data);
        setIsLoading(false);
      });
  }, [setIsLoading]);

  // console.log(topRecipes);

  const handleViewDetails = (id) => {
    setIsLoading(false);
    // console.log(id);
  };

  return (
    <div className={`${theme ? "dark" : ""} dark:bg-zinc-600 pt-24`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl lg:text-5xl font-bold mb-6 font-bitter text-center text-amber-950 dark:text-white ">
          Top
          <Typewriter
            words={[
              " Savory Secrets",
              " Tastes to Try",
              " Culinary Picks",
              " Dish Delights",
              " Recipes",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          ></Typewriter>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-2">
          {topRecipes.map((recipe) => (
            <div
              key={recipe._id}
              className={`bg-white rounded-lg shadow-md overflow-hidden text-center p-4 hover:scale-[1.02] transition duration-200 ${
                theme ? "dark" : ""
              }  dark:bg-zinc-400`}
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover bg-gray-200 rounded-lg"
              />
              <h3 className="text-lg font-semibold text-gray-800 mt-3 dark:text-white">
                {recipe.title}
              </h3>
              <p className="text-gray-600 dark:text-white">
                Cuisine: {recipe.cuisine}
              </p>
              <p className="text-gray-600 dark:text-white">
                Likes: {recipe.likes}
              </p>
              <Link to={`/recipe/${recipe._id}`}>
                <button
                  onClick={() => handleViewDetails(recipe._id)}
                  className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                >
                  View Details
                </button>
              </Link>
            </div>
          ))}
        </div>
        <Link to="/allrecipes">
          <button className="block mx-auto mt-6 bg-green-500 text-white px-6 py-3 rounded-md text-lg hover:bg-green-600 transition">
            See All Recipes
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TopRecipes;
