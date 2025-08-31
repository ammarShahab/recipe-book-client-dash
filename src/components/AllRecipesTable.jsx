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
      <table className="w-full rounded-lg shadow-lg dark:bg-zinc-400 border">
        <thead className="bg-gray-100 text-gray-700 dark:bg-zinc-400">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody className="dark:bg-zinc-400">
          {allRecipes.map((recipe, index) => (
            <tr key={recipe._id}>
              <td>{index + 1}</td>
              <td>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="font-medium">{recipe.title}</td>
              <td>{recipe.cuisine}</td>
              <td>❤️ {recipe.likes}</td>
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
