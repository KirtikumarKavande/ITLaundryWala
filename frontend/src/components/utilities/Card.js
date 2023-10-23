import React from "react";
import AdminNavbar from "../Navbar/Admin/AdminNavbar";

const CardContainer = (props) => {
  return (
    <>
      <div className="bg-blue-700  py-10  ">
        <div className="mx-16 p-6 bg-blue-400 h-full min-h-screen  rounded-lg shadow ">
          <AdminNavbar />
          {props.children}
        </div>
      </div>
    </>
  );
};

export default CardContainer;
