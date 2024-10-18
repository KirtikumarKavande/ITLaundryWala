import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBarcodePrinting } from "../../store/barcodePrintingData";
import usePostsDataToDb from "../hooks/usePostsDataToDb.hook";

const InvoiceBarcode = () => {
  const navigate = useNavigate();
  const postDataToDB = usePostsDataToDb();
  const clothDetails = useSelector((store) => store.clothDetails);
  console.log("check first",clothDetails)

  const customerInfo = useSelector((store) => store.existingUserDetails);
  const dispatch = useDispatch();

  const handleInvoice = async () => {
    const res = await postDataToDB("orderdetails", clothDetails);
    if (res.success) {
      // Store the necessary data in localStorage
      localStorage.setItem('invoiceData', JSON.stringify({
        clothDetails,
        customerInfo
      }));
      
      // Open invoice in a new tab
      window.open('/invoice', '_blank');
    }
  };

  const printBarCode = async () => {
    const transformedData = [];
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
          W_Type: `${clothDetails?.washType?.key}`,
          C_Type: `${item?.identifier || item.cloth} ${i}/${item.quantity}`,
        });
      }
    });

    transformedData.push({
      Qty: `${count}/${totalItems}`,
      Cus_ID: `${customerInfo.customerId}`,
      W_Type: `${clothDetails?.washType?.key}`,
      Amount: `${clothDetails?.amountForPerPeice > 0 ? clothDetails?.amountForPerPeice : clothDetails?.amountForPerKg}`,
    });
    console.log(transformedData);
    dispatch(addBarcodePrinting(transformedData));
    navigate('/barcode');
  
  };

  return (
    <div className="flex justify-center space-x-12 md:space-x-6 pb-5">
      <button
        onClick={handleInvoice}
        className="text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded"
      >
        INVOICE
      </button>
      <button
        onClick={printBarCode}
        className="text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
      >
        BARCODE
      </button>
    </div>
  );
};

export default InvoiceBarcode;