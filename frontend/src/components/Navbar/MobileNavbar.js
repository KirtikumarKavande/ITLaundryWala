import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { getToken } from "../../store/userSlice";
import { userStatus } from "../../store/userSlice";
import toast from "react-hot-toast";

const MobileNavbar = ({toggleNavbar, isOpen}) => {
  const navigate = useNavigate();
  

  return (
    <div className="lg:hidden">
    <button onClick={toggleNavbar} className="fixed top-8 right-4 z-50">
      {isOpen ? (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
    
    <div onClick={toggleNavbar} className={`fixed top-0 left-0 right-0 bg-white shadow-md transform ${isOpen ? 'translate-y-0' : '-translate-y-full'} transition-transform duration-300 ease-in-out z-40`}>
      <div className="flex flex-col items-center py-8 space-y-4">
        <Link to="/" className="text-xl">Home</Link>
        <a href="#" className="text-xl">Services</a>
        <a href="#" className="text-xl">About</a>
        <button className="bg-black text-white px-6 py-2 rounded mt-4" onClick={()=>{navigate('/login')}} >Admin sign IN</button>
      </div>
    </div>
  </div>
  );
};

export default MobileNavbar;
