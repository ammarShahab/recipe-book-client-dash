import React, { use, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import logo from "../assets/images/logo.png";
import AuthContext from "./context/AuthContext";
import toast from "react-hot-toast";
import { Tooltip } from "react-tooltip";
import { LuMoon, LuSun } from "react-icons/lu";

const NavBar = () => {
  const { user, logOut, setUser, theme, setTheme } = use(AuthContext);
  // const [theme, setTheme] = useState("");
  // console.log(user?.email);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        setUser(null);
        toast.success("Successfully Logged Out");
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  const links = (
    <>
      <NavLink className="py-2 px-1 font-semibold  text-lg" to="/">
        Home
      </NavLink>

      {user && (
        <NavLink
          className="py-2 px-1 font-semibold text-lg"
          to={`/myrecipes/${user.email}`}
        >
          My Recipes
        </NavLink>
      )}
      <NavLink className="py-2 px-1 font-semibold text-lg" to="/allrecipes">
        All Recipes
      </NavLink>

      {user && (
        <NavLink className="py-2 px-1 font-semibold text-lg" to="/dashboard">
          Dashboard
        </NavLink>
      )}

      <NavLink className="py-2 px-1 font-semibold text-lg" to="/aboutUs">
        About Us
      </NavLink>
    </>
  );
  return (
    <div
      className={`bg-[#584b45] ${
        theme ? "dark" : ""
      } dark:bg-zinc-700 shadow-sm`}
    >
      <div
        className={`navbar bg-[#584b45] dark:bg-zinc-700 shadow-sm max-w-7xl mx-auto`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost xl:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex gap-0 sm:gap-2 items-center">
            <img className="w-8 sm:w-16" src={logo} alt="logo" />
            <a className="text-xs sm:text-xl font-extrabold text-[#dedbda] ">
              DishDiary
            </a>
          </div>
        </div>
        <div className="navbar-center menu menu-horizontal hidden sm:hidden md:hidden lg:hidden xl:block px-1 space-x-4 text-[#dedbda]">
          {links}
        </div>
        <div className="navbar-end space-x-4">
          {/* toggle dark light */}
          <div className="bg-[#584b45] rounded-xl w-14">
            <div
              className="bg-[#d4c5bf5c] dark:bg-zinc-
          00 p-1 flex justify-center items-center rounded-xl "
            >
              <button
                onClick={() => setTheme("")}
                className="bg-transparent  hover:bg-zinc-400 p-2 rounded-lg dark:text-white text-black"
              >
                <LuSun></LuSun>
              </button>
              <button
                onClick={() => setTheme("dark")}
                className="bg-transparent hover:bg-zinc-400 p-2 rounded-lg 
            dark:text-white text-black"
              >
                <LuMoon></LuMoon>
              </button>
            </div>
          </div>
          {user ? (
            <>
              <div>
                <img
                  id="clickable"
                  className="btn w-9 h-9 b-0 p-0 rounded-full overflow-hidden object-cover"
                  src={`${user ? user?.photoURL : ""}`}
                />

                <Tooltip
                  className="p-4 space-y-4"
                  anchorSelect="#clickable"
                  clickable
                >
                  <p>{user?.displayName}</p>
                  <Link
                    className="bg-amber-50 text-black p-0.5 rounded-sm"
                    to="/"
                    onClick={handleLogOut}
                  >
                    Log Out
                  </Link>
                </Tooltip>
              </div>
            </>
          ) : (
            <>
              <Link
                to="/auth/login"
                className="btn btn-active btn-info bg-[#d9cab3] border-0"
              >
                Log In
              </Link>
              <Link to="/auth/register" className="btn btn-active btn-warning">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
