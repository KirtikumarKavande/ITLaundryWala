import React, { useEffect, useRef, useState } from "react";
import { washMenu } from "../utilities/washmenu";

const WashType = () => {
  const [menu, setMenu] = useState({
    weight: null,
    selectedmenu: {},
    totalPrice: 0,
  });

  useEffect(() => {
    setMenu({ ...menu, totalPrice: menu?.selectedmenu?.price * menu.weight });
  }, [menu.weight, menu.selectedmenu.price]);
  return (
    <div >






















      <div className="flex-auto md:flex mt-2 md:mt-3   w-full px-6 ">
        <label
          for="countries"
          className=" block font-serif md:mb-2 text-base  md:mt-2 font -medium  text-black  dark:text-white"
        >
          Wash Type
        </label>

        <select
          onChange={(e) => {
            const selectedMenuDetails = washMenu.find(
              (menu) => menu.item === e.target.value
            );

            setMenu({ ...menu, selectedmenu: selectedMenuDetails });
          }}
          className="bg-gray-200 w-full  border    border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a Wash Type</option>
          <>
            {washMenu.map((menu) => {
              return (
                <option className="font-semibold" value={menu.item}>
                  {menu.item}
                </option>
              );
            })}
          </>
        </select>
      </div>

      <div className="w-full flex px-6 mt-2 ">
        <div className="w-2/4">
          <div>
            <label className="font-serif">Weight</label>
          </div>
          <div>
            <input
              className="bg-gray-200  appearance-none border-2 border-gray-200 rounded w-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
              type="text"
              onChange={(e) => {
                setMenu({ ...menu, weight: +e.target.value });
              }}
              name="weightw"
              value={menu.weight}
            />
          </div>
        </div>

        <div className="w-2/4 ">
          <div>
            <label className="font-serif">Amount</label>
          </div>
          <div>
            <input
              className="bg-gray-200 w-full  appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="amount"
              value={menu.totalPrice || 0}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashType;
