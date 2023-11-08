import React from "react";
import { FaRegEye } from "react-icons/fa";

const ReviewOrder = () => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-[10vw]">
      <table className="w-full text-sm text-left text-gray-500  ">
        <thead className="text-xs text-white uppercase  bg-blue-600 dark:bg-gray-700 dark:text-gray-400">
          <tr className="text-white ">
            <th scope="col" className="px-6 py-3 text-base">
              Order
            </th>
            <th scope="col" className="px-6 py-3 text-base">
              Review
            </th>
            <th scope="col" className="px-6 py-3 text-base">
              Amount
            </th>
            <th scope="col" className="px-6 py-3 text-base">
              Payment
            </th>
            <th scope="col" className="px-6 py-3 text-base">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="text-white">
          <tr className=" bg-blue-500 border-b">
            <td className="px-6 py-4 text-base font-semibold">Order 1</td>

            <td className="px-6 py-4 text-center">
              <FaRegEye size={25} />
            </td>
            <td className="px-6 py-4 font-bold text-lg text-white">
              
              &nbsp; &#x20B9; 250
            </td>
            <td className="px-6 py-4">
              <button className=" text-base bg-white hover:bg-red-400 text-black font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded">
                Paid
              </button>
            </td>
            <td className="px-6 py-4 font-bold text-base">UNDELIVERED</td>
          </tr>
          <tr className=" border-b bg-[#3D9FE6]">
            <td className="px-6 py-4 font-semibold text-base">Order 2</td>

            <td className="px-6 py-4 text-center">
              <FaRegEye size={25} />
            </td>

            <td className="px-6 py-4 font-bold text-lg text-white">
              
              &nbsp; &#x20B9; 250
            </td>
            <td className="px-6 py-4">
              <button className=" text-base bg-white hover:bg-red-400 text-black font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded">
                Paid
              </button>
            </td>
            <td className="px-6 py-4 text-black font-bold text-base ">
              DELIVERED
            </td>
          </tr>
          <tr className="bg-blue-500 border-b">
            <td className="px-6 py-4 font-semibold text-base">Order 3</td>

            <td className="px-6 py-4 text-center">
              <FaRegEye size={25} />
            </td>

            <td className="px-6 py-4 font-bold text-lg text-white">
              
              &nbsp; &#x20B9; 250
            </td>
            <td className="px-6 py-4">
              <button className=" text-base bg-white hover:bg-red-400 text-black font-semibold hover:text-white  py-2 px-8 border border-blue-500 hover:border-transparent rounded">
                Paid
              </button>
            </td>
            <td className="px-6 py-4 font-bold text-base">UNDELIVERED</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReviewOrder;
