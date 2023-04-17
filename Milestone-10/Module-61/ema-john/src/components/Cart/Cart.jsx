import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Cart = ({ cart, clearCart }) => {
  const quantity = cart.reduce((pre, current) => pre + current.quantity, 0);
  const totalPrice = cart.reduce((pre, current) => pre + current.price, 0);
  const shippingCharge = cart.reduce(
    (pre, current) => pre + current.shipping,
    0
  );

  const tax = parseFloat(
    (((totalPrice + shippingCharge) * 7) / 100).toFixed(2)
  );

  return (
    <>
      <div className="bg-[#FFE0B3] col-span-3 px-5 pt-8 sticky top-0">
        <h2 className="text-center font-semibold text-2xl mb-5">
          Order Summary
        </h2>
        <div className="space-y-3 text-xl">
          <p>Selected Items: {quantity}</p>
          <p>Total Price: $ {totalPrice}</p>
          <p>Total Shipping Charge: ${shippingCharge}</p>
          <p>Tax: ${tax}</p>
          <h3>Grand Total: {(totalPrice + shippingCharge + tax).toFixed(2)}</h3>
        </div>
        <div className="flex flex-col space-y-4 mt-5">
          <button
            className=" bg-rose-500 text-white text-lg  py-2"
            onClick={clearCart}
          >
            Clear Cart <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className=" bg-orange-500 text-white text-lg py-2">
            <Link to={"/checkout"}>
              CheckOut Product
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
