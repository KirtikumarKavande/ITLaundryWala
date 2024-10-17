import React from "react";
import Navbar from "./Navbar/Navbar";
import { Outlet } from "react-router-dom";
import MobileNavbar from "./Navbar/MobileNavbar";
import { useSelector } from "react-redux";

const RootComponent = () => {
  const user = useSelector((store) => store.user.isLoggedIn)
  return (
    <>
      {user !== "user" && <Navbar />}
      {/* {user !== "user" && <MobileNavbar />} */}

      <Outlet />
    </>
  );
};

export default RootComponent;
