import React, { useState } from "react";
import logo from "../assets/geo-icon.png";

const Navbar = ({
  activeTab,
  aboutRef,
  homeRef,
  servicesRef,
  workflowRef,
  contactRef,
  testimonialsRef,
}) => {
  const [hideMenu, setHideMenu] = useState(true);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <nav className="bg-gray-100 border-gray-200 px-2 sm:px-4 py-2 rounded fixed top-0 right-0 w-full z-20">
      <div className="bg-gray-100 max-w-7xl flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <img src={logo} className="h-14" alt="logo" />
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
              <p
                onClick={() => handleScroll(homeRef)}
                className={`${
                  activeTab === "home" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                Home
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll(aboutRef)}
                className={`${
                  activeTab === "about" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                About
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll(workflowRef)}
                className={`${
                  activeTab === "workflow" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                Workflow
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll(servicesRef)}
                className={`${
                  activeTab === "services" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                Services
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll(testimonialsRef)}
                className={`${
                  activeTab === "testimonials" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                Testimonials
              </p>
            </li>
            <li>
              <p
                onClick={() => handleScroll(contactRef)}
                className={`${
                  activeTab === "contact" && "text-green-500"
                } text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
              >
                Contact
              </p>
            </li>
            <li>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-base py-2 pl-2 text-sm text-gray-700 cursor-pointer">
                Member Login
              </button>
            </li>
          </ul>
        </div>
      </div>
      {!hideMenu && (
        <div
          className="bg-white mobile-menu transition duration-100 md:hidden fixed w-full border-b-2 mt-2 left-0"
          onClick={() => setHideMenu(!hideMenu)}
        >
          <p
            onClick={() => handleScroll(homeRef)}
            className={`${
              activeTab === "home" && "text-green-500"
            } text-base block py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
          >
            Home
          </p>
          <p
            onClick={() => handleScroll(aboutRef)}
            className={`${
              activeTab === "about" && "text-green-500"
            } text-base block py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
          >
            About
          </p>
          <p
            onClick={() => handleScroll(workflowRef)}
            className={`${
              activeTab === "workflow" && "text-green-500"
            } text-base block py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
          >
            Workflow
          </p>
          <p
            onClick={() => handleScroll(servicesRef)}
            className={`${
              activeTab === "services" && "text-green-500"
            } text-base block py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
          >
            Services
          </p>
          <p
            onClick={() => handleScroll(testimonialsRef)}
            className={`${
              activeTab === "testimonials" && "text-green-500"
            } text-base block py-2 pl-2 text-sm text-gray-700 cursor-pointer`}
          >
            Testimonials
          </p>
          <p
            onClick={() => handleScroll(contactRef)}
            className={`${
              activeTab === "contact" && "text-green-500"
            } text-base block py-2 pl-2 text-sm`}
          >
            Contact
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
