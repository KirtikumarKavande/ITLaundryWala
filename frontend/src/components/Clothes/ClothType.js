import React, { useEffect, useRef, useState } from "react";
import { clothTypeData } from "../utilities/clothTypes";
const ClothType = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const [SelectesClothType, setSelectesClothType] = useState("");
  console.log(activeIndex);
  const [cloth, setCloth] = useState(clothTypeData);
  const handleChangeForClothType = (e) => {
    setSelectesClothType(e.target.value);
  };

  useEffect(() => {
    const data = clothTypeData.filter((item) => {
      if (
        item?.type?.toLowerCase()?.includes(SelectesClothType.toLowerCase()) ||
        Number(item.id) === Number(SelectesClothType)
      ) {
        return item?.type;
      }
    });
    setCloth(data);
  }, [SelectesClothType]);

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && activeIndex < cloth.length - 1) {
      setActiveIndex(activeIndex + 1);
    } else if (e.key === "ArrowUp" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (e.key === "Enter") {
      setSelectesClothType(cloth[activeIndex]?.type);
      setShowSuggestion(false)
    }
  };

  //   console.log(cloth[activeIndex]?.type);
  return (
    <div>
      <input
        onFocus={() => {
          setShowSuggestion(true);
        }}
        onChange={handleChangeForClothType}
        value={SelectesClothType}
        onKeyDown={handleKeyDown}
        className="
      bg-gray-200 ml-16 appearance-none border-2    border-gray-200 rounded w-32 h-8 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
      />
      {showSuggestion && (
        <ul className="bg-white w-[210px] space-y-2 ml-8 md:w-[200px] my-2 text-base overflow-y-scroll h-32 flex-col  border  md:ml-16 border-gray-300 text-gray-900 rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {cloth.map((item, index) => {
            return (
              <li
                onClick={() => {
                  setSelectesClothType(item.type);
                  setShowSuggestion(false)
                }}
                className={` h-5 pl-2 cursor-pointer ${
                  activeIndex === index ? "bg-orange-300" : ""
                }`}
              >
                {item?.type || null}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ClothType;
