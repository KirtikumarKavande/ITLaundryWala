import React from "react";

import { MdLogout } from "react-icons/md";

import { Link, useNavigate } from "react-router-dom";
import { NavList } from "./NavList";
import usePostsDataToDb from "../../hooks/usePostsDataToDb.hook";

const AdminNavbar = () => {
  const navigate = useNavigate()
  const postDataToDb = usePostsDataToDb()

  async function handleLogout() {
    const res = await postDataToDb("logout", {})
    
    if (res.statusCode === 200) {
      navigate('/',);
      localStorage.clear()
      window.location.reload()
    }




  }
  return (
    <div>
      <div className=" h-36 md:h-52 ">
        <div className="h-1/3   flex justify-between items-center bg-blue-600 ">
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
          <div className="flex items-center justify-center mr-2">
            <div><img width="48" height="48" className="pr-2" src="https://img.icons8.com/fluency/48/000000/administrator-male.png" alt="administrator-male" /></div>

            <div className="cursor-pointer" onClick={handleLogout}><MdLogout size={32} color="white" /></div>
          </div>
        </div>
        <div className="flex justify-center">
          {NavList.map((item) => {
            return (
              <Link
                to={item.path}
                className="max-h-2/3  mt-3 py-2 md:p-6  flex items-center ml-1 md:ml-4 
                      flex-col text-white w-24  justify-center    hover:bg-white hover:text-blue-400  hover:rounded-md
                      "
              >
                <div className=" w-0 h-4 md:w-auto md:h-auto pr-7 md:pr-0">{item.icon}</div>
                <div className=" mt-4 text-sm md:font-semibold  ">{item.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminNavbar;
