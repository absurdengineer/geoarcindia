import React, { useState } from "react";
import logo from "../assets/geo-icon.png";

const Navbar = () => {
  const [hideMenu, setHideMenu] = useState(true);

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded fixed top-0 right-0 w-full z-50">
      <div className="bg-white max-w-7xl flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <img src={logo} className="h-12" alt="logo" />
        </a>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
          onClick={() => setHideMenu(!hideMenu)}
        >
          <span className="sr-only">Open main menu</span>
          {hideMenu ? (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Internship
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Community
              </a>
            </li>
            <li>
              <a
                href="/app/dashboard"
                className="text-base block py-2 pr-4 pl-3 text-sm text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {!hideMenu && (
        <div className="mobile-menu transition duration-100 md:hidden fixed w-full border-b-2 mt-2 left-0">
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Home
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            About
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Services
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Careers
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Internship
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Community
          </p>
          <p className="p-3 bg-white text-gray-800 hover:bg-blue-700 hover:text-white">
            Contact
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
