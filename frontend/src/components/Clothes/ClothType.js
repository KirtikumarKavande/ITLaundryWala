import React, { useState } from "react";
import SelectClothType from "./SelectClothType";
import { NUMBER_OF_CLOTH_TYPE } from "../utilities/constant";
import { MdAddCircleOutline } from "react-icons/md";
import DeliveryDates from "./DeliveryDates";

const ClothType = (props) => {
  const { TypeofSelectedWashType } = props;
  console.log(">>>>>typewash", TypeofSelectedWashType);
  const [numberOFCloth, setNumberOFCloth] = useState(NUMBER_OF_CLOTH_TYPE);
  let zIndex = NUMBER_OF_CLOTH_TYPE.length;
  return (
    <div>
      <div className="px-1 md:px-[10vw] relative overflow-x-auto shadow-md sm:rounded-lg mt-7 md:pt-12 rounded-xl">
        <table className="w-full md:w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-xs text-gray-700 uppercase bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-2  md:px-auto text-center text-white py-3"
              >
                Sr
              </th>
              <th
                scope="col"
                className=" px-14 md:mr-5  text-white md:px-auto py-3"
              >
                Cloth Type
              </th>
              <th
                scope="col"
                className="text-white  md:text-left   px-6 md:px-auto py-3"
              >
                <span className="md:pl-8">Qty</span>
              </th>
              {TypeofSelectedWashType === "perPiece" && (
                <th
                  scope="col"
                  className=" px-4 text-white text-center md:px-auto py-3 "
                >
                  Amount
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {numberOFCloth.map((item, index) => {
              return (
                <tr className="relative text-black bg-blue-500 border-b">
                  <td className="px-2 md:text-center py-4">{item}</td>
                  <td
                    className="px-1  py-4 z-50 absolute"
                    style={{ zIndex: Math.abs(zIndex--) }}
                  >
                    <SelectClothType key={item} />
                  </td>
                  <td className="px-3 md:px-auto  py-4">
                    <input className="bg-gray-200 text-center appearance-none border-2  text-base text-black border-gray-200 rounded w-14 md:w-36 h-8 py-2  leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                  </td>
                  {TypeofSelectedWashType === "perPiece" && (
                    <td className="px-3 md:px-auto text-center py-4">
                      <input className="bg-gray-200 appearance-none border-2  border-gray-200 rounded md:w-36 w-14 h-8 py-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>

          <div
            className="mt-1 md:ml-8 md:px:auto"
            onClick={() => {
              setNumberOFCloth([...numberOFCloth, numberOFCloth.length + 1]);
            }}
          >
            <MdAddCircleOutline size={25} className="text-white" />
          </div>
        </table>
      </div>

      <DeliveryDates />
    </div>
  );
};

export default ClothType;
