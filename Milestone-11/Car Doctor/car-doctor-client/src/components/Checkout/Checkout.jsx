import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import CheckoutBanner from "../Shared/CheckoutBanner/CheckoutBanner";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const { img, price, title, service_id } = useLoaderData();
  const handleAppointment = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const date = form.date.value;
    const message = form.message.value;
    const appointInfo = {
      name,
      "service-title": title,
      service_id,
      user_id: user?.uid,
      email,
      phone,
      date,
      message,
      img,
      price,
    };
    fetch(`http://localhost:5050/appointment`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(appointInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          form.reset();
          Swal.fire(
            "Appointment Successful!",
            "You clicked the button!",
            "success"
          );
        }
      });
  };
  return (
    <div>
      <CheckoutBanner title="Check Out" pathName="checkout" />
      <form
        onSubmit={handleAppointment}
        className="bg-[#F3f3f3] py-16 px-20 my-20  "
      >
        <div className="common space-y-5">
          <div className="w-full flex justify-between gap-8">
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              placeholder="Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              defaultValue={user?.email}
            />
          </div>
          <div className="w-full flex justify-between gap-8">
            <input
              type="number"
              name="phone"
              placeholder="Your Phone"
              required
            />
            <input type="date" name="date" required />
          </div>
          <textarea
            name="message"
            id=""
            className="w-full h-32 p-3 mt-2 rounded-md outline-primary"
            placeholder="Your Message"
          ></textarea>
        </div>

        <input
          type="submit"
          value="Confirm Appointment"
          className=" mt-5 w-full myPrimary-btn"
        />
      </form>
    </div>
  );
};

export default Checkout;
