import React, { useEffect, useState } from "react";
import { washMenu } from "../utilities/washmenu";
import { useDispatch, useSelector } from "react-redux";
import { updateClothDetails } from "../../store/ClothDetailsSlice";
import { updateOrderHistoryDetails } from "../../store/orderHistorySlice";

const WashType = (props) => {
  const { setSelectedWashType, setFinalAmountOfWashType } = props;
  const orderHistory = useSelector((store) => store.orderHistoryDetails);
  const orderDetails = useSelector((store) => store.clothDetails);
  console.log("orderDetails", orderDetails);

  const dispatch = useDispatch();
  const [menu, setMenu] = useState({
    weight: null,
    selectedmenu: {},
    totalPrice: null,
  });

  useEffect(() => {
    if (orderHistory.isShowOrderHistory) {
      setMenu({
        totalPrice: orderHistory?.amountForPerKg,
        weight: orderHistory?.weight || 0,
        selectedmenu: { item: orderHistory?.washType?.item },
      });
      dispatch(updateOrderHistoryDetails({ isShowOrderHistory: false }));
    }
  }, [orderHistory.isShowOrderHistory]);

  useEffect(() => {
    dispatch(
      updateClothDetails({
        washType: menu.selectedmenu,
        weight: menu.weight,
        amountForPerKg: orderDetails.isExpressDelivery
          ? +menu.totalPrice * 1.5
          : menu.totalPrice,
      })
    );
  }, [
    dispatch,
    menu.selectedmenu,
    menu.weight,
    menu.totalPrice,
    orderDetails.isExpressDelivery,
  ]);

  useEffect(() => {
    if (menu?.selectedmenu?.price > 0) {
      const selectedMenuPrice = +menu.selectedmenu.price;

      const newTotalPrice = selectedMenuPrice * menu.weight || 0;

      if (newTotalPrice !== menu.totalPrice) {
        setFinalAmountOfWashType(newTotalPrice);
        setMenu({ ...menu, totalPrice: newTotalPrice });
      }
    }
    setSelectedWashType(menu?.selectedmenu);
  }, [menu.weight, menu.selectedmenu?.price, menu.selectedmenu?.item]);

  return (
    <div>
      <div className="flex-auto md:flex mt-2 md:mt-3 md:px-9  md:w-[600px] px-6 ">
        <label
          for="countries"
          className=" block font-serif md:w-2/12 md:mb-2 text-base  md:mt-2 font -medium  text-black  dark:text-white"
        >
          Wash Type
        </label>

        <select
          onChange={(e) => {
            const selectedMenuDetails = washMenu.find(
              (menu) => menu.item === e.target.value
            );

            setMenu({ ...menu, selectedmenu: selectedMenuDetails });
          }}
          value={menu?.selectedmenu?.item}
          className="bg-gray-200 w-full md:w-[329px] md:ml-4  border   border-gray-300 text-black font-base  rounded-md focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>Choose a Wash Type</option>
          <>
            {washMenu.map((menu) => {
              return (
                <option className="font-semibold" value={menu.item}>
                  {menu.item}
                </option>
              );
            })}
          </>
        </select>
      </div>

      <div className="w-full flex px-6 mt-2 md:mt-3 md:w-[600px]  ">
        <div className="w-2/4 md:flex md:items-center">
          <label className="font-serif md:pl-3">Weight</label>

          <div>
            <input
              className="bg-gray-200  appearance-none border-2 md:ml-[57px] border-gray-200 rounded w-24 py-2 px-4 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              onChange={(e) => {
                setMenu({ ...menu, weight: e.target.value });
              }}
              style={{ "-webkit-appearance": "none" }}
              name="weightw"
              value={menu?.weight}
              type="text"
            />
          </div>
        </div>

        <div className="w-2/4 md:flex md:items-center">
          <div>
            <label className="font-serif md:mt-4 ">Amount</label>
          </div>
          <div>
            <input
              className="bg-gray-200 w-full md:w-[104px] md:ml-3 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-black font-base leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="amount"
              value={menu.totalPrice || 0}
              disabled
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WashType;
