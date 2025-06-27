import React, { use, useState } from "react";
import { NavLink, Outlet } from "react-router";
import AuthContext from "../components/context/AuthContext";

const DashBoardLayout = () => {
  const { user } = use(AuthContext);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  return (
    <div className="bg-gray-100 min-h-full flex flex-col lg:flex-row">
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
      ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:translate-x-0 lg:relative lg:shadow-none
    `}
      >
        <div className="p-6 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-2 flex-1">
            <li>
              <NavLink
                to="/"
                onClick={closeSidebar}
                className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700 "
              >
                Back To Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                onClick={closeSidebar}
                className="block px-4 py-2 rounded hover:bg-gray-100 text-gray-700"
              >
                Overview
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard/allrecipes"
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-gray-700 ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
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
                  `block px-4 py-2 rounded text-gray-700 ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                  }`
                }
              >
                Add Recipes
              </NavLink>
              <NavLink
                to={`/dashboard/myrecipes/${user?.email}`}
                onClick={closeSidebar}
                className={({ isActive }) =>
                  `block px-4 py-2 rounded text-gray-700 ${
                    isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
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
      <div className="flex-1 p-6 lg:ml-50 mt-4 lg:mt-0">
        <h1 className="text-3xl font-bold text-center mb-4">
          Welcome to Your Dashboard
        </h1>
        <Outlet />
      </div>
    </div>
  );
};

export default DashBoardLayout;
