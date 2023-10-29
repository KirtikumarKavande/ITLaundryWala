import React from "react";
import AdminNavbar from "../Navbar/Admin/AdminNavbar";

const CardContainer = (props) => {
  return (
    <>
      <div className="bg-blue-700 min-h-screen h-full py-8 md:py-16   w-full ">
        <div className=" mx-4 md:mx-16 bg-blue-400 min-h-screen rounded-lg shadow ">
          <AdminNavbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
