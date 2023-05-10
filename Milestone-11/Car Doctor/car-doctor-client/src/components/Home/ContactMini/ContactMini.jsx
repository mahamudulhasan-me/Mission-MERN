import React from "react";
import { FcCalendar, FcCustomerSupport } from "react-icons/fc";
import { ImLocation2 } from "react-icons/im";
const ContactMini = () => {
  return (
    <div className="grid grid-cols-3 bg-slate-950 text-white rounded-lg py-20 px-16">
      <div className="flex gap-2 items-center">
        <FcCalendar className="text-4xl" />
        <div>
          <p className="text-sm">We are open monday-friday</p>
          <h3 className="text-xl font-semibold">7:00 am - 9:00 pm</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <FcCustomerSupport className="text-4xl" />
        <div>
          <p className="text-sm">Have a question?</p>
          <h3 className="text-xl font-semibold">+2546 251 2658</h3>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <ImLocation2 className="text-4xl text-primary" />
        <div>
          <p className="text-sm">Need a repair? our address</p>
          <h3 className="text-xl font-semibold">Liza Street, New York</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactMini;
