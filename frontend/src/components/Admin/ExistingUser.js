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
    <div className="bg-blue-700   ">
      <CardContainer>
        <div className="w-full">
          <form className="px-6">
            <div className="w-full flex ">
              <div className="w-1/3">
                <div>
                  <label>CustomerId</label>
                </div>
                <div>
                  <input
                    className={`bg-gray-200  appearance-none border-2 border-gray-200 rounded w-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black  ${
                      isshowError
                        ? "border border-red-900 focus:border-red-600"
                        : ""
                    }`}
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

              <div className="w-2/3 pl-2">
                <div>
                  <label>Name</label>
                </div>
                <div>
                  <input
                    className="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
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

            <div className="w-full mt-2  md:mt-3">
              <div>
                <label>Mobile Num</label>
                <div>
                  <input
                    className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black  ${
                      isshowError
                        ? "border border-red-900 focus:border-red-600"
                        : ""
                    }`}
                    id="inline-full-name"
                    type="text"
                    onKeyDown={handleCustomerId}
                    name="mobileNumber"
                    maxLength={10}
                    value={formData?.mobileNumber}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        mobileNumber: e.target.value,
                      });
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="w-full mt-2 md:mt-3">
              <div>
                <label>Address</label>
                <div>
                  <input
                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
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
            </div>
          </form>
        </div>

        

        <WashType />
        <ClothType />
      </CardContainer>
    </div>
  );
};

export default ExistingUser;
