import React, { useContext, useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useLoaderData } from "react-router";
import AuthContext from "./context/AuthContext";
import toast from "react-hot-toast";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const { user } = useContext(AuthContext);

  const {
    _id,
    title,
    prepTime,
    likes: initialLikes,
    isChecked,
    instructions,
    ingredients,
    image,
    cuisine,
    likedBy = [], // 👈 backend sends this
  } = recipe;

  const [likes, setLikes] = useState(initialLikes || 0);
  const [isLiking, setIsLiking] = useState(false);
  const [hasLiked, setHasLiked] = useState(false);

  // 👇 Check if user already liked when page loads
  useEffect(() => {
    if (user && likedBy.includes(user.uid)) {
      setHasLiked(true);
    }
  }, [user, likedBy]);

  // console.log(user.uid);

  const handleLike = async () => {
    if (!user) {
      toast.error("Please login to like recipes");
      return;
    }
    if (isLiking || hasLiked) return;

    setIsLiking(true);
    try {
      const res = await fetch(`http://localhost:3000/recipes/${_id}/like`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.uid }), // 👈 sending userId
      });

      const data = await res.json();

      if (data.success) {
        setLikes(data.likes);
        setHasLiked(true);
      } else {
        toast.error(data.message || data.error || "Failed to like recipe");
      }
    } catch (err) {
      console.error("Error liking recipe:", err);
      toast.error("Something went wrong.");
    } finally {
      setIsLiking(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100 p-4">
      <div className="bg-white max-w-7xl rounded-lg shadow-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <div className="flex justify-between text-sm text-gray-600 mb-3">
            <span>Cuisine: {cuisine}</span>
            <span>Prep Time: {prepTime} min</span>
          </div>

          <div className="flex flex-wrap gap-2 mb-3">
            {isChecked?.map((tag) => (
              <span
                key={tag}
                className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg font-semibold mb-1">Ingredients</h3>
          <p className="text-sm mb-3">{ingredients}</p>

          <h3 className="text-lg font-semibold mb-1">Instructions</h3>
          <p className="text-sm mb-3">{instructions}</p>

          <button
            onClick={handleLike}
            disabled={isLiking || hasLiked}
            className={`flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-medium transition-colors
              ${hasLiked ? "bg-green-500" : "bg-red-500 hover:bg-red-600"}
              ${isLiking ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            <FaHeart className="text-white" />
            {isLiking ? "Liking..." : hasLiked ? "Liked" : "Like"}
          </button>

          <div className="text-gray-600 text-sm mt-2">Likes: {likes}</div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
