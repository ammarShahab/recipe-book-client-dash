import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Home from "./components/Home";
import AllRecipes from "./components/AllRecipes";
import AddRecipe from "./components/AddRecipe";
import MyRecipes from "./components/MyRecipes";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import AuthLayout from "./layouts/AuthLayout";
import Error404 from "./components/Error404";
import PrilvateRouter from "./components/provider/PrivateRouter";
import PrivateRouter from "./components/provider/PrivateRouter";
import Loading from "./components/Loading";
import RecipeDetails from "./components/RecipeDetails";
import DashBoardLayout from "./layouts/DashBoardLayout";
import OverView from "./components/OverView";
import AllRecipesTable from "./components/AllRecipesTable";
import MyRecipesInTable from "./components/MyRecipesInTable";
import AboutUs from "./components/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/aboutUs", element: <AboutUs></AboutUs> },
      {
        path: "/allrecipes",
        loader: () =>
          fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes"),
        element: <AllRecipes></AllRecipes>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/myrecipes/:email",
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-ashahab007.vercel.app/recipes-email/${params.email}`
          ),
        element: (
          <PrivateRouter>
            <MyRecipes></MyRecipes>,
          </PrivateRouter>
        ),
      },
      {
        path: "/recipe/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-ashahab007.vercel.app/recipes/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <RecipeDetails></RecipeDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashBoardLayout></DashBoardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        Component: OverView,
      },
      {
        path: "/dashboard/allrecipes",
        loader: () =>
          fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes"),
        element: <AllRecipesTable></AllRecipesTable>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/dashboard/addrecipes",
        element: <AddRecipe></AddRecipe>,
      },
      {
        path: "/dashboard/myrecipes/:email",
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-ashahab007.vercel.app/recipes-email/${params.email}`
          ),
        element: <MyRecipesInTable></MyRecipesInTable>,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "login", element: <LogIn></LogIn> },
      { path: "register", element: <Register></Register> },
    ],
  },
  {
    path: "/*",
    Component: Error404,
  },
]);

/* const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/allrecipes",
        loader: () =>
          fetch("https://b11a10-server-side-ashahab007.vercel.app/recipes"),
        element: <AllRecipes></AllRecipes>,
        hydrateFallbackElement: <Loading></Loading>,
      },
      { path: "/addrecipes", element: <AddRecipe></AddRecipe> },
      {
        path: "/myrecipes/:email",
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-ashahab007.vercel.app/recipes-email/${params.email}`
          ),
        element: (
          <PrivateRouter>
            <MyRecipes></MyRecipes>
          </PrivateRouter>
        ),
      },
      {
        path: "/recipe/:id",
        loader: ({ params }) =>
          fetch(
            `https://b11a10-server-side-ashahab007.vercel.app/recipes/${params.id}`
          ),
        element: (
          <PrivateRouter>
            <RecipeDetails></RecipeDetails>
          </PrivateRouter>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      { path: "/auth/login", element: <LogIn></LogIn> },
      { path: "/auth/register", element: <Register></Register> },
    ],
  },
  {
    path: "/*",
    Component: Error404,
  },
]); */

export default router;
