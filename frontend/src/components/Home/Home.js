// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

import { useState } from "react";
import Modal from "./UI/Modal";
import Input from "./UI/Input";
import Select from "./UI/Select";
import { COUNTRY_CODE, PICKUP_TIME } from "../utilities/constant";

const Home = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }

  return (
    <>
      <Modal isOpen={open} setIsOpen={setOpen} headline="Please Schedule Your Order">
        {/* <div className="space-y-6 flex-col   w-full mx-auto bg-[#F8F7F5] pb-16 pt-6 ">
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
        </div> */}
        <div className="bg-white w-ful ">
          <div className="mx-14">
            <div className="  pt-4 pb-5">
              <div className="w-full flex ">
                <div className="w-1/2">
                  <Input label="Pickup Date" type={"date"} />
                </div>
                <div className="w-1/2 pl-4">
                  {/* <Input label="Pickup Time" type="select" /> */}
                  <Select  label="Pickup Time" data={PICKUP_TIME}/>
                </div>
              </div>
            </div>
            <div>
              <Input label="Name" />
            </div>
            <div className="flex items-center pt-4">
              <div className="w-3/12">
                  <Select  label="Country Code" data={COUNTRY_CODE}/>

              </div>
              <div className="w-9/12 pl-4">
                <Input label="Mobile Number" />
              </div>
            </div>
            <div className=" pt-4">
              <Input label="Address" />
            </div>
            <div className="flex justify-center pt-4 pb-4">
              <button className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500">Place Order</button>
            </div>
          </div>
        </div>
      </Modal>

      <div className="w-full">
        <div className="h-[68px]  bg-[#202124] flex items-center justify-center w-full">
          <div className="text-[#fff] font-bold text-lg ">
            LET'S START YOUR ORDER
          </div>
          <button
            onClick={openModal}
            variant="gradient"
            className="text-white ml-4 bg-[#e4002b] py-3 text-center font-medium rounded-[1.4rem] text-[0.9rem] w-28 md:min-w-[10.4rem]"
          >
            Start Order
          </button>
        </div>
      </div>

      <div className="w-full">
        {" "}
        <img src="/image5.jpg" alt="" className=" h-[73vh] mx-auto w-full " />
      </div>
    </>
  );
};

export default Home;
