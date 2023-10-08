import React from "react";
import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <div className="mt-16">
      <nav className="bg-white dark:bg-gray-900 fixed mt-16 md:hidden border  w-full z-20 top-0 left-0 py-3 border-b border-gray-200 dark:border-gray-600">
        <div>
          <ul className="flex space-x-4 justify-center items-center">
            <li>
              <NavLink
                to="/"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "orange" : "",
                
                padding:isActive? "1px 2px 1px 2px ":""

                })}
                className="block py-2   text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
              >
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "orange" : "",
                  padding:isActive? "1px 2px 1px 2px ":""

                })}
                className="block py-2  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "orange" : "",
                  padding:isActive? "1px 2px 1px 2px ":""

                })}
                className="block py-2  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
              >
                CONTACT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                style={({ isActive }) => ({
                  color: isActive ? "white" : "",
                  backgroundColor: isActive ? "orange" : "",
                  padding:isActive? "1px 2px 1px 2px ":""

                })}
                className="block py-2  text-center  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
              >
                ADMIN LOGIN
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNavbar;
