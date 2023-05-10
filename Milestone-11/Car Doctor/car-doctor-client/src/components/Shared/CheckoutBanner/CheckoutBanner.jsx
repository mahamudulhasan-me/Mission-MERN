import React from "react";
import { Link } from "react-router-dom";
import checkoutBanner from "../../../assets/images/checkout/checkout.png";
const CheckoutBanner = ({ title, pathName }) => {
  return (
    <div className="relative overflow-hidden">
      <di
        className="absolute  flex justify-center items-center bg-primary z-50 bottom-0 left-1/2 text-white font-semibold w-48 h-10
       before:absolute before:content-[''] before:bg-primary before:-bottom-4 before:-rotate-45 before:w-16 before:h-10 before: before:-left-10  before:z-10
       after:absolute after:content-['] after:bg-primary after:-bottom-4 after:rotate-45 after:w-16 after:h-10 after:-right-10 after:z-10"
      >
        <Link to={"/"} className="hover:underline">
          Home
        </Link>
        /<Link className="hover:underline">{pathName}</Link>
      </di>
      <img src={checkoutBanner} alt="" />
      <div className="absolute pl-20 bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] left-0 top-0 right-0 bottom-0 flex items-center">
        <h2 className="text-4xl font-bold text-white">{title}</h2>
      </div>
    </div>
  );
};

export default CheckoutBanner;
