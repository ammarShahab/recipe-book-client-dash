import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import AuthContext from "./context/AuthContext";

const AllRecipesTable = () => {
  const allRecipes = useLoaderData();
  const { theme } = useContext(AuthContext);
  return (
    <div className={`overflow-x-auto p-4 ${theme ? "dark" : ""} `}>
      <h1 className="text-center text-2xl font-bold mb-4 dark:text-gray-200">
        All Recipes
      </h1>
      <table className="w-full table table-zebra shadow-lg rounded-lg overflow-hidden dark:bg-zinc-400">
        <thead className="bg-gray-300 text-gray-700 dark:bg-gray-300">
          <tr>
            <th className="text-center">#</th>
            <th className="text-left">Image</th>
            <th className="text-left">Title</th>
            <th className="text-center">Cuisine</th>
            <th className="text-center">Likes</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-200">
          {allRecipes.map((recipe, index) => (
            <tr key={recipe._id}>
              <td className="text-center pt-2">{index + 1}</td>
              <td className="pt-2">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-12 h-12 object-cover rounded-md"
                />
              </td>
              <td className="font-medium pt-2">{recipe.title}</td>
              <td className="text-center pt-2">{recipe.cuisine}</td>
              <td className="text-center pt-2">❤️ {recipe.likes}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {allRecipes.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No recipes found.</p>
      )}
    </div>
  );
};

export default AllRecipesTable;
