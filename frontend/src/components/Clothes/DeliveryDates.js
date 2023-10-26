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
      <div className="flex ml-[17vw] ">
        <div className="md:flex md:items-center mt-1 md:mb-4">
          <div className="md:w-1/3">
            <label
              className="`block text-black font-bold ml-10 md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-full-name"
            >
              PICKUP:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml-8 text-center font-bold w-32 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="name"
              value={`${currentDate.getDate()}-${
                currentDate.getMonth() + 1
              }-${currentDate.getFullYear()}`}
            />
          </div>
        </div>
        <div className=" ml-7 md:flex md:items-center md:mb-3  ">
          <div className="">
            <label
              className="block  text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              DELIVERY:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml- text-center font-bold w-32 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="name"
              onChange={ChangeDeliveryDate}
              value={deliveryDate}
            />
          </div>
        </div>

        <div className="md:flex md:items-center mt-1 md:mb-4">
          <div className="md:w-1/3">
            <label
              className="`block text-black font-bold ml-10 md:text-right mb-1 md:mb-0 pr-4 "
              for="inline-full-name"
            >
              Amount:
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml-8 text-center font-bold w-32 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              name="name"
            />
          </div>
        </div>
      </div>

      <div className=" flex ml-[33.5vw]  space-x-44 py-7">
        <button className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-3 px-6 border border-blue-500 hover:border-transparent rounded">
          Invoice
        </button>
        <button className="bg-white hover:bg-blue-500 text-black font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Barcode
        </button>
      </div>
    </div>
  );
};

export default DeliveryDates;
