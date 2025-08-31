import React, { useContext, useState } from "react";
import RecipeCard from "./RecipeCard";
import { useLoaderData } from "react-router";
import bgAllRecipeImg from "../assets/images/bg-all-recipe.jpg";
import AuthContext from "./context/AuthContext";

const AllRecipes = () => {
  const initialRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(initialRecipes);
  const { theme, setTheme } = useContext(AuthContext);

  // const { recipes, setRecipes } = use(AuthContext);
  console.log(recipes);
  return (
    <div className={`${theme ? "dark" : ""}  dark:bg-zinc-600 p-4`}>
      <div className={` max-w-7xl mx-auto  dark:bg-zinc-600 `}>
        <div
          style={{ backgroundImage: `url(${bgAllRecipeImg})` }}
          className="relative w-full h-48 sm:h-64 md:h-80 bg-cover bg-no-repeat bg-center "
        >
          <h1 className="absolute top-[40%] pl-5 text-gray-300 w-full text-6xl font-bold">
            All Recipes
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {recipes?.map((recipe) => (
            <RecipeCard recipe={recipe}></RecipeCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllRecipes;
