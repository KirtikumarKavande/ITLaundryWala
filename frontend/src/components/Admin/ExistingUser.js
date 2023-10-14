import React from "react";

const ExistingUser = () => {
  return (
    <div>
      <form className="w-full -ml-7 max-w-lg mt-24  ">

        <div className="flex ">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-black font-bold ml-12 md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              CustomerID
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 ml-16 appearance-none border-2 border-gray-200 rounded w-24 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
             
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6 -ml-10">
          <div className="">
            <label
              className="block  text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
             Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 w-44 appearance-none border-2 border-gray-200 rounded  py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
             
            />
          </div>
        </div>

        </div>


        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Mobile Number
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
             
            />
          </div>
        </div>


        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block text-black font-bold md:text-right mb-1 md:mb-0 pr-4"
              for="inline-full-name"
            >
              Address
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
             
            />
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ExistingUser;
