import React, { useContext, useEffect, useState } from "react";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { COUNTRY_CODE, PICKUP_TIME } from "../utilities/constant";
import Modal from "./UI/Modal";
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import CustomerSelfContactDetails from "../../context/customerSelfContactDetails/customerSelfContactDetails";
import useData from "../hooks/useData";

const OrderSummeryAndCustomerDetails = ({ setCurrentPage }) => {
  const { cart } = useSelector((store) => store.cart);
  useEffect(() => {
    setItemCart(cart);
  }, []);
  const [itemInCart, setItemCart] = useState(cart);
  const initialValue = 0;
  const totalPriceOfItemInCArt = itemInCart.reduce(
    (accumulator, item) => accumulator + item.price * item.qty,
    initialValue
  );
  const {customerDetailPicker}=useContext(CustomerSelfContactDetails)

  const {userDetails, handleChange}=useData({})

  const incrementQty = (item, index) => {
    const originalCartItem = [...itemInCart];

    originalCartItem[index] = { ...item, qty: item.qty + 1 };
    setItemCart(originalCartItem);
  };

  const decrementCount = (item, index) => {
    const originalCartItem = [...itemInCart];
    let obj = { ...item };
    obj = { ...obj, qty: obj.qty - 1 };

    if (obj.qty === 0) {
      originalCartItem.splice(index, 1);
      setItemCart(originalCartItem);
    } else {
      originalCartItem[index] = obj;
      setItemCart(originalCartItem);
    }

    // originalCartItem[index] = obj;
  };

  function handlePlaceOrder(){
    customerDetailPicker(userDetails)
  }
  return (
    <div className="bg-white w-full max-h-[40rem] overflow-y-scroll ">
      <div className="w-full flex justify-center">
        <button
          onClick={() => {
            setCurrentPage("buttonList");
          }}
          className="h-12 mt-1 font-bold w-28 text-white bg-red-400"
        >
          View Menu
        </button>
      </div>
      <div className="mx-14">
        <div className="pt-2   text-gray-800 font-semibold">
          {itemInCart?.map((item, index) => (
            <div key={index}>
              <div key={item.id} className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src={item.imgUrl}
                    alt={item.imgUrl}
                  />
                </div>
                <div className="w-4/12">{item.type}</div>
                <div className="w-2/12"> &#8377;{item.price * item.qty}</div>
                <div className="w-3/12">
                  <div className="w-24 h-10  flex justify-between items-center px-1 ">
                    <button
                      className="text-red-600"
                      onClick={() => {
                        decrementCount(item, index);
                      }}
                    >
                      <FaCircleMinus size={21} />
                    </button>
                    <span>{item.qty}</span>
                    <button
                      className="text-green-600"
                      onClick={() => {
                        incrementQty(item, index);
                      }}
                    >
                      <IoMdAddCircle size={25} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>
          ))}
        </div>
        {itemInCart.length > 0 && (
          <div className="font-bold text-gray-800">
            <div className="w-full flex items-center h-12 py-1 ">
              <div className="w-3/12"></div>
              <div className="w-4/12 ">Total Amount </div>
              <div className="w-2/12"> &#8377;{totalPriceOfItemInCArt}</div>
              <div className="w-3/12"></div>
            </div>
            {/* <div className="w-full bg-gray-200 h-[2px] " /> */}
          </div>
        )}

        <div className="  pt-4 pb-5">
          <div className="w-full flex ">
            <div className="w-1/2">
              <Input label="Pickup Date" type={"date"} name={"pickupDate"} handleChange={handleChange}/>
            </div>
            <div className="w-1/2 pl-4">
              {/* <Input label="Pickup Time" type="select" /> */}
              <Select label="Pickup Time" data={PICKUP_TIME} name="pickupTime" handleChange={handleChange}/>
            </div>
          </div>
        </div>
        <div>
          <Input label="Name" name="name" handleChange={handleChange} />
        </div>
        <div className="flex items-center pt-4">
          <div className="w-3/12">
            <Select label="Country Code" data={COUNTRY_CODE} />
          </div>
          <div className="w-9/12 pl-4">
            <Input label="Mobile Number" name="mobileNumber" handleChange={handleChange}/>
          </div>
        </div>
        <div className=" pt-4">
          <Input label="Address" name="address" handleChange={handleChange} />
        </div>
        <div className="flex justify-center pt-4 pb-4">
          <button className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummeryAndCustomerDetails;
