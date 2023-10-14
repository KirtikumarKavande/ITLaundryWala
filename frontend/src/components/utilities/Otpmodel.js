import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import usePostDataToDb from "../hooks/usePostDataToDb";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SendOtp from "./SendOtp";
import { useDispatch, useSelector } from "react-redux";
import { userStatus } from "../../store/userSlice";

export function OtpModel(props) {
  const postDatatoDb = usePostDataToDb();
  const dispatch = useDispatch();
  const token = useSelector((store) => store.user.token);
  const navigate = useNavigate();
  const [getOtp, setGetOtp] = useState({});

  const { setIsShowOtpModel, isShowOtpModel } = props;

  const inputRef0 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();
  const inputRef3 = useRef();
  console.log(
    inputRef0.current?.value +
      inputRef1.current?.value +
      inputRef2.current?.value +
      inputRef3.current?.value
  );

  const array = [inputRef0, inputRef1, inputRef2, inputRef3];

  const handleChange = (e, item, index) => {
    const otpobj = {
      [index]: e.target.value,
    };
    setGetOtp({ ...getOtp, ...otpobj });

    console.log("state", e.target.value);

    if (e.target.value && index < array.length - 1) {
      array[index + 1].current.focus();
    }
  };

  function closeModal() {
    setIsShowOtpModel(false);
  }
  console.log("good to go", getOtp);

  const handleOtpsubmit = async (e) => {
    e.preventDefault();
    let sum = 0;
    const keys = Object.keys(getOtp);
    keys.forEach((key, index) => {
      sum = sum + getOtp[key];
    });
    const res = await postDatatoDb("otp", { otp: Number(sum) });
    if (res.success) {
      toast.success(res.message);

      localStorage.setItem("jwtToken", token);

      dispatch(userStatus("user"));
      localStorage.setItem("activeUser", "user");
      navigate("/admin");
    } else {
      toast.error(res.message);
    }

    console.log("sum", Number({ otp: sum }));
  };
  const resendOTP = async () => {
    inputRef0.current.value = "";
    inputRef1.current.value = "";
    inputRef2.current.value = "";
    inputRef3.current.value = "";
    const resotp = await SendOtp();
    try {
      if (resotp) {
        toast.success(resotp.message);
      }
    } catch (err) {
      toast.error(resotp.err);
    }
  };

  return (
    <>
      <Transition appear show={isShowOtpModel} as={Fragment}>
        <Dialog as="div" className="relative z-10 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto mt-20 mr-1">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="mt-2">
                    <div className="container mx-auto">
                      <div className="max-w-sm mx-auto md:max-w-lg">
                        <div className="w-full">
                          <div className="bg-white h-64 py-3 rounded text-center">
                            <h1 className="text-2xl font-bold">
                              OTP Verification
                            </h1>
                            <div className="flex flex-col mt-4">
                              <span>Enter OTP received on your E-mail</span>
                            </div>
                            <form onSubmit={handleOtpsubmit}>
                              <div
                                id="otp"
                                className="flex flex-row justify-center text-center px-2 mt-5"
                              >
                                {array.map((item, index) => {
                                  return (
                                    <input
                                      className="m-2 border h-10 w-10 text-center form-control rounded"
                                      maxLength={1}
                                      ref={item}
                                      onChange={(e) => {
                                        handleChange(e, item, index);
                                      }}
                                      key={index}
                                    />
                                  );
                                })}
                              </div>

                              <button className="flex mt-6 flex-row items-center justify-center text-center w-40 mx-auto border rounded-xl outline-none py-3 bg-orange-500 border-none text-white text-sm shadow-sm">
                                Verify Account
                              </button>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center text-center mt-2">
                    <button
                      onClick={resendOTP}
                      className="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"
                    >
                      <span className="font-bold">Resend OTP</span>
                      <i className="bx bx-caret-right ml-1"></i>
                    </button>
                  </div>

                  <div className="mt-4"></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
export default OtpModel;
