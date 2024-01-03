import React from "react";
import { washTypeButtonMenu } from "./WashTypeButtonMenu.js";
console.log("washTypeButtonMenu", washTypeButtonMenu);

const WashTypeButtons = ({ setCurrentPage }) => {
  const selectedWashType = (data) => {
    console.log(data);

    if (data.item === "WASH & FOLD" || data.item === "WASH & IRON") {
      setCurrentPage("customerDetails");
    }else if(data.item === "DRY CLEANING" )
    {
      setCurrentPage("dryCleaning");

    }
  };
  return (
    <div>
      <div className="space-y-6 flex-col   w-full mx-auto bg-[#F8F7F5] pb-16 pt-6 ">
        {washTypeButtonMenu.map((item) => (
          <button
            onClick={() => {
              selectedWashType(item);
            }}
            className=" flex w-[27vw] h-12 items-center justify-between px-4 mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide"
          >
            {" "}
            <div>
              <img src={item.imgUrl} className="h-10 w-12  inline" alt="" />
            </div>{" "}
            <div>{item.item}</div>{" "}
            <div>
              {" "}
              {item.type === "/kg" && <span>&#8377;{item.price} </span>}
              <span> {item.type} </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default WashTypeButtons;
