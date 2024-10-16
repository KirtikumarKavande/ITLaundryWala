import { Smile, Gauge, Leaf, Clock } from 'lucide-react';

export const BASE_URL="http://localhost:4000"
// export const BASE_URL="http://13.201.148.14:4000"
export const NUMBER_OF_CLOTH_TYPE=[1,2,3,4,5]
export const MonthNames=['Jan','Feb','March','April','May','June','July','Aug','Sep','Oct','Nov','Dec']
export const PICKUP_TIME=["Select","07.00 AM - 10.00 AM","12.00 PM - 3.00 PM","06.00 PM - 9.00 PM"]
export const COUNTRY_CODE=['INDIA-91']
export const DryCleaningButtonOptions=["MEN","WOMEN","SHOES"]
export const houseHoldButtonsOptions=["HOUSEHOLD"]
export const pressHoldButtonsOptions=["MEN","WOMEN"]
export const expressLaundryButtonOptions=["MEN","WOMEN","PRESS","SHOES","KG"]
export const products = [
    { id: 1, title: "Wash &  Fold", price: "starts@69", description: "48-72 hrs",identifier:"customerDetails" },
    { id: 2, title: "Wash & Iron", price: "starts@99", description: "48-72 hrs" ,identifier:"customerDetails"},
    { id: 3, title: "Dry Cleaning", price: "starts@79", description: "48-72 hrs",identifier:"dryCleaning" },
    { id: 4, title: "Express Laundry", price: "Kg/piece", description: "48-72 hrs",identifier:"expressLaundry" },
    
  ];

  export const howItWorksSSteps = [
    { icon: "./gif/online-order.gif", title: "Book Order", step: 1 },
    { icon: "./gif/pickup-truck.gif", title: "Pickup at Doorstep", step: 2 },
    { icon:"./gif/laundry.gif", title: "Process", step: 3 },
    { icon: "./gif/door-delivery.gif", title: "Delivery at Doorstep", step: 4 },
  ];



  export const promises = [
    {
      icon: Smile,
      title: "Free pick & drop",
      description: "We provide Free pick & drop facility at your doorstep."
    },
    {
      icon: Gauge,
      title: "Affordable",
      description: "Our pricing policy is fair & transparent. What you see is what you pay!"
    },
    {
      icon: Leaf,
      title: "Quality assurance",
      description: "We strive to give best laundry & dry cleaning experience."
    },
    {
      icon: Clock,
      title: "Convenience",
      description: "Book your service in less than 20 seconds."
    }
  ];