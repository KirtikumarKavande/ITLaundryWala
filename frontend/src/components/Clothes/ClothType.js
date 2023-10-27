import React, { useState } from "react";
import SelectClothType from "./SelectClothType";
import { NUMBER_OF_CLOTH_TYPE } from "../utilities/constant";
import { MdAddCircleOutline } from "react-icons/md";
import DeliveryDates from "./DeliveryDates";

const ClothType = () => {
  const [numberOFCloth, setNumberOFCloth] = useState(NUMBER_OF_CLOTH_TYPE);
  let zIndex = NUMBER_OF_CLOTH_TYPE.length;
  return (
    <div>
      <div className=" relative overflow-x-auto shadow-md sm:rounded-lg pt-12 px-1 rounded-xl ">
        <table className=" w-full md:w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-2  md:px-6 text-white  py-3 ">
                Sr
              </th>
              <th scope="col" className="  px-14 text-white  md:px-6 py-3">
                Cloth Type
              </th>
              <th scope="col" className="text-white px-6 py-3">
                Qty
              </th>
              <th scope="col" className="px-4 text-white md:px-6 py-3 ">
                Amount
              </th>
            </tr>
          </thead>
          <tbody>
            {numberOFCloth.map((item, index) => {
              return (
                <tr className="relative text-black bg-blue-500 border-b  ">
                  <td className="px-2  md:px-6 py-4 ">{item}</td>
                  <td
                    className=" px-1 md:px-6 py-4 z-50  absolute "
                    style={{ zIndex: Math.abs(zIndex--) }}
                  >
                    <SelectClothType key={item} />
                  </td>
                  <td className="px-3 py-4 ">
                    <input
                      className="
          bg-gray-200   appearance-none border-2  text-center   border-gray-200 rounded w-14 md:w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                    />
                  </td>
                  <td className="px-3 py-4 ">
                    <input
                      className="
          bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded md:w-36 w-14 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>

          <div
            className="mt-1 md:ml-8"
            onClick={() => {
              setNumberOFCloth([...numberOFCloth, numberOFCloth.length + 1]);
            }}
          >
            <MdAddCircleOutline size={25} className="text-white"/>
          </div>
        </table>
      </div>
    
      <DeliveryDates />
    </div>
  );
};

export default ClothType;
