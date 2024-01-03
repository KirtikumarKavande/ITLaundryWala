import React, { useState } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
const Modal = (props) => {
  const { isOpen, setIsOpen, headline } = props;

  // const handleOpen = () => setOpen(!open);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {" "}
      <Transition appear show={isOpen} as={Fragment}>
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
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
                className=""
              >
                <Dialog.Panel className="w-[585px]  transform overflow-hidden  rounded-2xl   text-left align-middle shadow-xl transition-all">
                  <div className="h-14 w-full bg-white">
                    <p className="mx-auto text-center font-bold py-4 text-lg">
                      {/* Please Select Your Wash Type */}
                      {headline}
                    </p>{" "}
                  </div>

                  <div className="h-[1px] w-full bg-gray-500 "></div>
                  {props.children}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default Modal;
