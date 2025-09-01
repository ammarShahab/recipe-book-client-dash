import React, { useContext, useRef, useState } from "react";
import AuthContext from "./context/AuthContext";
import toast from "react-hot-toast";
import { FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const NewsLetter = () => {
  const { theme } = useContext(AuthContext);
  /* const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  }); */

  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async (e) => {
    e.preventDefault();
    // console.log(form);

    // console.log(form.current);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          toast.success("Subscribed successfully!");
          console.log("SUCCESS!");
          setIsLoading(false);
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong. Please try again.");
        }
      );

    setIsLoading(true);
  };

  return (
    <div
      className="w-full dark:bg-gray-500 py-20"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/5g0BzRtR/banner-Imag2-optinal.jpg')",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-col flex-wrap content-center md:mr-[30%] lg:mr-[55%] justify-center p-4 py-20 md:p-5">
        <div
          className={`bg-[#e3dccce8] p-20 rounded-2xl ${
            theme ? "dark" : ""
          } dark:bg-zinc-600`}
        >
          <h1 className="text-3xl lg:text-5xl antialiased font-bold leading-none text-center font-bitter dark:text-white">
            Get Our Updates
          </h1>
          <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-white">
            Subscribe to receive the latest recipes and cooking tips
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSendEmail} className="space-y-4" ref={form}>
            {/* Name Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                placeholder="Your full name"
                disabled={isLoading}
                className="w-full pl-10 p-3 rounded-lg border border-amber-900 dark:text-gray-200 dark:border-amber-50 dark:bg-gray-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                placeholder="Your email address"
                disabled={isLoading}
                className="w-full pl-10 p-3 rounded-lg border border-amber-900 dark:text-gray-200 dark:border-amber-50 dark:bg-gray-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
            </div>

            {/* Message Input */}
            <div className="relative">
              <div className="absolute top-3 left-0 pl-3 flex items-start pointer-events-none">
                <FiMessageSquare className="h-5 w-5 text-gray-400 mt-0.5" />
              </div>
              <textarea
                name="message"
                // value={formData.message}
                // onChange={handleInputChange}
                placeholder="Tell us what you're interested in (recipes, tips, etc.)"
                disabled={isLoading}
                rows={4}
                className="w-full pl-10 p-3 rounded-lg border border-amber-900 dark:text-gray-200 dark:border-amber-50 dark:bg-gray-700 disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              value="Send"
              disabled={isLoading}
              className="w-full p-3 font-semibold rounded-lg bg-green-500 hover:bg-green-600 dark:text-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                  Subscribing...
                </>
              ) : (
                <>
                  <FiMail size={18} />
                  Subscribe Now
                </>
              )}
            </button>
          </form>
          {/* Additional Info */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Join our community of food lovers! 🍽️
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
