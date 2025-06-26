import React, { useState } from "react";
import Banner from "./Banner";
import RecipeHighlights from "./RecipeHighlights";
import NewsLetter from "./NewsLetter";
import TopRecipes from "./TopRecipes";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <TopRecipes></TopRecipes>
      <RecipeHighlights></RecipeHighlights>
      <NewsLetter></NewsLetter>
    </>
  );
};

export default Home;
