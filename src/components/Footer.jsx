import React, { useContext } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
import AuthContext from "./context/AuthContext";

const Footer = () => {
  const { theme, setTheme } = useContext(AuthContext);
  return (
    <footer
      className={`bg-[#f1f1ee]  pt-20 px-5 text-center font-sans text-gray-800 ${
        theme ? "dark" : ""
      }  dark:bg-zinc-600`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center items-center gap-4 mb-4 ">
          <img src={logo} className="w-8" alt="logo" />
          <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
            DishDiary
          </h1>
        </div>
        <div className="text-sm mb-4 dark:text-white">
          &copy; 2025 MyWebsite. All rights reserved.
        </div>
        <div className="text-sm mb-6 dark:text-white">
          <p>
            Email:{" "}
            <a
              href="mailto:info@mywebsite.com"
              className="text-gray-800 hover:underline dark:text-white"
            >
              info@mywebsite.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a
              href="tel:+1234567890"
              className="text-gray-800 hover:underline dark:text-white"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>
        <div className="flex justify-center gap-5">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            className="text-gray-800 text-xl hover:text-blue-600 transition-colors dark:text-white"
          >
            <FaFacebookF></FaFacebookF>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            aria-label="Twitter"
            className="text-gray-800 text-xl hover:text-blue-600 transition-colors dark:text-white"
          >
            <FaXTwitter></FaXTwitter>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            className="text-gray-800 text-xl hover:text-blue-600 transition-colors dark:text-white"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-800 text-xl hover:text-blue-600 transition-colors dark:text-white"
          >
            <FaLinkedinIn></FaLinkedinIn>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
