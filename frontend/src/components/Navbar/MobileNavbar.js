import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { getToken } from "../../store/userSlice";
import { userStatus } from "../../store/userSlice";
import toast from "react-hot-toast";

const MobileNavbar = () => {
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
    <div className="mt-16">
      <nav className="bg-white dark:bg-gray-900 fixed mt-16 md:hidden border  w-full z-20 top-0 left-0 py-3 border-b border-gray-200 dark:border-gray-600">
        <div>
          <ul className="flex space-x-4 justify-center items-center">
            {user !== "user" && (
              <li>
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "orange" : "",

                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2   text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
                >
                  HOME
                </NavLink>
              </li>
            )}
            {user !== "user" && (
              <li>
                {" "}
                <NavLink
                  to="/about"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "orange" : "",
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
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
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
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
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-center  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
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
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-center  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
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
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-center  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
                >
                  Customer Order
                </NavLink>
              </li>
            )}

            {user === "user" && (
              <li>
                <NavLink
                  to="/ttt"
                  style={({ isActive }) => ({
                    color: isActive ? "white" : "",
                    backgroundColor: isActive ? "orange" : "",
                    padding: isActive ? "1px 2px 1px 2px " : "",
                  })}
                  className="block py-2  text-center  text-gray-900 rounded  md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark: dark:hover:text-white md:dark:hover:bg-black  dark:border-gray-700"
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
      </nav>
    </div>
  );
};

export default MobileNavbar;
