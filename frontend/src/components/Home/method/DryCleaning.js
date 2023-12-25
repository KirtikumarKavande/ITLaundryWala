import React, { useEffect } from "react";
import Modal from "../UI/Modal";
import useGetDataFromDB from "../../hooks/useGetDataFromDb";

const DryCleaning = () => {
  const getDataFromDB = useGetDataFromDB();
  useEffect(() => {
    getDatafromdbFunc();
  }, []);

  const getDatafromdbFunc = async () => {
    const res = await getDataFromDB("drycleaning");
    console.log("drycleaning data", res);
  };
  return (
    <Modal isOpen={true} headline="Please Select Your Cloth Type">
      <div className="bg-white w-full ">
        <div className="mx-14">
          <div className="flex pt-2 space-x-2 justify-center pb-4">
            <button className="w-32 bg-gray-200 h-12 rounded font-bold text-sm ">
              MEN
            </button>
            <button className="w-32 bg-gray-200 h-12 rounded font-bold text-sm">
              WOMEN
            </button>
            <button className="w-32 bg-gray-200 h-12 rounded font-bold text-sm">
              SHOES
            </button>
          </div>
          <div className="h-10 w-full flex bg-red-400 text-lg  items-center justify-center  text-white font-medium ">
            Dry Cleaning (per Piece)
          </div>
          <div className="pt-2 h-[30rem] overflow-y-scroll text-gray-800 font-semibold">
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>{" "}
            <div>
              <div className="w-full flex items-center  py-1">
                <div className="w-3/12">
                  <img
                    className="h-16 w-16"
                    src="https://cdn-icons-png.flaticon.com/512/8975/8975255.png?uid=R131201878&ga=GA1.1.2084681908.1701424054"
                    alt="dry cleaning"
                  />
                </div>
                <div className="w-4/12">Kurta medium</div>
                <div className="w-4/12"> &#8377;79.00 / Piece</div>
                <div className="w-1/12">
                  <input type="checkbox" className="h-5 w-5" />
                </div>
              </div>
              <div className="w-full bg-gray-200 h-[2px] " />
            </div>
          </div>

          <div className="text-red-400 font-semibold text-center pt-3 infinite-show-hide">
            FREE PICK & DROP! MINIMUM ORDER Rs. 299.00
          </div>
          <div className="flex justify-center pt-4 pb-4">
            <button className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500">
              Schedule
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default DryCleaning;
