import React from "react";
import { setItemOnLocalStorage } from "../utilities/setItem";

const ShowProduct = (props) => {
  const getId = (id) => {
    setItemOnLocalStorage(id);
  };
  const { title, price, category, image, rating, id } = props.product;
  return (
    <div className="border shadow-lg rounded-lg p-5">
      <img src={image} alt="" className="h-1/2 mx-auto mb-8" />
      <h2 className="text-2xl font-semibold">{title}</h2>
      <h3 className="text-xl">{category}</h3>
      <h2 className="text-2xl font-semibold">Price: {price}</h2>
      <button
        onClick={() => getId(id)}
        className="bg-rose-500 text-white font-semibold py-2 px-4"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ShowProduct;
