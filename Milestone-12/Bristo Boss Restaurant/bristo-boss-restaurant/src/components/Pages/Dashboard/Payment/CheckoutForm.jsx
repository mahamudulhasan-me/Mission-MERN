import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import "./styles.css";

const CheckoutForm = ({ cart, price }) => {
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((result) => {
        setClientSecret(result.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      toast.error(error.message);
    } else {
      console.log(paymentMethod);
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "Unknown",
            name: user?.name || "Anonymous",
          },
        },
      });

    if (confirmError) {
      toast.error(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        status: "service pending",
        cartItems: cart.map((item) => item._id),
        menuItems: cart.map((item) => item.menuId),
        itemNames: cart.map((item) => item.name),
      };
      axiosSecure.post("/payments/", payment).then((response) => {
        if (response.data.insertedResult.insertedId) {
          toast.success("Payment Success!");
        }
      });
    }
  };

  return (
    <div className="w-4/5 mx-auto bg-white p-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="w-1/2 mx-auto mt-10">
          <button
            type="submit"
            className="btn btn-primary w-full  btn-sm "
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {transactionId && (
        <p className="text-green-600">
          Payment Successful <br /> Transaction Id: {transactionId}
        </p>
      )}
    </div>
  );
};

export default CheckoutForm;
