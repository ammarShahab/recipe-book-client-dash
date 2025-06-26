import React, { use, useState } from "react";
import { data } from "react-router";
import Swal from "sweetalert2";
import AuthContext from "./context/AuthContext";

const AddRecipe = () => {
  const [isChecked, setIsChecked] = useState([]);
  const loggedInUser = use(AuthContext);
  // console.log(loggedInUser?.user?.email);

  const handleChecked = (e) => {
    e.preventDefault();
    // console.log(e.target);

    const { value, checked } = e.target;
    if (checked) {
      setIsChecked((prev) => [...prev, value]);
    } else {
      setIsChecked((prev) => prev.filter((item) => item !== value));
    }

    console.log(isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const title = form.title.value;
    const ingredients = form.ingredients.value;
    const instructions = form.instructions.value;
    const cuisine = form.cuisine.value;
    const prepTime = form.prepTime.value;
    const likes = form.likes.value;
    const email = loggedInUser?.user?.email;
    const name = loggedInUser?.user?.displayName;

    /* console.log(
      image,
      title,
      ingredients,
      instructions,
      cuisine,
      prepTime,
      likes,
      isChecked
    ); */
    const newAddedRecipes = {
      image,
      title,
      ingredients,
      instructions,
      cuisine,
      prepTime,
      likes,
      isChecked,
      loggedInUser,
      email,
      name,
    };

    // console.log(newAddedRecipes);

    fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedRecipes),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("recipes added to the dB succesfully", data);
        if (data.insertedId) {
          Swal.fire({
            title: "Recipe Added Successfully",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Add a New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Recipe Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            required
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            required
            rows="6"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Cuisine Type
          </label>
          <select
            id="cuisine"
            name="cuisine"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            required
            min="0"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        {/* Categories section */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Categories
          </label>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="Breakfast"
                value="Breakfast"
                onChange={handleChecked}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Breakfast</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="Lunch"
                value="Lunch"
                onChange={handleChecked}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Lunch</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="Dinner"
                value="Dinner"
                onChange={handleChecked}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Dinner</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="Dessert"
                value="Dessert"
                onChange={handleChecked}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Dessert</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="Vegan"
                value="Vegan"
                onChange={handleChecked}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="text-sm text-gray-700">Vegan</label>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1">
            Likes
          </label>
          <input
            type="number"
            id="likes"
            name="likes"
            defaultValue={0}
            // readOnly
            className="border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipe;
