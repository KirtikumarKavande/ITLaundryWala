import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdGroupAdd } from "react-icons/md";
import { FaLinesLeaning, FaPeopleArrows } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import { NavList } from "./NavList";

const AdminNavbar = () => {
  const kk = <AiOutlineHome size={30} />;
  return (
    <div>
      <div className=" h-52 ">
        <div className="h-1/3   flex justify-between items-center ">
          <div>
            <a href="https://flowbite.com/" className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3"
                alt="Flowbite Logo"
              />
              <div className="   md:text-2xl font-semibold whitespace-nowrap dark:text-white text-white ">
                ITLaundryWala
              </div>
            </a>
          </div>
          <div>admin name</div>
        </div>
        <div className="flex justify-center">
          {NavList.map((item) => {
            return (
              <Link to={item.path}
                className="max-h-2/3 mt-3 p-6  flex items-center ml-4 
                      flex-col text-white w-24  justify-center    hover:bg-white hover:text-blue-400  hover:rounded-md
                      "
              >
                <div className=" ">{item.icon}</div>
                <div className=" mt-4 font-semibold  ">{item.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
