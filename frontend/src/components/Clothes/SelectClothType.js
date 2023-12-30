import React, { useEffect, useMemo, useState } from "react";
import { WashFoldIron } from "../utilities/WFWIWS";
import { Household } from "../utilities/Houeshold";
import { Shoes } from "../utilities/Shoes";
import { Press } from "../utilities/Press";
import { DryCleaning } from "../utilities/DryCleaning";
const SelectClothType = ({ selectedWashType, getClothTypeAndPrice, value }) => {
  const [menuCard, setMenuCard] = useState([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [SelectesClothType, setSelectesClothType] = useState("");

  useEffect(() => {
    if (selectedWashType?.item === "DRY CLEANING") {
      setMenuCard(DryCleaning);
    } else if (selectedWashType?.item === "PRESS") {
      setMenuCard(Press);
    } else if (selectedWashType?.item === "HOUSEHOLD") {
      setMenuCard(Household);
    } else if (selectedWashType?.item === "SHOES") {
      setMenuCard(Shoes);
    } else {
      setMenuCard(WashFoldIron);
    }
  }, [selectedWashType?.item]);
  const [cloth, setCloth] = useState(menuCard);

  const handleChangeForClothType = (e) => {
    setSelectesClothType(e.target.value);
  };

  useEffect(() => {
    const data = menuCard?.filter((item) => {
      if (
        item?.type?.toLowerCase()?.includes(SelectesClothType.toLowerCase()) ||
        Number(item.id) === Number(SelectesClothType)
      ) {
        return item?.type;
      }
    });
    setCloth(data);
  }, [SelectesClothType, menuCard]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeIndex < cloth.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "Enter") {
      setSelectesClothType(cloth[activeIndex]?.type);
      setShowSuggestion(false);
    }
  };

  return (
    <div>
      <input
        onFocus={() => {
          setShowSuggestion(true);
        }}
        onChange={handleChangeForClothType}
        value={SelectesClothType||value}
        onKeyDown={handleKeyDown}
        className="
      bg-gray-200  appearance-none border-2 text-center   border-gray-200 rounded w-36  h-8 py-2  text-black leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
      />
      {showSuggestion && (
        <ul className="bg-white w-[210px] space-y-2 ml-8 md:w-[230px] my-2 md:-ml-8 text-base overflow-y-scroll h-32 flex-col  border  border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {cloth?.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSelectesClothType(item.type);
                  setShowSuggestion(false);
                  getClothTypeAndPrice(item.price, item.type,item.identifier);
                }}
                className={` h-5 pl-2 cursor-pointer ${
                  activeIndex === index ? "bg-orange-300" : ""
                }`}
              >
                <span> {item?.type || null}</span>{" "}
                <span>
                  {selectedWashType.type === "perPiece" && (
                    <span> &nbsp; &#x20B9;{`${item.price}`}</span>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SelectClothType;
