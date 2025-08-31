import React, { use } from "react";
import AuthContext from "./context/AuthContext";

const UserInfoDashBoard = () => {
  const { user, theme } = use(AuthContext);
  return (
    <div
      className={`bg-indigo-50 p-6 rounded-2xl shadow-lg mx-auto my-8 w-full ${
        theme ? "dark" : ""
      }  dark:bg-zinc-400 `}
    >
      <h2 className="text-2xl font-bold mb-4 text-indigo-700 dark:text-gray-200">
        👤 User Info
      </h2>
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <img
          src={
            user.photoURL || "https://i.ibb.co/4pDNDk1/avatar-placeholder.png"
          }
          alt={user.displayName}
          className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
        />
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {user.displayName || "No Name"}
          </h3>
          <p className="text-gray-600 dark:text-gray-200">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoDashBoard;
