import React from "react";
import { useLoaderData } from "react-router";

const MyRecipesInTable = () => {
  const myRecipes = useLoaderData();
  return (
    <div className="overflow-x-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">My Added Recipes</h1>
      <table className="table table-zebra w-full rounded-lg shadow-lg">
        <thead className="bg-gray-100 text-gray-700">
          <tr>
            <th>#</th>
            <th>Image</th>
            <th>Title</th>
            <th>Cuisine</th>
            <th>Likes</th>
          </tr>
        </thead>
        <tbody>
          {myRecipes.map((recipe, index) => (
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

      {myRecipes.length === 0 && (
        <p className="text-center text-gray-500 mt-4">No recipes found.</p>
      )}
    </div>
  );
};

export default MyRecipesInTable;
