import React from "react";

const Home = () => {

  return (
    <>
      <div className="w-full">
        <div className="h-[68px]  bg-[#202124] flex items-center justify-center w-full">
          <div className="text-[#fff] font-bold text-lg ">
            LET'S START YOUR ORDER
          </div>
          <button className="text-white ml-4 bg-[#e4002b] py-3 text-center font-medium rounded-[1.4rem] text-[0.9rem] w-28 md:min-w-[10.4rem]">
            Start Order
          </button>
        </div>
      </div>

      <div className="w-full">
        {" "}
        <img src="/image5.jpg" alt="" className=" h-[73vh] mx-auto w-full " />
      </div>
    </>
  );
};

export default Home;
