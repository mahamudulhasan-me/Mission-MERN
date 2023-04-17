import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import { clearLocalStorage, removeFromDB } from "../Utilities/AddReturnFromDB";
import OrderReview from "./OrderReview";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);
  const getDeleteItem = (id) => {
    const afterDeleteCartItem = cart.filter((item) => item.id !== id);
    setCart(afterDeleteCartItem);
    removeFromDB(id);
  };
  const clearCart = () => {
    setCart([]);
    clearLocalStorage();
  };

  return (
    <div className="grid grid-cols-12 pl-[5%] gap-8 relative ">
      <div className="col-span-9">
        <div className="mx-auto  mt-28 space-y-5">
          {cart.map((cart) => (
            <OrderReview
              key={cart.id}
              cart={cart}
              getDeleteItem={getDeleteItem}
            />
          ))}
        </div>
      </div>
      <Cart clearCart={clearCart} cart={cart} />
    </div>
  );
};

export default Orders;
