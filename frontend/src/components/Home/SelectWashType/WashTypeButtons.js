import React from "react";
import { washTypeButtonMenu } from "./WashTypeButtonMenu.js";

const WashTypeButtons = ({ setCurrentPage }) => {
  const selectedWashType = (data) => {
    console.log(data);
    
    if (data.item === "WASH & FOLD" || data.item === "WASH & IRON") {
      setCurrentPage("customerDetails");
    } else if (data.item === "DRY CLEANING") {
      setCurrentPage("dryCleaning");
    } else if (data.item === "HOUSEHOLD") {
      setCurrentPage("houseHold");
    } else if (data.item === "PRESS") {
      setCurrentPage("press");
    } else if (data.item === "EXPRESS LAUNDRY") {
      setCurrentPage("expressLaundry");
    }
  };

  return (
    <div className="bg-[#F8F7F5] py-6 px-4">
      <div className="max-w-md mx-auto space-y-4 sm:space-y-6">
        {washTypeButtonMenu.map((item, index) => (
          <button
            key={index}
            onClick={() => selectedWashType(item)}
            className="flex w-full items-center justify-between px-4 py-2 sm:py-1 border border-black rounded-full text-black text-sm sm:text-base"
          >
            <div className="flex items-center space-x-2 sm:space-x-4">
              <img src={item.imgUrl} className="h-8 w-8 sm:h-10 sm:w-12 object-contain" alt="" />
              <span>{item.item}</span>
            </div>
            <div>
              {item.type === "/kg" && <span>&#8377;{item.price} </span>}
              <span>{item.type}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WashTypeButtons;