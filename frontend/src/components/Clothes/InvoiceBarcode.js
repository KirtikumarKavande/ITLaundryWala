import React from "react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import { useSelector } from "react-redux";
import {useNavigate} from "react-router-dom"

// import {} from ""

const InvoiceBarcode = () => {
  const postDataToDB = usePostDataToDb();
  const clothDetails = useSelector((store) => store.clothDetails);
  const navigate=useNavigate();

  const handleInvoice = async () => {
    const res = await postDataToDB("orderdetails", clothDetails);
    if(res.success)
    {
      navigate('/invoice')
    }
  };
  return (
    <div className=" flex  justify-center space-x-12 md:space-x-6  pb-5 ">
      <button
        onClick={handleInvoice}
        className=" text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
      >
        INVOICE
      </button>
      <button className="text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        BARCODE
      </button>
    </div>
  );
};

export default InvoiceBarcode;
