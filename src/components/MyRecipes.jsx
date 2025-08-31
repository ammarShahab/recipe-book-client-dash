import React, { useContext, useState } from "react";
import Modal from "react-responsive-modal";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import "react-responsive-modal/styles.css";
import AuthContext from "./context/AuthContext";

const MyRecipes = () => {
  const myrecipes = useLoaderData();
  // console.log(myrecipes);
  const [isDelete, setIsDelete] = useState(myrecipes);
  const [open, setOpen] = useState(false);
  const categories = ["Lunch", "Dessert", "Dinner", "Vegan", "Breakfast"];
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const { theme } = useContext(AuthContext);

  const onOpenModal = (recipe) => {
    setSelectedRecipe(recipe);
    setOpen(true);
  };
  const onCloseModal = () => setOpen(false);

  const handleDelete = (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      // console.log(result.isConfirmed);
      if (result.isConfirmed) {
        fetch(
          `https://b11a10-server-side-ashahab007.vercel.app/recipes/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            // console.log("After delete", data);

            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been deleted.",
                icon: "success",
              });
            }
            const remainingRecipes = myrecipes?.filter(
              (recipe) => recipe._id !== id
            );
            setIsDelete(remainingRecipes);
            window.location.reload();
          });
      }
    });
  };

  const handleChecked = (e) => {
    // e.preventDefault();
    const { value } = e.target;
    // console.log(value);
    setSelectedCategory((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleUpdate = (e, id) => {
    console.log(id);

    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    delete data.categories; //for extra category show in db
    const updatedRecipe = {
      ...data,
      isChecked: selectedCategory,
    };
    console.log(updatedRecipe);
    // fetch(`https://b11a10-server-side-ashahab007.vercel.app/recipes/${id}`, {
    fetch(`http://localhost:3000/recipes/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedRecipe),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log("Update Result", result);
        if (result.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your recipe has been updated",
            showConfirmButton: false,
            timer: 1500,
          });

          setOpen(false);
          window.location.reload();
        }
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className={`${theme ? "dark" : ""}  dark:bg-zinc-600 min-h-screen`}>
      <div className=" dark:bg-zinc-600">
        {myrecipes?.length == 0 ? (
          <div className="text-center p-4">
            <h1 className="font-bold text-xl dark:text-gray-300">
              No Recipe Found
            </h1>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-2 gap-1.5 pt-10">
            {myrecipes?.map((myrecipe) => (
              <div
                key={myrecipe?._id}
                className="bg-white rounded-lg shadow-lg w-full overflow-hidden dark:bg-gray-600"
              >
                <img
                  src={myrecipe?.image}
                  alt="Fluffy Pancakes"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-300 mb-2">
                    {myrecipe?.title}
                  </h2>
                  <div className="flex justify-between text-gray-600 text-sm mb-3 dark:text-gray-300">
                    {/* <span>Cuisine: Others</span> */}
                    <span>Preparation Time: {myrecipe?.prepTime} min</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {myrecipe?.isChecked?.map((tag) => (
                      <span
                        key={tag}
                        className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-1 dark:text-gray-300">
                      Ingredients
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 text-sm">
                      {myrecipe?.ingredients}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                      Instructions
                    </h3>
                    <p className="text-gray-600 text-sm dark:text-gray-300">
                      {myrecipe?.instructions}
                    </p>
                  </div>
                  <div className="flex gap-3 mb-3">
                    <button
                      onClick={() => onOpenModal(myrecipe)}
                      // onClick={updateRecipe}
                      className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                    >
                      Update
                    </button>

                    {/* Modal */}
                    <Modal
                      classNames="w-full"
                      open={open}
                      onClose={onCloseModal}
                      styles={{ modal: { width: "600px", maxWidth: "90%" } }}
                      center
                    >
                      {/* Form */}
                      {selectedRecipe && (
                        <form
                          onSubmit={(e) => handleUpdate(e, selectedRecipe._id)}
                          className="space-y-4 w-full"
                        >
                          <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                              Recipe Image URL
                            </label>
                            <input
                              type="text"
                              id="image"
                              name="image"
                              defaultValue={selectedRecipe?.image}
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
                              defaultValue={selectedRecipe?.title}
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
                              defaultValue={selectedRecipe?.ingredients}
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
                              defaultValue={selectedRecipe?.instructions}
                            ></textarea>
                          </div>

                          <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-700 mb-1">
                              Cuisine Type
                            </label>
                            <select
                              id="cuisine"
                              defaultValue={selectedRecipe?.cuisine}
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
                              defaultValue={selectedRecipe?.prepTime}
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
                              {categories.map((category, index) => (
                                <div
                                  key={index}
                                  className="flex items-center gap-2"
                                >
                                  <input
                                    type="checkbox"
                                    name="categories"
                                    value={category}
                                    onChange={handleChecked}
                                    // defaultValue={myrecipe?.isChecked}
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                  />
                                  <label
                                    key={index}
                                    className="text-sm text-gray-700"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
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
                              readOnly
                              className="border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
                            />
                          </div>

                          <button
                            // onSubmit={(e) => handleUpdate(e, myrecipe._id)}
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          >
                            Update
                          </button>
                        </form>
                      )}
                    </Modal>
                    <button
                      onClick={() => handleDelete(myrecipe?._id)}
                      className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                  <div className="text-gray-600 text-sm">
                    Likes: {myrecipe?.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRecipes;
