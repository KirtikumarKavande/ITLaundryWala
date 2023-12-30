import React, { useEffect, useState } from "react";
import SelectClothType from "./SelectClothType";
import { NUMBER_OF_CLOTH_TYPE } from "../utilities/constant";
import { MdAddCircleOutline } from "react-icons/md";
import DeliveryDates from "./DeliveryDates";
import { useDispatch, useSelector } from "react-redux";
import { updateClothDetails } from "../../store/ClothDetailsSlice";
import { updateOrderHistoryDetails } from "../../store/orderHistorySlice";

const ClothType = (props) => {
  const { selectedWashType, finalAmountOfWashType } = props;
  const orderHistory = useSelector((store) => store.orderHistoryDetails);

  const dispatch = useDispatch();
  const [clothType, setClothType] = useState([]);
  const [numberOFCloth, setNumberOFCloth] = useState(NUMBER_OF_CLOTH_TYPE);
  const [totalAmount, setTotalAmount] = useState(0);
  let zIndex = NUMBER_OF_CLOTH_TYPE.length;
  const [selectedClothTypeIndex, setSelectedClothTypeIndex] = useState(0);
  let updatedClothType = [];

  const getClothTypeAndPrice = (price, clothItem,identifier) => {
    updatedClothType = [...clothType];
    updatedClothType[selectedClothTypeIndex] = {
      ...updatedClothType[selectedClothTypeIndex],
      price: price,
      identifier:identifier
    };
    updatedClothType[selectedClothTypeIndex] = {
      ...updatedClothType[selectedClothTypeIndex],
      cloth: clothItem,
    };
    setClothType(updatedClothType);
  };

  const quantity = (index, e) => {
    updatedClothType = [...clothType];

    updatedClothType[index] = {
      ...updatedClothType[index],
      quantity: e.target.value,
    };
    updatedClothType[index] = {
      ...updatedClothType[index],
      amount: updatedClothType[index].quantity * updatedClothType[index].price,
    };

    if (clothType[index]?.amount) {
      setTotalAmount(
        totalAmount +
          updatedClothType[index].quantity * +updatedClothType[index].price -
          +clothType[index]?.amount
      );
    } else {
      setTotalAmount(
        totalAmount +
          updatedClothType[index]?.quantity * +updatedClothType[index].price
      );
    }

    setClothType(updatedClothType);
  };

  useEffect(() => {
    dispatch(updateClothDetails({ clothType }));
  }, [clothType, dispatch]);

  useEffect(() => {
    if (orderHistory?.clothType?.length > 0) {
      setClothType(orderHistory?.clothType);
      dispatch(updateOrderHistoryDetails({ isShowOrderHistory: false }));
    }
  }, [orderHistory.isShowOrderHistory]);

  console.log("clothTypekk", clothType);
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
              {(selectedWashType?.type || orderHistory?.washType?.type) ===
                "perPiece" && (
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
            {numberOFCloth?.map((item, index) => {
              return (
                <tr className="relative text-black bg-blue-500 border-b">
                  <td className="px-2 md:text-center py-4">{item}</td>
                  <td
                    className="px-1  py-4 z-50 absolute"
                    style={{ zIndex: Math.abs(zIndex--) }}
                    onFocus={() => {
                      setSelectedClothTypeIndex(index);
                    }}
                  >
                    <SelectClothType
                      key={item}
                      selectedWashType={selectedWashType}
                      getClothTypeAndPrice={getClothTypeAndPrice}
                      value={clothType[index]?.cloth}
                    />
                  </td>
                  <td className="px-3 md:px-auto  py-4">
                    <input
                      value={clothType[index]?.quantity}
                      onChange={(e) => {
                        quantity(index, e);
                      }}
                      className="bg-gray-200 text-center appearance-none border-2  text-base text-black border-gray-200 rounded w-14 md:w-36 h-8 py-2  leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                    />
                  </td>
                  {(selectedWashType?.type || orderHistory?.washType?.type) ===
                    "perPiece" && (
                    <td className="px-3 md:px-auto text-center py-4">
                      <input
                        value={clothType[index]?.amount}
                        className="bg-gray-200 text-base text-center appearance-none border-2  border-gray-200 rounded md:w-36 w-14 h-8 py-2 text-black text-md leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
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

      <DeliveryDates
        totalAmount={totalAmount}
        selectedWashType={selectedWashType}
        finalAmountOfWashType={finalAmountOfWashType}
      />
    </div>
  );
};

export default ClothType;
