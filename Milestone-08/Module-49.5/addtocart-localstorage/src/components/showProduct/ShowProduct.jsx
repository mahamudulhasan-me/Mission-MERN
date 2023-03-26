import React from "react";
import {
  removeItemOnLocalStorage,
  setItemOnLocalStorage,
} from "../utilities/setItem";

const ShowProduct = (props) => {
  const getId = (id) => {
    setItemOnLocalStorage(id);
  };
  const removeItem = (id) => {
    removeItemOnLocalStorage(id);
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
      <button
        onClick={() => removeItem(id)}
        className="bg-red-600 text-white font-semibold py-2 px-4 ml-4"
      >
        Remove Item
      </button>
    </div>
  );
};

export default ShowProduct;
