import React, { useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const navigate=useNavigate()
  return (
    <div className="h-[100px] border border-[#DBDBDB] flex items-center lg:px-[25px] w-full justify-between sticky top-0 z-1 bg-[#FFFFFF]">
      <div className=" w-full lg:w-8/12  flex  items-center  ">
        <div className="  w-full justify-center lg:justify-normal  flex items-center pr-6 ">
          <div className="" >
            <img src="https://res.cloudinary.com/dbrirq6ck/image/upload/v1704610947/zccexr7it1fbqipe2xie.jpg" alt="logo" className="w-[23rem] h-[6rem]  z-10 " />{" "}
          </div>
         
        </div>
        <div className="hidden lg:block">
          <ul className="flex space-x-12 text-[#202124] items-center text-base font-semibold cursor-pointer">
            <li onClick={()=>{navigate("/")}}>Home</li>
            <li>Services</li>
            <li>About </li>
          </ul>
        </div>
      </div>

      <div className=" hidden   lg:flex space-x-2 cursor-pointer">
        <span>
          <IoPersonCircleSharp size={25} />
        </span>
        <span className="font-semibold" onClick={()=>{navigate("/login")}}>Sign In</span>
      </div>
      {/* <IoIosMenu onClick={toggleNavbar} size={50} className="mr-4 lg:hidden border  bg-gray-300 h-[40px]  rounded-md my-0"/> */}
    <MobileNavbar toggleNavbar={toggleNavbar} isOpen={isOpen}/>
    </div>
  );
};

export default Navbar;
