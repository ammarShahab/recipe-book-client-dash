import React, { use, useState } from "react";
import RecipeCard from "./RecipeCard";
import AuthContext from "./context/AuthContext";
import { useLoaderData } from "react-router";

const AllRecipes = () => {
  const initialRecipes = useLoaderData();
  const [recipes, setRecipes] = useState(initialRecipes);

  // const { recipes, setRecipes } = use(AuthContext);
  // console.log(recipes);
  return (
    <div className="mt-20 mb-40">
      <h1 className="text-center text-6xl font-bold">All Recipes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {recipes?.map((recipe) => (
          <RecipeCard recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default AllRecipes;
