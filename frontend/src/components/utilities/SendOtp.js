import React from "react";
import usegetDataFromDB from "../hooks/usegetDataFromDb";
import toast from "react-hot-toast";

const SendOtp = async () => {
  const otpRes = await usegetDataFromDB("otpmail");
  return otpRes;
  // if (otpRes.success) {
  //  return toast.success(otpRes.message);
  // }
};

export default SendOtp;
