
import { useState } from "react";
import Modal from "./UI/Modal";
import OrderSummeryAndCustomerDetails from "./OrderSummeryAndCustomerDetails";
import WashTypeButtons from "./SelectWashType/WashTypeButtons";
import CustomerDetails from "./CustomerDetails";
import PerPieceClothOrderItem from "./UI/perPeiceClothOrderItem";
import {
  DryCleaningButtonOptions,
  expressLaundryButtonOptions,
  houseHoldButtonsOptions,
  pressHoldButtonsOptions,
  products,
} from "../utilities/constant";
import { dryCleaningMenu } from "./Pricing/DryCleaningMenu";
import { Household } from "./Pricing/HouseHold";
import { Press } from "./Pricing/Press";
import { expressLaundry } from "./Pricing/ExpressLaundry";
import Slider from "./UI/Carousel/Slider";
import ProductCard from "./UI/ProductCard";

const Home = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  const [currentPage, setCurrentPage] = useState("buttonList");
  console.log("currentPage", currentPage);

  
  return (
    <>
      {/* <OrderSummeryAndCustomerDetails/> */}
      {currentPage === "buttonList" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          headline="Please Select Wash Type"
        >
          <WashTypeButtons setCurrentPage={setCurrentPage} />
        </Modal>
      )}
      {currentPage === "customerDetails" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <CustomerDetails setCurrentPage={setCurrentPage} />
        </Modal>
      )}

      {currentPage === "dryCleaning" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={DryCleaningButtonOptions}
            washType={dryCleaningMenu}
            title={"Dry Cleaning"}
          />
        </Modal>
      )}
      {currentPage === "houseHold" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={houseHoldButtonsOptions}
            washType={Household}
            title={"Household"}
          />
        </Modal>
      )}
      {currentPage === "press" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={pressHoldButtonsOptions}
            washType={Press}
            title={"Steam Iron"}
          />
        </Modal>
      )}

      {currentPage === "expressLaundry" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <PerPieceClothOrderItem
            setCurrentPage={setCurrentPage}
            buttonNames={expressLaundryButtonOptions}
            washType={expressLaundry}
            title={"Express Charges Included"}
          />
        </Modal>
      )}

      {currentPage === "orderDetailsAndCustomerDetails" && (
        <Modal
          isOpen={open}
          setIsOpen={setOpen}
          setCurrentPage={setCurrentPage}
          headline="Please Schedule Your Order"
        >
          <OrderSummeryAndCustomerDetails setCurrentPage={setCurrentPage} />
        </Modal>
      )}

      <div className="w-full ">
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
        {/* <div  className=" h-[415px] w-[1350px] mx-auto border border-red-500  "></div> */}
        {/* <img src="./banner.jpg" alt="" className=" h-[430px]  mx-auto  " /> */}
        <Slider />
      </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} setOpen={setOpen} setCurrentPage={setCurrentPage}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
