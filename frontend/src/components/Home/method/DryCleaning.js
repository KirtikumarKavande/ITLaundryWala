// import React, { useEffect, useState } from "react";
// import Modal from "../UI/Modal";
// import { DryCleaning } from "../Pricing/DryCleaningMenu";
// import { DryCleaningButtonOptions } from "../../utilities/constant";
// const DryCleaningMenu = ({ setCurrentPage }) => {
//   const [selectedSubCategory, setSelectedSubCategory] = useState("MEN");
//   return (
//     <div className="bg-white w-full ">
//       <div className="mx-14">
//         <div className="flex pt-2 space-x-2 justify-center pb-4">
//           {DryCleaningButtonOptions.map((item) => (
//             <button
//               className={`w-32 bg-gray-200 h-12 rounded font-bold text-sm ${item===selectedSubCategory?"bg-red-400 text-white":""}  `}
//               onClick={() => {
//                 setSelectedSubCategory(item);
//               }}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//         <div className="h-10 w-full flex bg-red-400 text-lg  items-center justify-center  text-white font-medium ">
//           Dry Cleaning (per Piece)
//         </div>
//         <div className="pt-2 h-[30rem] overflow-y-scroll text-gray-800 font-semibold">
//           {DryCleaning.map((item) => {
//             if (item.subCategory===selectedSubCategory ){
//             return (
              
//                 <div>
//                   <div className="w-full flex items-center  py-1">
//                     <div className="w-3/12">
//                       <img
//                         className="h-16 w-16"
//                         src={item.imgUrl}
//                         alt="dry cleaning"
//                       />
//                     </div>
//                     <div className="w-4/12">{item.type}</div>
//                     <div className="w-4/12"> &#8377;{item.price} / Piece</div>
//                     <div className="w-1/12">
//                       <input type="checkbox" className="h-5 w-5" />
//                     </div>
//                   </div>
//                   <div className="w-full bg-gray-200 h-[2px] " />
//                 </div>
              
//             );
//               }})}
//         </div>

//         {/* <div className="text-red-400 font-semibold text-center pt-3 infinite-show-hide">
//             FREE PICK & DROP! MINIMUM ORDER Rs. 299.00
//           </div> */}
//         <div className="flex justify-center pt-4 pb-4">
//           <button
//             className="pb-4 pt-4 w-48 h-14 text-white font-bold bg-red-500"
//             onClick={() => {
//               setCurrentPage("orderDetailsAndCustomerDetails");
//             }}
//           >
//             Schedule
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DryCleaningMenu;
