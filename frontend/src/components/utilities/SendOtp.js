import useGetDataFromDB from "../hooks/useGetDataFromDb";

const SendOtp = async () => {
  const getDataFromDB=useGetDataFromDB()
  const otpRes = await getDataFromDB('otpmail');
  return otpRes;
 
};

export default SendOtp;
