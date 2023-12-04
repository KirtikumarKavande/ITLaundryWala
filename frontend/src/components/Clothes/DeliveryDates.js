import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClothDetails } from "../../store/ClothDetailsSlice";
import InvoiceBarcode from "./InvoiceBarcode";
import ReviewOrder from "../Admin/ReviewOrder";
import { updateOrderHistoryDetails } from "../../store/orderHistorySlice";

const DeliveryDates = (props) => {
  const { totalAmount, selectedWashType, finalAmountOfWashType } = props;
  console.log("finalAmountOfWashType", finalAmountOfWashType);
  const [isExpressDelivery, setIsExpressDelivery] = useState(false);

  const currentDate = new Date();

  const dispatch = useDispatch();
  const orderHistory = useSelector((store) => store.orderHistoryDetails);

  const [pickupDate, setPickupDate] = useState(
    `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`
  );

  const [deliveryDate, setDeliveryDate] = useState(
    `${currentDate.getDate() + 2}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`
  );

  useEffect(() => {
    dispatch(
      updateClothDetails({
        pickupDate: pickupDate,
        deliveryDate: deliveryDate,
        amountForPerPeice: isExpressDelivery ? +totalAmount * 1.5 : totalAmount,
      })
    );
  }, [deliveryDate, totalAmount, isExpressDelivery]);

  //  19/10/2023
  const ChangeDeliveryDate = (e) => {
    setDeliveryDate(e.target.value);
  };

  useEffect(() => {
    if (orderHistory?.deliveryDate) {
      setDeliveryDate(orderHistory?.deliveryDate);
      setPickupDate(orderHistory?.pickupDate);
      dispatch(updateOrderHistoryDetails({ isShowOrderHistory: false }));
    }
  }, [orderHistory.isShowOrderHistory]);

  const handleExpressDelivery = (e) => {
    console.log("checked", e.target.checked);
    if (e.target.checked) {
      dispatch(updateClothDetails({ isExpressDelivery: true }));
      setIsExpressDelivery(true);
    } else {
      dispatch(updateClothDetails({ isExpressDelivery: false }));

      setIsExpressDelivery(false);
    }
  };
  console.log("isExpressDelivery", isExpressDelivery);
  return (
    <div>
      <div className="w-full flex pt-3 px-5 md:px-60">
        <div className="w-1/3 mb-4">
          <div>
            <label className="font-serif">Pickup</label>
          </div>
          <div>
            <input
              className="bg-gray-200 w-[25vw] md:w-[120px] md:text-center appearance-none border-2 border-gray-200 rounded mr-2 py-2 px-2 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
              value={pickupDate}
            />
          </div>
        </div>

        <div className="w-1/3 pl-2">
          <div>
            <label className="font-serif">Delivery</label>
          </div>
          <div>
            <input
              className="bg-gray-200 w-full  md:w-[120px] md:text-center appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
              onChange={ChangeDeliveryDate}
              value={deliveryDate}
            />
          </div>
        </div>

        <div className="w-1/3  pl-2 ml-2">
          <div>
            <label className="font-serif ">Amount</label>
          </div>
          <div>
            <input
              value={
                (selectedWashType?.type === "perPiece" && !isExpressDelivery
                  ? totalAmount
                  : !isExpressDelivery? finalAmountOfWashType:null) ||
                (selectedWashType?.type === "perPiece" && isExpressDelivery
                  ? totalAmount * 1.5
                  : finalAmountOfWashType * 1.5) ||

                orderHistory?.amountForPerKg ||
                orderHistory?.amountForPerPeice
              }
              className="bg-gray-200   md:w-[120px] md:text-center w-[20vw] appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
            />
          </div>
        </div>
        <div className="flex mt-8 ">
          <div>
            <input
              type="checkbox"
              className="w-6 h-6 mr-2"
              onChange={handleExpressDelivery}
            />
          </div>
          <label className="text-lg font-semibold ">Express </label>
        </div>
      </div>
      <InvoiceBarcode />
      <ReviewOrder />
    </div>
  );
};

export default DeliveryDates;
