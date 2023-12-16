import React from 'react'

const WashTypeButtons = () => {
  return (
    <div>

        <div className="space-y-6 flex-col   w-full mx-auto bg-[#F8F7F5] pb-16 pt-6 ">
          <button className=" w-[25vw] h-12 block mx-auto border border-black  rounded-full text-black  space-x-7 tracking-wide">
            {" "}
            <span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/9495/9495485.png?ga=GA1.1.2084681908.1701424054"
                className="h-10 w-12  inline"
                alt=""
              />
            </span>{" "}
            <span>WASH AND FOLD</span> <span> &#8377;69.00/kg</span>
          </button>
  
          
        </div>
    </div>
  )
}

export default WashTypeButtons