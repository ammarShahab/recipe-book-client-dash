import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "./context/AuthContext";

const RecipeCard = ({ recipe }) => {
  // console.log(recipe);

  const { setIsLoading } = use(AuthContext);

  const { _id, title, likes, cuisine, image, prepTime, ingredients } = recipe;
  const navigate = useNavigate();

  const handleViewDetails = (id) => {
    setIsLoading(false);
    navigate(`/recipe/${id}`);
  };

  return (
    <div className=" bg-base-100 shadow-sm ">
      <figure>
        <img className="h-48 w-full" src={image} alt="Shoes" />
      </figure>
      <div className="p-2">
        <h2 className="font-bold">{title}</h2>
        <p className="mt-2">
          <span className="font-bold ">Ingredients: </span>
          {ingredients}
        </p>
        <div className="">
          <div className="mt-4">
            <button type="button" className="flex items-center p-1 space-x-1.5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                aria-label="Number of likes"
                className="w-4 h-4 fill-current dark:text-violet-600"
              >
                <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
                <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
              </svg>
              <span>{likes}</span>
            </button>
          </div>
          <button
            onClick={() => handleViewDetails(_id)}
            type="button"
            className="mt-4 btn bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
{
  /* <div className="flex flex-col max-w-lg space-y-6 overflow-hidden rounded-lg shadow-lg dark:bg-gray-50 dark:text-gray-800 mt-10">
      <div>
        <img
          src={image}
          alt=""
          className="object-contain w-full mb-4 h-full dark:bg-gray-500 rounded-2xl "
        />
        <h2 className="mb-1 text-xl font-semibold">{title}</h2>
        <p>{cuisine}</p>
        <p className="text-sm dark:text-gray-600 mt-4">
          <span className="font-bold">Ingredients: </span>
          {ingredients}
        </p>

        <button
          onClick={() => handleViewDetails(_id)}
          type="button"
          className="mt-10 btn bg-blue-500 hover:bg-blue-600 transition flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md text-white"
        >
          View Details
        </button>
      </div>
      <div className="flex flex-wrap justify-between">
        <div className="flex space-x-2 text-sm dark:text-gray-600">
          <button type="button" className="flex items-center p-1 space-x-1.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              aria-label="Number of likes"
              className="w-4 h-4 fill-current dark:text-violet-600"
            >
              <path d="M126.638,202.672H51.986a24.692,24.692,0,0,0-24.242,19.434,487.088,487.088,0,0,0-1.466,206.535l1.5,7.189a24.94,24.94,0,0,0,24.318,19.78h74.547a24.866,24.866,0,0,0,24.837-24.838V227.509A24.865,24.865,0,0,0,126.638,202.672ZM119.475,423.61H57.916l-.309-1.487a455.085,455.085,0,0,1,.158-187.451h61.71Z"></path>
              <path d="M494.459,277.284l-22.09-58.906a24.315,24.315,0,0,0-22.662-15.706H332V173.137l9.573-21.2A88.117,88.117,0,0,0,296.772,35.025a24.3,24.3,0,0,0-31.767,12.1L184.693,222.937V248h23.731L290.7,67.882a56.141,56.141,0,0,1,21.711,70.885l-10.991,24.341L300,169.692v48.98l16,16H444.3L464,287.2v9.272L396.012,415.962H271.07l-86.377-50.67v37.1L256.7,444.633a24.222,24.222,0,0,0,12.25,3.329h131.6a24.246,24.246,0,0,0,21.035-12.234L492.835,310.5A24.26,24.26,0,0,0,496,298.531V285.783A24.144,24.144,0,0,0,494.459,277.284Z"></path>
            </svg>
            <span>{likes}</span>
          </button>
        </div>
      </div>
    </div> */
}
