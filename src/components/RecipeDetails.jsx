import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  // console.log(recipe);
  const {
    title,
    prepTime,
    likes,
    isChecked,
    instructions,
    ingredients,
    image,
    cuisine,
  } = recipe;
  // const [islikes, setIsLikes] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(true);
    // setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 mb-0">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-8xl overflow-hidden m-4">
        <img
          src={image}
          alt="Fluffy Pancakes"
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
          <div className="flex justify-between text-gray-600 text-sm mb-3">
            <span>Cuisine: {cuisine}</span>
            <span>Preparation Time: {prepTime} min</span>
          </div>
          <div className="flex flex-wrap gap-2 mb-3">
            {isChecked?.map((tag) => (
              <span
                key={tag}
                className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Ingredients
            </h3>
            <ul className="list-disc pl-5 text-gray-600 text-sm">
              {ingredients}
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-700 mb-1">
              Instructions
            </h3>
            <p className="text-gray-600 text-sm">{instructions}</p>
          </div>
          <button
            onClick={toggleLike}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-medium ${
              isLiked
                ? "bg-green-500 hover:bg-green-600"
                : "bg-red-500 hover:bg-red-600"
            } transition-colors`}
          >
            <FaHeart className="text-white" />
            {isLiked ? "Liked" : "Like"}
          </button>
          <div className="text-gray-600 text-sm mt-2">Likes: {likes}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
