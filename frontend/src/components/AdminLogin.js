import React, { useRef, useState } from "react";
import usepostDataToDb from "./hooks/usepostDataToDb";
import toast from "react-hot-toast";
import OtpModel from "./utilities/Otpmodel";

const AdminLogin = () => {
  const [isShowOtpModel, setIsShowOtpModel] = useState(false);
  console.log(">>>>",isShowOtpModel)
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const res = await usepostDataToDb("login", obj);
      if (res.success) {
        setIsShowOtpModel(!isShowOtpModel);
      } else {
        toast.error(res.message);
      }
    } catch (err) {}
  };
  return (
    <div className="mt-16">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex  flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
          <div className="w-full mt-20 bg-white  rounded-lg shadow dark:border md:mt-11 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
              {isShowOtpModel && (<OtpModel setIsShowOtpModel={setIsShowOtpModel} isShowOtpModel={isShowOtpModel} />)}

              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                SIGN IN
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    ref={emailRef}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    ref={passwordRef}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AdminLogin;
