import React, { use, useEffect, useState } from "react";
import AuthContext from "./context/AuthContext";
import StatsCard from "./StatsCard";
import UserInfoDashBoard from "./UserInfoDashBoard";

const OverView = () => {
  const [allRecipes, setAllRecipes] = useState([]);
  const [myRecipes, setMyRecipes] = useState([]);
  const { user, theme } = use(AuthContext);
  const userEmail = user.email;
  // console.log(user.email);

  useEffect(() => {
    // Fetch all recipes
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://b11a10-server-side-ashahab007.vercel.app/recipes"
        );
        const data = await res.json();
        setAllRecipes(data);
      } catch (err) {
        console.error("Failed to load recipes", err);
      }
    };

    fetchRecipes();
  }, [userEmail]);

  useEffect(() => {
    // Fetch my recipes
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          `https://b11a10-server-side-ashahab007.vercel.app/recipes-email/${userEmail}`
        );
        const data = await res.json();
        setMyRecipes(data);
      } catch (err) {
        console.error("Failed to load recipes", err);
      }
    };

    fetchRecipes();
  }, [userEmail]);

  /*  console.log(allRecipes);
  console.log(myRecipes); */

  const topLikedRecipe = allRecipes.reduce(
    (max, recipe) =>
      parseInt(recipe.likes) > parseInt(max.likes) ? recipe : max,
    allRecipes[0]
  );

  //   console.log("top", topLikedRecipe);

  return (
    <div className={`${theme ? "dark" : ""}  dark:bg-zinc-600 `}>
      <h1 className={`text-3xl font-bold p-4 dark:text-gray-200`}>Overview</h1>

      <StatsCard
        allRecipes={allRecipes}
        myRecipes={myRecipes}
        topLikedRecipe={topLikedRecipe}
      />
      <UserInfoDashBoard></UserInfoDashBoard>
    </div>
  );
};

export default OverView;
