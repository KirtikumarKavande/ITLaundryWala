// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";

import { useState } from "react";
import Modal from "./UI/Modal";
import DryCleaning from "./method/DryCleaning";
import OrderSummeryAndCustomerDetails from "./OrderSummeryAndCustomerDetails";
import WashTypeButtons from "./SelectWashType/WashTypeButtons";

const Home = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  const [currentPage, setCurrentPage] = useState("washAndFoldButton");
  console.log("currentPage",currentPage)

  return (
    <>
      {/* <OrderSummeryAndCustomerDetails/> */}
      {currentPage === "washAndFoldButton" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          headline="Please Select Wash Type"
        >
          <WashTypeButtons setCurrentPage={setCurrentPage} />
        </Modal>
      )}
      {

        currentPage==="orderSummeryAndCustomerDetails" &&(
          <Modal
          isOpen={open}
          setIsOpen={setOpen}
          headline="Please Schedule Your Order"
        >
          <OrderSummeryAndCustomerDetails setCurrentPage={setCurrentPage} />
        </Modal>
        )
      }

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
