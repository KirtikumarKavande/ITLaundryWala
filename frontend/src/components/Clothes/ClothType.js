import React from "react";
import SelectClothType from "./SelectClothType";

const ClothType = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-10 ">
        <table className="w-[65vw] text-sm text-left f text-black  dark:text-black">
          <thead className="text-xs  text-black uppercase bg-[#23B0C4] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-10 py-6 ">
                Sr.No.
              </th>
              <th scope="col" className="pl-8 py-6">
                ClothType
              </th>
              <th scope="col" className="py-6 pl-28">
                quality
              </th>
              <th scope="col" className="pl-16 py-6 ">
              Amount
              </th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 pl-10  font-medium text-black whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="py-4  absolute z-50">
                {" "}
                <SelectClothType />
              </td>
              <td className="py-4 pl-16">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
              <td className="py-4 pl-7">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
            </tr>
            <tr className="border-b bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 pl-10  font-medium text-black whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="py-4  absolute z-40">
                {" "}
                <SelectClothType />
              </td>
              <td className="py-4 pl-16">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
              <td className="py-4 pl-7">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
            </tr>
            <tr className="border-b bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="py-4 pl-10  font-medium text-black whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td className="py-4 absolute z-auto">
                {" "}
                <SelectClothType />
              </td>
              <td className="py-4 pl-16">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
              <td className="py-4 pl-7">
                {" "}
                <input
                  className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ClothType;
