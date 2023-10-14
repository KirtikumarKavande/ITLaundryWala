import React from "react";
import useGetDataFromDB from "../hooks/useGetDataFromDb";
import toast from "react-hot-toast";

const SendOtp = async () => {
  const getDataFromDB=useGetDataFromDB()
  const otpRes = await getDataFromDB('otpmail');
  return otpRes;
 
};

export default SendOtp;
