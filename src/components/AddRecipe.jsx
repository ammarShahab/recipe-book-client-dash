import React, { use, useState } from "react";
import Swal from "sweetalert2";
import AuthContext from "./context/AuthContext";

const AddRecipe = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const { user, theme } = use(AuthContext);

  // console.log(user);

  const categories = ["Lunch", "Dessert", "Dinner", "Vegan", "Breakfast"];

  const handleChecked = (e) => {
    const { value } = e.target;
    setSelectedCategory((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
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
    const email = user?.email;
    const name = user?.displayName;

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
      selectedCategory,
      // user,
      email,
      name,
    };

    // console.log("Added recipe", newAddedRecipes);

    fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newAddedRecipes),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log("recipes added to the dB succesfully", data);
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
    <div
      className={`max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10 mb-20 ${
        theme ? "dark" : ""
      }  dark:bg-zinc-400`}
    >
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-gray-200">
        Add a New Recipe
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Recipe Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            placeholder="Enter image URL"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            required
            rows="4"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Instructions
          </label>
          <textarea
            id="instructions"
            name="instructions"
            required
            rows="6"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Cuisine Type
          </label>
          <select
            id="cuisine"
            name="cuisine"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          >
            <option value="Italian">Italian</option>
            <option value="Mexican">Mexican</option>
            <option value="Indian">Indian</option>
            <option value="Chinese">Chinese</option>
            <option value="Others">Others</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Preparation Time (minutes)
          </label>
          <input
            type="number"
            id="prepTime"
            name="prepTime"
            required
            min="0"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
          />
        </div>

        {/* Categories section */}
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Categories
          </label>
          <div className="flex flex-col gap-2">
            {categories.map((category, index) => (
              // <>
              <div key={index} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name={category}
                  value={category}
                  // checked={selectedCategory.includes(category)}
                  onChange={handleChecked}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 dark:text-gray-200"
                />
                <label
                  key={index}
                  className="text-sm text-gray-700 dark:text-gray-200"
                >
                  {category}
                </label>
                {/* </>; */}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-700 mb-1 dark:text-gray-200">
            Likes
          </label>
          <input
            type="number"
            id="likes"
            name="likes"
            defaultValue={0}
            readOnly
            className="border border-gray-300 rounded-md p-2 bg-gray-100 dark:bg-gray-400 cursor-not-allowed dark:text-gray-200"
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
