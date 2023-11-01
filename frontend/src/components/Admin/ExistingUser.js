import React, { useEffect, useState } from "react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import { useSelector } from "react-redux";
import WashType from "../Clothes/WashType";
import ClothType from "../Clothes/ClothType";

import CardContainer from "../utilities/Card";

const ExistingUser = () => {
  const userDetails = useSelector((store) => store?.userDetails?.userData);
  const [TypeofSelectedWashType,setTypeofSelectedWashType]=useState()

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
          <form className="px-6 md:w-[600px] ">
            <div className="w-full  flex  ">
              <div className="w-1/3 md:w-5/12   md:flex md:items-center">
                <label className="font-serif md:w-6/12  md:px-2 ">
                  Customer ID
                </label>

                <div className="md:w-6/12">
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

              <div className="w-2/3 md:w-7/12  md:flex pl-2 md:pl-0 md:items-center">
                <label className="font-serif md:w-2/12">Name</label>
                <div>
                  <input
                    className="bg-gray-200 w-full md:w-9/12    appearance-none border-2 border-gray-200 rounded  py-2 px-2  text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
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

            <div className="w-full  mt-2 md:flex md:mt-3 md:items-center">
              <label className="font-serif md:w-1/6 md:mx-3">Mobile Num</label>

              <input
                className={`bg-gray-200 appearance-none border-2 md:w-[329px]  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black  ${
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

            <div className="w-full mt-2 md:flex md:mt-3 md:items-center">
              <label className="font-serif md:w-1/6 md:mx-3">Address</label>

              <input
                className="bg-gray-200 appearance-none border-2 md:w-[329px]  border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black"
                id="inline-full-name"
                type="text"
                name="address"
                value={formData?.address}
                onChange={(e) => {
                  setFormData({ ...formData, address: e.target.value });
                }}
              />
            </div>
           
          </form>
        </div>
          <WashType setTypeofSelectedWashType={setTypeofSelectedWashType}/>
            <ClothType TypeofSelectedWashType={TypeofSelectedWashType} />

      
      </CardContainer>
    </div>
  );
};

export default ExistingUser;
