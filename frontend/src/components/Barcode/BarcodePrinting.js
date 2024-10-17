import React, { useEffect } from "react";
import { useSelector } from "react-redux";
 
const BarcodePrinting = () => {
  const { barcodePrintingData } = useSelector((store) => store.BarcodePrinting);
 
  useEffect(() => {
    window.print();
  }, []);
  return (
    <div className="w-[150px] px-1  h-full font-semibold ">
      {barcodePrintingData.length > 0 &&
        barcodePrintingData?.map((item,index) => (
          <div className="" key={index}>
            {item?.C_Type && (
              <div>
                <p className="text-right">
                  <span>Qty</span> <span>{item.Qty}</span>
                </p>
                <p>
                  <span>Cus ID: </span>
                  <span>{item.Cus_ID} </span>
                </p>
                <p>
                  {" "}
                  <span>W_Type :</span> <span>{item.W_Type}</span>
                </p>
                <p>
                  <span> C_T:</span><span>{item.C_Type}</span>
                </p>
                <div> - - - - - - - - - - - - - - </div>
              </div>
            )}
 
            {item?.Amount && (
              <div >
                <div> -  </div>
                <div> -  </div>
                <div className=" leading-tight">
                <p className="text-right">
                  <span>Qty</span> <span>{item.Qty}</span>
                </p>
                <p>
                  <span>Cus ID : </span> <span>{item.Cus_ID}</span>
                </p>
                <p>
                  <span> W_Type :</span> <span>{item.W_Type}</span>
                </p>
                <p>
                  <span> Amount :</span> <span>{item.Amount}</span>
                </p>
                </div>
              </div>
             
            )}
          </div>
        ))}
    </div>
  );
};
 
export default BarcodePrinting;