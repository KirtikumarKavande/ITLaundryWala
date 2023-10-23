import React, { useEffect, useState } from "react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import { useSelector } from "react-redux";
import WashType from "../Clothes/WashType";
import ClothType from "../Clothes/ClothType";
import { AiOutlineHome } from "react-icons/ai";
import { GoPeople } from "react-icons/go";
import { MdGroupAdd } from "react-icons/md";
import { FaPeopleArrows } from "react-icons/fa6";
import { MdWorkHistory } from "react-icons/md";
import { Link } from "react-router-dom";
import CardContainer from "../utilities/Card";

const ExistingUser = () => {
  const userDetails = useSelector((store) => store?.userDetails?.userData);

  const postDataToDb = usePostDataToDb();
  const [isshowError, setIsShowError] = useState(false);

  const [formData, setFormData] = useState({
    customerId: null,
    name: "",
    mobileNumber: null,
    address: "",
  });

  useEffect(() => {
    setFormData(userDetails);
  }, []);
  const handleCustomerId = async (e) => {
    let customerDetails;
    if (e.keyCode === 13) {
      if (formData.customerId) {
        customerDetails = { customerId: +e.target.value };
      } else {
        customerDetails = { mobileNumber: +e.target.value };
      }
      try {
        const res = await postDataToDb("userdetails", customerDetails);
        if (res.success) {
          setFormData(res.message);
        } else {
          setIsShowError(true);
        }
      } catch (err) {}
    }

    console.log(customerDetails);
  };

  return (
    <div className="bg-blue-700  py-10  ">
<CardContainer>



</CardContainer>

      {/* <form className="  -ml-8 w-full md:-ml-7 max-w-lg mt-40 md:mt-0  ">
        <div className="flex ">
          <div className="md:flex md:items-center mt-1 md:mb-3">
            <div className="md:w-1/3">
              <label
                className="`block text-black font-bold ml-16 md:text-right mb-1 md:mb-0 pr-4 "
                for="inline-full-name"
              >
                CustomerID
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className={`bg-gray-200 ml-16 appearance-none border-2 border-gray-200 rounded w-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  ${
                  isshowError
                    ? "border border-red-900 focus:border-red-600"
                    : ""
                }`}
                id="inline-full-name"
                type="text"
                onChange={(e) => {
                  setFormData({ ...formData, customerId: e.target.value });
                }}
                onKeyDown={handleCustomerId}
                name="customerId"
                value={formData?.customerId}
              />
            </div>
          </div>
          <div className=" ml-7 md:flex md:items-center md:mb-3 md:-ml-14">
            <div className="">
              <label
                className="block  text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="inline-full-name"
              >
                Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 w-44 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="name"
                value={formData?.name}
                onChange={(e) => {
                  setFormData({ ...formData, name: e.target.value });
                }}
              />
            </div>
          </div>
        </div>

        <div className="md:flex md:items-center ml-16 md:ml-0 mt-2 md:mt-0 md:mb-3">
          <div className="md:w-1/3">
            <label
              className="block text-black font-bold md:text-right mb-1 md:mb-0 md:pr-4"
              for="inline-full-name"
            >
              Mobile Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500  ${
                isshowError ? "border border-red-900 focus:border-red-600" : ""
              }`}
              id="inline-full-name"
              type="text"
              onKeyDown={handleCustomerId}
              name="mobileNumber"
              maxLength={10}
              value={formData?.mobileNumber}
              onChange={(e) => {
                setFormData({ ...formData, mobileNumber: e.target.value });
              }}
            />
          </div>
        </div>

        <div className="md:flex md:items-center ml-16 md:ml-0 mt-2 md:mt-0 md:mb-3">
          <div className="md:w-1/3">
            <label
              className="block text-black font-bold md:text-right mb-1 md:mb-0 md:pr-4"
              for="inline-full-name"
            >
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 "
              id="inline-full-name"
              type="text"
              name="address"
              value={formData?.address}
              onChange={(e) => {
                setFormData({ ...formData, address: e.target.value });
              }}
            />
          </div>
        </div>
      </form>
      <WashType />
      <ClothType /> */}
    </div>
  );
};

export default ExistingUser;
