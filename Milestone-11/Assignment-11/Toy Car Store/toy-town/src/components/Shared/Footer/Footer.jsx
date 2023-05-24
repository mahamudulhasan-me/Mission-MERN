import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import logo from "../../../assets/images//Logo.png";
import footerBg from "../../../assets/images/footer_bg.png";
import payment from "../../../assets/images/sslcommerz-banner.png";
const Footer = () => {
  return (
    <div
      data-aos="zoom-in-up"
      className="bg-cover px-[5%] pt-10 pb-5"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div
        data-aos="zoom-in-up"
        className="text-[1rem] footer pb-5 mb-2 text-gray-600  md:grid md:grid-cols-4 grid-cols-2 gap-10 border-b border-slate-400"
      >
        <div className="col-span-2 md:col-span-1">
          <img src={logo} alt="" />
          <p className="mt-6 leading-6">
            This is Photoshops version of Lorem fenIpsum. Proin gravida nibh
            sagitt sem nibh id elit.Proin gravida nibh sagitt sem nibh id elit
          </p>
        </div>
        <div>
          <h2 className="text-2xl  text-sec mt-5 mb-3 font-nunito">
            Information
          </h2>
          <ul className="space-y-2.5">
            <li>About Us</li>
            <li>Information</li>
            <li>FAQs</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl  text-sec mt-5 mb-3 font-nunito">Account</h2>
          <ul className="space-y-2.5">
            <li>My Account</li>
            <li>Specials</li>
            <li>Order History</li>
            <li>Newsletter</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h2 className="text-2xl  text-sec mt-5 mb-3 font-nunito">
            Store Information
          </h2>
          <div className="space-y-6">
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-xl" />
              Sonargoan Road, Sector-12 <br /> Uttara, Dhaka-1230
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-xl" />
              +8801710142370 <br />
              +8801511242370
            </p>
            <p className="flex items-center text-gray-800 gap-2">
              <FaEnvelope className="text-xl" />
              contact@toytown.com
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <p>
          Powered By <span className="text-pri">Mahmud</span> |Toy Town © 2023
        </p>

        <img src={payment} alt="" />
      </div>
    </div>
  );
};

export default Footer;
