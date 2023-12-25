import React from "react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

// import {} from ""

const InvoiceBarcode = () => {
const navigate=useNavigate()
  const postDataToDB = usePostDataToDb();
  const clothDetails = useSelector((store) => store.clothDetails);
  const customerInfo=useSelector((store) => store.existingUserDetails);

  const handleInvoice = async () => {
    const res = await postDataToDB("orderdetails", clothDetails);
    if(res.success)
    {
      navigate('/invoice')
    }
  };


  const printBarCode=async()=>{

    const transformedData = [];

// Generating entries based on clothType
const totalItems = clothDetails.clothType.reduce(
  (total, item) => total + parseInt(item.quantity),
  0
);

let count = 0;
clothDetails.clothType.forEach((item, index) => {
  for (let i = 1; i <= parseInt(item.quantity); i++) {
    count++;
    transformedData.push({
      Qty: `${count}/${totalItems}`,
      Cus_ID: `${customerInfo.customerId}`,
      W_Type: `${clothDetails?.washType?.item}`,
      C_Type: `${item.cloth} ${i}/${item.quantity}`
    });
  }
});

// Adding the last entry based on washType
transformedData.push({
  Qty:  `${count}/${totalItems}`,
  Cus_ID: `${customerInfo.customerId}`,
  W_Type:`${clothDetails?.washType?.item}`,
  Amount: "200rs"
});

console.log(transformedData);
   await postDataToDB('generate-and-print',transformedData)
  }
  return (
    <div className=" flex  justify-center space-x-12 md:space-x-6  pb-5 ">
      <button
        onClick={handleInvoice}
        className=" text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
      >
        INVOICE
      </button>
      <button onClick={printBarCode} className="text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        BARCODE
      </button>
    </div>
  );
};

export default InvoiceBarcode;
