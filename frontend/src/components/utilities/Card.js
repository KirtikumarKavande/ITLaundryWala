import React from "react";
import AdminNavbar from "../Navbar/Admin/AdminNavbar";

const CardContainer = (props) => {
  return (
    <>
      <div className="bg-blue-700  py-16   ">
        <div className="mx-16 bg-blue-400 min-h-screen  h-full  rounded-lg shadow ">
          <AdminNavbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
