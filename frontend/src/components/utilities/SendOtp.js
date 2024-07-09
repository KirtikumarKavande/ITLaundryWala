import useGetsDataFromDB from "../hooks/useGetsDataFromDb.hook";

const SendOtp = async () => {
  const getDataFromDB=useGetsDataFromDB()
  const otpRes = await getDataFromDB('otpmail');
  return otpRes;
 
};

export default SendOtp;
