import React, { useState } from "react";
import Modal from "react-responsive-modal";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import "react-responsive-modal/styles.css";

const MyRecipes = () => {
  const myrecipes = useLoaderData();
  // console.log(myrecipes);
  const [isDelete, setIsDelete] = useState(myrecipes);
  const [open, setOpen] = useState(false);
  const categories = ["Lunch", "Dessert", "Dinner", "Vegan", "Breakfast"];
  const [selectedCategory, setSelectedCategory] = useState([]);

  const onOpenModal = () => setOpen(true);
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

  const handleChecked = () => {};

  const handleUpdate = () => {};

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      {myrecipes?.length == 0 ? (
        <div className="text-center mt-10">
          <h1 className="font-extrabold text-4xl">No Recipe Found</h1>
        </div>
      ) : (
        <div className="grid gap-4 grid-cols-2 max-w-4xl mx-auto max-[600px]:grid-cols-1">
          {myrecipes?.map((myrecipe) => (
            <div
              key={myrecipe?._id}
              className="bg-white rounded-lg shadow-lg w-full max-w-md overflow-hidden"
            >
              <img
                src={myrecipe?.image}
                alt="Fluffy Pancakes"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {myrecipe?.title}
                </h2>
                <div className="flex justify-between text-gray-600 text-sm mb-3">
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
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    Ingredients
                  </h3>
                  <ul className="list-disc pl-5 text-gray-600 text-sm">
                    {myrecipe?.ingredients}
                  </ul>
                </div>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">
                    Instructions
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {myrecipe?.instructions}
                  </p>
                </div>
                <div className="flex gap-3 mb-3">
                  <button
                    onClick={onOpenModal}
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
                    <form onSubmit={handleUpdate} className="space-y-4 w-full">
                      <div className="flex flex-col">
                        <label className="text-sm font-medium text-gray-700 mb-1">
                          Recipe Image URL
                        </label>
                        <input
                          type="text"
                          id="image"
                          name="image"
                          defaultValue={myrecipe?.image}
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
                          defaultValue={myrecipe.title}
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
                          defaultValue={myrecipe?.ingredients}
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
                          {categories.map((category, index) => (
                            // <>
                            <div className="flex items-center gap-2">
                              <input
                                type="checkbox"
                                name={category}
                                value={category}
                                // checked={selectedCategory.includes(category)}
                                onChange={handleChecked}
                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                              />
                              <label
                                key={index}
                                className="text-sm text-gray-700"
                              >
                                {category}
                              </label>
                              {/* </>; */}
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
                          // readOnly
                          className="border border-gray-300 rounded-md p-2 bg-gray-100 cursor-not-allowed"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        Update
                      </button>
                    </form>
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
                {console.log(myrecipe)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyRecipes;
