import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import AuthContext from "./context/AuthContext";
import toast from "react-hot-toast";

const LogIn = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const {
    user,
    userLogin,
    setUser,
    provider,
    googleSignIn,
    theme,
    setIsLoading,
  } = use(AuthContext);
  // console.log(user);

  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    // console.log(googleSignIn);

    userLogin(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setIsLoading(true);
        console.log(user);
        setUser(user);
        setErrorMessage("");

        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        // const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn(provider)
      .then((result) => {
        const user = result.user;
        setIsLoading(true);
        setUser(user);
        // console.log(user);
        /*   if (location?.state) {
          navigate(location.state);
          // navigate(location?.state ? location.state : "/");
        } else {
          navigate("/");
        } */
        toast.success("Logged In Successfully");
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-[#f4e7e1af] ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600  py-7`}
    >
      <div className="w-full max-w-md p-8 space-y-6 rounded-2xl shadow-lg mt-10  bg-[#F2EDEA] dark:bg-gray-700">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200">
          Please Log In
        </h2>
        <form onSubmit={handleLogIn} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              name="email"
              type="email"
              //   ref={emailRef}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:text-gray-200"
          >
            Login
          </button>
          <p className=" text-xs text-red-400">{errorMessage}</p>
        </form>
        <div className="flex items-center justify-between text-sm">
          <Link
            // onClick={handlePassword}
            className="text-blue-500 dark:text-gray-200 hover:underline"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handleGoogleLogin}
            className="flex justify-center items-center gap-2 w-full px-4 py-2 border dark:border-0 rounded-lg hover:bg-gray-100 dark:bg-gray-500 dark:text-gray-200 dark:hover:text-gray-800"
          >
            <FcGoogle className=" " size={20} /> Continue with Google
          </button>
        </div>

        <p className="text-sm text-center text-gray-600 dark:text-gray-200">
          Don't have an account?
          <Link
            to="/auth/register"
            className="text-blue-500 hover:underline pl-2"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
