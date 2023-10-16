import React, { useEffect, useRef, useState } from "react";
import { washMenu } from "../utilities/washmenu";

const WashType = () => {
  const [menu, setMenu] = useState({
    weight: 0,
    selectedmenu: {},
    totalPrice: 0,
  });
  console.log(menu.selectedmenu.price * menu.weight);

  useEffect(() => {
    setMenu({ ...menu, totalPrice: menu?.selectedmenu?.price * menu.weight });
  }, [menu.weight, menu.selectedmenu.price]);
  return (
    <>
      <div className="flex-auto md:flex mt-3 md:mt-0">
        <label
          for="countries"
          className=" block mb-1 md:mb-2 text-base ml-9 md:mt-2 font -medium  text-black font-bold dark:text-white"
        >
          Wash Types
        </label>

        <select
          onChange={(e) => {
            const selectedMenuDetails = washMenu.find(
              (menu) => menu.item === e.target.value
            );

            setMenu({ ...menu, selectedmenu: selectedMenuDetails });
          }}
          className="bg-gray-200 w-[310px] ml-8 md:w-[339px]  border  md:ml-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a Wash Type</option>
          <>
            {washMenu.map((menu) => {
              return <option className="font-semibold" value={menu.item}>{menu.item}</option>;
            })}
          </>
        </select>
      </div>

      <div className="flex mt-3 ">
        <div className="md:flex md:items-center  md:mb-6">
          <div className="md:w-1/3">
            <label
              className="`block text-black font-bold ml-10 md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-full-name"
            >
              Weight
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml-9 mt-1 md:mt-0 md:ml-14 appearance-none border-2 border-gray-200 rounded w-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  "
              id="inline-full-name"
              type="text"
              onChange={(e) => {
                setMenu({ ...menu, weight: +e.target.value });
              }}
            />
          </div>
        </div>
        <div className=" ml-12 md:flex md:items-center md:mb-6 md:-ml-14">
          <div className="">
            <label
              className="block ml-[35px] md:ml-[72px]  text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Amount
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml-8 md:ml-0 w-32 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              disabled
              value={menu.totalPrice || 0}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WashType;
