import React, { useEffect, useRef } from "react";
import { Dialog, DialogBody } from "@material-tailwind/react";

export function OtpModel(props) {
  const { setIsShowOtpModel, isShowOtpModel } = props;

  //   const [open, setOpen] = React.useState(!isShowOtpModel);

  const handleOpen = () => setIsShowOtpModel(!isShowOtpModel);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleInputChange = (e, index) => {
    if (e.target.value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current.focus();
    }
  };

  return (
    <>
      <Dialog open={isShowOtpModel} handler={handleOpen}>
        <DialogBody divider>
          <div className="relative flex  flex-col justify-center overflow-hidden  bg-white ">
            <div className="relative bg-white pt-10 pb-9 shadow-xl mx-auto w-full  rounded-2xl">
              <div className="mx-auto flex w-full  flex-col space-y-16">
                <div className="flex flex-col items-center justify-center text-center space-y-2">
                  <div className="font-bold text-3xl text-black">
                    <p>Email Verification</p>
                  </div>
                  <div className="flex flex-row text-sm font-medium text-black">
                    <p>We have sent a code to your email </p>
                  </div>
                </div>

                <div>
                  <form action="" method="post">
                    <div className="flex flex-col space-y-16">
                      <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                        {inputRefs.map((ref, index) => (
                          <div className="w-16 h-16" key={index}>
                            <input
                              ref={ref}
                              className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                              type="text"
                              name=""
                              id=""
                              maxLength={1}
                              onChange={(e) => handleInputChange(e, index)}
                            />
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col space-y-5">
                        <div>
                          <button className="flex flex-row items-center justify-center text-center w-52 mx-auto border rounded-xl outline-none py-5 bg-orange-500 border-none text-white text-sm shadow-sm">
                            Verify Account
                          </button>
                        </div>

                        <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                          <p>Didn't recieve code?</p>{" "}
                          <a
                            className="flex flex-row items-center text-blue-600"
                            href="http://"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Resend
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
export default OtpModel;
