import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OrderReview = (props) => {
  const { id, name, img, price, shipping } = props.cart;
  return (
    <div className="grid grid-cols-12 border border-orange-400 h-24 w-1/2 mx-auto rounded-md items-center">
      <img
        src={img}
        alt=""
        className="col-span-3 h-[91px] w-[91px] rounded-l-md"
      />

      <div className="col-span-7">
        <h2>{name}</h2>
        <p>Price: ${price}</p>
        <p>Shipping Charge: ${shipping}</p>
      </div>
      <div className="w-12 h-12 rounded-full bg-rose-300 flex justify-center items-center">
        <FontAwesomeIcon
          onClick={() => props.getDeleteItem(id)}
          className="col-span-2 text-rose-600 h-6 w-6  "
          icon={faTrash}
        />
      </div>
    </div>
  );
};

export default OrderReview;
