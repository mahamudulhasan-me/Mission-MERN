import { Rating } from "@smastrom/react-rating";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
const ProductCart = ({ image, title, rating }) => {
  return (
    <div className="rounded-lg border p-4 overflow-hidden hover:shadow-2xl relative group">
      <div
        className="absolute right-10 top-10 w-10 h-10 text-2xl text-primary  hidden
        group-hover:flex  justify-center items-center bg-white rounded-lg shadow-xl "
      >
        <FaCartPlus />
      </div>

      <div className="bg-[#F3F3F3] rounded-lg mb-5 h-4/6">
        <img src={image} alt="" className="w-4/6 h-full mx-auto py-2" />
      </div>
      <div className="font-semibold text-center ">
        <Rating
          style={{ maxWidth: 100 }}
          value={rating}
          readOnly
          className="mx-auto"
        />
        <h2 className="font-bold text-xl my-1">{title}</h2>
        <p className="text-primary text-lg">Price : $20.00</p>
      </div>
    </div>
  );
};

export default ProductCart;
