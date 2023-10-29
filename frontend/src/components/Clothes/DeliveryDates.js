import React, { useState } from "react";

const DeliveryDates = () => {
  const currentDate = new Date();

  const [deliveryDate, setDeliveryDate] = useState(
    `${currentDate.getDate() + 2}-${
      currentDate.getMonth() + 1
    }-${currentDate.getFullYear()}`
  );
  console.log();

  //  19/10/2023
  const ChangeDeliveryDate = (e) => {
    setDeliveryDate(e.target.value);
  };
  return (
    <div>
      <div className="w-full flex pt-3 px-5">
        <div className="w-1/3 mb-4">
          <div>
            <label className="font-serif">Pickup</label>
          </div>
          <div>
          <input
              className="bg-gray-200 w-[25vw] appearance-none border-2 border-gray-200 rounded mr-2 py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
              value={`${currentDate.getDate()}-${
                currentDate.getMonth() + 1
              }-${currentDate.getFullYear()}`}
            />
          </div>
        </div>

        <div className="w-1/3 pl-2">
          <div>
            <label className="font-serif">Delivery</label>
          </div>
          <div>
            <input
              className="bg-gray-200 w-full appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
              onChange={ChangeDeliveryDate}
              value={deliveryDate}
            />
          </div>
        </div>


        <div className="w-1/3  pl-2 ml-2">
          <div>
            <label className="font-serif">Amount</label>
          </div>
          <div>
            <input
              className="bg-gray-200  w-[20vw] appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-black "
              id="inline-full-name"
              type="text"
              name="name"
            />
          </div>
        </div>

       
      </div>
      <div className=" flex  justify-center space-x-12 pb-5 ">
        <button className=" text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-6 border border-blue-500 hover:border-transparent rounded">
         INVOICE
        </button>
        <button className="text-sm bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
         BARCODE
        </button>
      </div> 

    
    </div>
  );
};

export default DeliveryDates;
