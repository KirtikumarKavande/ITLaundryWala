import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getToken } from "../../store/userSlice";
import { userStatus } from "../../store/userSlice";
import toast from "react-hot-toast";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store?.user?.isLoggedIn);

  const LogoutUser = () => {
    localStorage.clear();
    navigate("/");
    dispatch(getToken(""));
    dispatch(userStatus(false));
    toast.success("Successfully logged out");
  };
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="flex justify-center items-center py-4 md:py-auto text-3xl md:text-lg max-w-screen-xl md:flex md:flex-wrap md:items-center md:justify-between md:mx-auto md:p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <div className="   md:text-2xl font-semibold whitespace-nowrap dark:text-white text-[#fd7e14] ">
              ITLaundryWala
            </div>
          </a>

          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex font-bold flex-col p-4 md:p-0 mt-4  border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {user !== "user" && (
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
                  >
                    HOME
                  </NavLink>
                </li>
              )}

              {user !== "user" && (
                <li>
                  <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    ABOUT
                  </NavLink>
                </li>
              )}
              {user !== "user" && (
                <li>
                  <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    CONTACT
                  </NavLink>
                </li>
              )}

              {user !== "user" && (
                <li>
                  <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    ADMIN LOGIN
                  </NavLink>
                </li>
              )}

              {user === "user" && (
                <li>
                  <NavLink
                    to="/adduser"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Add New User
                  </NavLink>
                </li>
              )}
              {user === "user" && (
                <li>
                  <NavLink
                    to="/existinguser"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Existing User
                  </NavLink>
                </li>
              )}
              {user === "user" && (
                <li>
                  <NavLink
                    to="/"
                    style={({ isActive }) => ({
                      color: isActive ? "white" : "",
                      backgroundColor: isActive ? "orange" : "",
                      paddingLeft: isActive ? "5px" : "",
                      paddingRight: isActive ? "5px" : "",
                    })}
                    className="block py-2 pl-3 px-5  text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    History
                  </NavLink>
                </li>
              )}

              {user === "user" && (
                <li>
                  <button
                    className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-1 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    onClick={LogoutUser}
                  >
                    Sign Out
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
