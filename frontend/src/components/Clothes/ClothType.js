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
      <div className="relative flex overflow-x-auto  sm:rounded-lg px-10  justify-center">
        <table className="w-[65vw] text-sm text-left f text-black  dark:text-black">
          <thead className="text-xs  text-black uppercase bg-[#23B0C4] dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="pl-10 py-6 ">
                Sr.No.
              </th>
              <th scope="col" className="pl-8 py-6">
                ClothType
              </th>
              <th scope="col" className="py-6 pl-[168px]">
                Quality
              </th>
              <th scope="col" className="pl-16 py-6 ">
                Amount
              </th>
            </tr>
          </thead>

          <tbody>
            {numberOFCloth.map((item, index) => {
              return (
                <tr
                  key={item}
                  className="relative border-b bg-[#FFFFFF] dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="py-4 pl-10   font-medium text-black whitespace-nowrap dark:text-white"
                  >
                    {item}
                  </th>
                  <td
                    className={`py-4 z-50 absolute   } `}
                    style={{ zIndex: Math.abs(zIndex--) }}
                  >
                    {" "}
                    <SelectClothType key={item} />
                  </td>
                  <td className="py-4 pl-32 ">
                    {" "}
                    <input
                      className="
          bg-gray-200   appearance-none border-2  text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                    />
                  </td>
                  <td className="py-4 pl-7  ">
                    {" "}
                    <input
                      className="
          bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36 h-8 py-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
          <div
            className="mt-2 ml-8"
            onClick={() => {
              setNumberOFCloth([...numberOFCloth, numberOFCloth.length + 1]);
            }}
          >
            <MdAddCircleOutline size={25} />
          </div>
        </table>
      </div>
      <DeliveryDates />
    </div>
  );
};

export default ClothType;
