import React from "react";
import { useLoaderData } from "react-router";

const MyRecipesInTable = () => {
  const myRecipes = useLoaderData();
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4 dark:text-gray-200">
        My Added Recipes
      </h1>
      <table className="table table-zebra w-full rounded-lg overflow-hidden shadow-lg">
        <thead className="bg-gray-100 text-gray-700 dark:bg-gray-300">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody className="dark:bg-gray-200">
          {myRecipes.length === 0 ? (
            <tr className="">
              <td
                colSpan="5"
                className="text-center text-gray-500 mt-4 dark:text-gray-800 col-span-4"
              >
                No recipes found.
              </td>
            </tr>
          ) : (
            myRecipes.map((recipe, index) => (
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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyRecipesInTable;
