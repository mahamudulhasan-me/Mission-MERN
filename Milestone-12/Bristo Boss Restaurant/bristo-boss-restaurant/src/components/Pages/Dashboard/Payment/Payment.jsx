import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import useCart from "../../../../hooks/useCart";
import SectionHeader from "../../../Shared/SectionHeader/SectionHeader";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51NEWqJBqXwzigbXRP470KDyMHym9vZ2BX4IWTtW2rKgVi70RgduKN7VyUy5ThSS77Om0vAd212ETrKNoNcl5ndw900IHFiKIg3"
);
const Payment = () => {
  const [cart] = useCart();
  const totalPrice = cart.reduce((pre, cur) => pre + cur.price, 0);
  const totalAmount = parseFloat(totalPrice.toFixed(2));

  return (
    <div>
      <SectionHeader title={"Payment"} subTitle={"O Teka Teka"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm cart={cart} price={totalAmount} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
