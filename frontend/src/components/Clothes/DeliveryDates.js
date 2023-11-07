import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateClothDetails } from "../../store/ClothDetailsSlice";
import usePostDataToDb from "../hooks/usePostDataToDb";
import InvoiceBarcode from "./InvoiceBarcode";
import ReviewOrder from "../Admin/ReviewOrder";

const DeliveryDates = (props) => {
  const { totalAmount, selectedWashType, finalAmountOfWashType } = props;
  const dispatch = useDispatch();
  const postDataToDB = usePostDataToDb();
  console.log("selectedWashType", selectedWashType);
  const currentDate = new Date();

  const [deliveryDate, setDeliveryDate] = useState(
    `${currentDate.getDate() + 2}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`
  );

  const pickupDate = () => {
    return `${currentDate.getDate()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`;
  };

  useEffect(() => {
    dispatch(
      updateClothDetails({
        pickupDate: pickupDate(),
        deliveryDate: deliveryDate,
        amountForPerPeice: totalAmount,
      })
    );
  }, [deliveryDate, totalAmount]);

  //  19/10/2023
  const ChangeDeliveryDate = (e) => {
    setDeliveryDate(e.target.value);
  };

  
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
              value={pickupDate()}
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
                selectedWashType?.type === "perPiece"
                  ? totalAmount
                  : finalAmountOfWashType
              }
              className="bg-gray-200   md:w-[120px] md:text-center w-[20vw] appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
            />
          </div>
        </div>
      </div>
     <InvoiceBarcode/>
     <ReviewOrder/>
    </div>
  );
};

export default DeliveryDates;
