import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="grid grid-cols-2 text-white">
      <div className="bg-slate-800 text-center pl-[30%] py-16">
        <p className="text-2xl mb-4">Contact Us</p>
        <ul className="space-y-2">
          <li>123 ABS Street, Uni 21, Bangladesh</li>
          <li>+88 123456789</li>
          <li>Mon - Fri: 08:00 - 22:00</li>
          <li>Sat - Sun: 10:00 - 23:00</li>
        </ul>
      </div>
      <div className="bg-slate-950 text-center pr-[30%] py-20">
        <p className="text-2xl mb-4">Follow Us</p>
        <p>Join us on social media</p>
        <span className="flex text-center justify-center items-center mt-5 text-2xl gap-2">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </span>
      </div>
      <div className="col-span-2 bg-black text-sm text-center py-3">
        Copyright &copy;CulinaryCloud. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
