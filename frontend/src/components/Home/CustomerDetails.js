import React, { useContext } from "react";
import Select from "./UI/Select";
import Input from "./UI/Input";
import { COUNTRY_CODE, PICKUP_TIME } from "../utilities/constant";
import CustomerSelfContactDetails from "../../context/customerSelfContactDetails/customerSelfContactDetails";
import useData from "../hooks/useData";

const CustomerDetails = ({ setCurrentPage }) => {
  const {customerDetailPicker}=useContext(CustomerSelfContactDetails)

  const {userDetails, handleChange}=useData({})

  function handleContactDetails(){
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
      <div className="px-14">

        <div className="  pt-4 pb-5">
          <div className="w-full flex ">
            <div className="w-1/2">
              <Input label="Pickup Date" type={"date"}  name={"pickupDate"} handleChange={handleChange}/>
            </div>
            <div className="w-1/2 pl-4">
              {/* <Input label="Pickup Time" type="select" /> */}
              <Select label="Pickup Time" data={PICKUP_TIME} name={"pickupTime"} handleChange={handleChange} />
            </div>
          </div>
        </div>
        <div>
          <Input label="Name" name={"name"} handleChange={handleChange}  />
        </div>
        <div className="flex items-center pt-4">
          <div className="w-3/12">
            <Select label="Country Code" data={COUNTRY_CODE}  />
          </div>
          <div className="w-9/12 pl-4">
            <Input label="Mobile Number" name={"mobileNumber"} handleChange={handleChange} />
          </div>
        </div>
        <div className=" pt-4">
          <Input label="Address" name={"address"} handleChange={handleChange} />
        </div>
        <div className="flex justify-center pt-4 pb-4">
          <button className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500" onClick={handleContactDetails}>
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
