import React, { use, useState } from "react";
import { NavLink, Outlet } from "react-router";
import AuthContext from "../components/context/AuthContext";

const DashBoardLayout = () => {
  const { user, theme } = use(AuthContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div
      className={`bg-gray-100 min-h-full flex flex-col lg:flex-row ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600`}
    >
      {/* Mobile Navbar */}
      <div className="lg:hidden flex items-center justify-between bg-[#584b45] p-4 shadow-md z-50">
        <h1 className="text-xl text-white font-bold">Dashboard</h1>
        <button
          onClick={toggleSidebar}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 min-h-screen bg-white shadow-lg transform transition-transform duration-200 z-40 
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} ${
          theme ? "dark" : ""
        }  dark:bg-zinc-800 
      lg:translate-x-0 lg:relative lg:shadow-none
    `}
      >
        <div className="p-6 h-full flex flex-col">
          <ul className="space-y-2 flex-1">
            <li>
              <NavLink
                to="/"
                onClick={closeSidebar}
                className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:hover:text-gray-800"
              >
                Back To Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                onClick={closeSidebar}
                className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700 dark:text-gray-200 dark:hover:text-gray-800"
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allrecipes"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-gray-700 dark:text-gray-200 ${
                    isActive
                      ? "bg-gray-200 font-semibold dark:bg-gray-500"
                      : "hover:bg-gray-100 dark:hover:text-gray-800"
                  }`
                }
              >
                All Recipes
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/addrecipes"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-gray-700 dark:text-gray-200 ${
                    isActive
                      ? "bg-gray-200 font-semibold dark:bg-gray-500"
                      : "hover:bg-gray-100 dark:hover:text-gray-800"
                  }`
                }
              >
                Add Recipes
              </NavLink>
              <NavLink
                to={`/dashboard/myrecipes/${user?.email}`}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-gray-700 dark:text-gray-200 ${
                    isActive
                      ? "bg-gray-200 font-semibold dark:bg-gray-500"
                      : "hover:bg-gray-100 dark:hover:text-gray-800"
                  }`
                }
              >
                My Recipes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          onClick={closeSidebar}
          className="fixed inset-0 bg-opacity-40 z-30 lg:hidden"
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 p-6 lg:ml-50 mt-4 lg:mt-0 dark:bg-zinc-600">
        <h1 className="text-3xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome to Your Dashboard
        </h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
