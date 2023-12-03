import React from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="h-[100px] border border-[#DBDBDB] flex items-center lg:px-[130px] w-full justify-between sticky top-0 z-1 bg-[#FFFFFF]">
      <div className=" w-full lg:w-8/12  flex  items-center  ">
        <div className="  w-full justify-center lg:justify-normal  flex items-center pr-6">
          <div className="border  ">
            <img src="/logo.jpeg" alt="logo" className=" h-16 w-28 " />{" "}
          </div>
          <div
            className="text-red-700 text-2xl md:text-3xl ml-4 lg:ml-0 "
            style={{
              fontWeight: "700",
            }}
          >
            ITLaundryWala
          </div>
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-6 text-[#202124]  text-base font-semibold cursor-pointer">
            <li>Home</li>
            <li>Services</li>
            <li>About </li>
          </ul>
        </div>
      </div>

      <div className=" hidden   lg:flex space-x-2 cursor-pointer">
        <span>
          <IoPersonCircleSharp size={25} />
        </span>
        <span className="font-semibold">Sign In</span>
      </div>
      <IoIosMenu  size={50} className="mr-4 lg:hidden border  bg-gray-300 h-[40px]  rounded-md my-0"/>

    </div>
  );
};

export default Navbar;
