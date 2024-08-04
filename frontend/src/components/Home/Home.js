
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
  howItWorksSSteps,
  pressHoldButtonsOptions,
  products,
  promises,
} from "../utilities/constant";
import { dryCleaningMenu } from "./Pricing/DryCleaningMenu";
import { Household } from "./Pricing/HouseHold";
import { Press } from "./Pricing/Press";
import { expressLaundry } from "./Pricing/ExpressLaundry";
import Slider from "./UI/Carousel/Slider";
import ProductCard from "./UI/ProductCard";
import WorkflowStep from "./UI/HowItWorksCard";
import OurPromise from "./UI/OurPromise";
import AccordionItem from "./UI/Accordian";
import Footer from "./UI/Footer";


const Home = () => {
  const [open, setOpen] = useState(false);

  function openModal() {
    setOpen(true);
  }
  const accordionItems = [
    {
      title: 'What services do you offer?',
      content: 'We offer a wide range of laundry and dry cleaning services, including wash & fold, shirt service, alterations, and more. Our team is equipped to handle all your fabric care needs with expertise and care.'
    },
    {
      title: 'How does the pick-up and delivery service work?',
      content: 'Our convenient pick-up and delivery service allows you to schedule a time for us to collect your laundry from your doorstep. Once cleaned, we\'ll return your items at a time that suits you. You can easily schedule these services through our website or mobile app.'
    },
    {
      title: 'What are your turnaround times?',
      content: 'Our standard turnaround time is 48 hours for most services. However, we also offer express services for when you need your items back sooner. Same-day service is available for orders placed before 9 AM, and next-day service for orders placed before 5 PM.'
    },
    
  ];

  const [currentPage, setCurrentPage] = useState("buttonList");
  console.log("currentPage", currentPage);
 

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };
  
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
      <div className="font-bold text-3xl pl-7 pt-5 pb-2">Pricing and Services</div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} setOpen={setOpen} setCurrentPage={setCurrentPage}/>
          ))}
        </div>
      </div>
      <div className="font-bold text-3xl pl-7 pt-5 ">How it Works</div>

      <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {howItWorksSSteps.map((step) => (
          <WorkflowStep key={step.step} {...step} />
        ))}
      </div>
    </div>
    <div className="font-bold text-3xl pl-7 pt-5 ">Our Promises</div>

    <div className="container mx-auto  py-8">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          {promises.map((feature, index) => (
            <OurPromise key={index} {...feature} />
          ))}
        </div>
        <div className="lg:w-1/2 flex justify-center ">
          <img 
            src="https://www.meralaundry.in/assets/web/images/sideimg.jpg" 
            alt="Laundry service illustration" 
            className="w-full max-w-sm h-auto object-contain rounded-lg "
          />
        </div>
      </div>
    </div>
    <div className="font-bold text-3xl pl-7 pt-5 pb-4 ">Frequently Asked Question's</div>


    <div className=" mx-12 rounded-lg shadow-lg overflow-hidden ">
      {accordionItems.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
    <Footer/>
    </>
  );
};

export default Home;
