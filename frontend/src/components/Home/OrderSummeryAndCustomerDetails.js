import React, { useState } from "react";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { COUNTRY_CODE, PICKUP_TIME } from "../utilities/constant";
import Modal from "./UI/Modal";
import { IoMdAddCircle } from "react-icons/io";
import { FaCircleMinus } from "react-icons/fa6";

const OrderSummeryAndCustomerDetails = ({ setCurrentPage }) => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  return (
    // <Modal isOpen={true} setIsOpen={setOpen} headline="Please Schedule Your Order">

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
          <div>
            <div className="w-full flex items-center  py-1">
              <div className="w-3/12">
                <img
                  className="h-16 w-16"
                  src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                  alt="dry cleaning"
                />
              </div>
              <div className="w-4/12">Kurta medium</div>
              <div className="w-2/12"> &#8377;79.00</div>
              <div className="w-3/12">
                <div className="w-24 h-10  flex justify-between items-center px-1 ">
                  <button className="text-red-600">
                    <FaCircleMinus size={21} />
                  </button>
                  <span>{10}</span>
                  <button className="text-green-600">
                    <IoMdAddCircle size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] " />
          </div>
          <div>
            <div className="w-full flex items-center  py-1">
              <div className="w-3/12">
                <img
                  className="h-16 w-16"
                  src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                  alt="dry cleaning"
                />
              </div>
              <div className="w-4/12">Kurta medium</div>
              <div className="w-2/12"> &#8377;79.00</div>
              <div className="w-3/12">
                <div className="w-24 h-10  flex justify-between items-center px-1 ">
                  <button className="text-red-600">
                    <FaCircleMinus size={21} />
                  </button>
                  <span>{10}</span>
                  <button className="text-green-600">
                    <IoMdAddCircle size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] " />
          </div>{" "}
          <div>
            <div className="w-full flex items-center  py-1">
              <div className="w-3/12">
                <img
                  className="h-16 w-16"
                  src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                  alt="dry cleaning"
                />
              </div>
              <div className="w-4/12">Kurta medium</div>
              <div className="w-2/12"> &#8377;79.00</div>
              <div className="w-3/12">
                <div className="w-24 h-10  flex justify-between items-center px-1 ">
                  <button className="text-red-600">
                    <FaCircleMinus size={21} />
                  </button>
                  <span>{10}</span>
                  <button className="text-green-600">
                    <IoMdAddCircle size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] " />
          </div>{" "}
          <div>
            <div className="w-full flex items-center  py-1">
              <div className="w-3/12">
                <img
                  className="h-16 w-16"
                  src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                  alt="dry cleaning"
                />
              </div>
              <div className="w-4/12">Kurta medium</div>
              <div className="w-2/12"> &#8377;79.00</div>
              <div className="w-3/12">
                <div className="w-24 h-10  flex justify-between items-center px-1 ">
                  <button className="text-red-600">
                    <FaCircleMinus size={21} />
                  </button>
                  <span>{10}</span>
                  <button className="text-green-600">
                    <IoMdAddCircle size={25} />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] " />
          </div>
          <div>
            <div className="w-full flex items-center  py-4">
              <div className="w-3/12"></div>
              <div className="w-4/12">Total Amount</div>
              <div className="w-2/12"> &#8377;1000</div>
            </div>
            <div className="w-full bg-gray-200 h-[2px] " />
          </div>
        </div>

        <div className="  pt-4 pb-5">
          <div className="w-full flex ">
            <div className="w-1/2">
              <Input label="Pickup Date" type={"date"} />
            </div>
            <div className="w-1/2 pl-4">
              {/* <Input label="Pickup Time" type="select" /> */}
              <Select label="Pickup Time" data={PICKUP_TIME} />
            </div>
          </div>
        </div>
        <div>
          <Input label="Name" />
        </div>
        <div className="flex items-center pt-4">
          <div className="w-3/12">
            <Select label="Country Code" data={COUNTRY_CODE} />
          </div>
          <div className="w-9/12 pl-4">
            <Input label="Mobile Number" />
          </div>
        </div>
        <div className=" pt-4">
          <Input label="Address" />
        </div>
        <div className="flex justify-center pt-4 pb-4">
          <button className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500">
            Place Order
          </button>
        </div>
      </div>
    </div>
    // </Modal>
  );
};

export default OrderSummeryAndCustomerDetails;
