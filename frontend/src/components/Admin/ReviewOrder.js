import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { updateOrderHistoryDetails } from "../../store/orderHistorySlice";
import useGetsDataFromDB from "../hooks/useGetsDataFromDb.hook";
import usePostsDataToDb from "../hooks/usePostsDataToDb.hook";

const ReviewOrder = () => {
  const customerDetails = useSelector((state) => state.existingUserDetails);
  const dispatch = useDispatch();
  const getDataFromDB = useGetsDataFromDB();
  const postDataToDb = usePostsDataToDb();
  const [orderDetails, setOrderDetails] = useState([]);
  const fetchData = async () => {
    try {
      const data = await getDataFromDB(
        `orderdetails/${customerDetails?.customerId}`
      );
      setOrderDetails(data.message);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (customerDetails.customerId > 0) {
      fetchData();
    }
  }, [customerDetails.customerId]);

  const deliveryStatus = (item, index) => {
    let updatedOrderDetails = [...orderDetails];
    updatedOrderDetails[index] = { ...item, delivered: true };
    setOrderDetails(updatedOrderDetails);
    postDataToDb(`orderdetails/${item._id}`, {});
  };

  const ViewUserHistory = (item) => {
    dispatch(updateOrderHistoryDetails({ ...item, isShowOrderHistory: true }));
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-[10vw]">
      {orderDetails.length === 0 ? (
        <div className="text-center mb-2"> NO Order Details Found </div>
      ) : (
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
            {orderDetails.length>0 &&orderDetails?.map((item, index) => (
              <tr key={item._id}  className=" bg-blue-500 border-b">
                <td className="px-6 py-4 text-base font-semibold">
                  Order{index + 1}
                </td>

                <td
                  className="px-6 py-4 text-center "
                  onClick={() => {
                    ViewUserHistory(item);
                  }}
                >
                  <FaRegEye
                    size={25}
                    className="hover:text-black hover:font-bold cursor-pointer"
                  />
                </td>
                <td className="px-6 py-4 font-bold text-lg text-white">
                  &nbsp; &#x20B9;{" "}
                  {item.amountForPerPeice > 0 
                    ? item?.amountForPerPeice
                    : item?.amountForPerKg}
                </td>
                <td
                  className="px-6 py-4"
                  onClick={() => {
                    deliveryStatus(item, index);
                  }}
                >
                  <button className={`text-base  ${item?.delivered?"bg-[#98E4FF]":"bg-white"}  hover:bg-red-400 text-black font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded`}>
                    {item.delivered?"Paid":"Pay"}
                  </button>
                </td>
                <td className="px-6 py-4 font-bold text-base">
                  {item?.delivered ? "DELIVERED" : "UNDELIVERED"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ReviewOrder;
