import React from "react";
import {
  FaCalendarCheck,
  FaCartPlus,
  FaHome,
  FaPaperPlane,
  FaRegCalendarAlt,
  FaRocketchat,
  FaUserAlt,
} from "react-icons/fa";
import logo from "../../../assets/images/Logo.png";
import AdminOption from "../AdminOption/AdminOption";
const AdminNav = () => {
  return (
    <>
      <div className=" shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <img src={logo} alt="" className=" pl-5 " />
      </div>
      <div className="text-gray-500 mt-10 ">
        <p className="font-semibold pl-5">Main</p>
        <div className="">
          <AdminOption name="Dashboard" icon={<FaHome />} />
          <AdminOption name="Email" icon={<FaPaperPlane />} />
          <AdminOption name="Todo" icon={<FaCalendarCheck />} />
          <AdminOption name="User" icon={<FaUserAlt />} />
          <AdminOption name="Calender" icon={<FaRegCalendarAlt />} />
          <AdminOption name="Chat" icon={<FaRocketchat />} />
          <AdminOption name="eCommerce" icon={<FaCartPlus />} />
        </div>
        <p className="font-semibold pl-5 mt-8">Components</p>
        <div className="">
          <AdminOption name="Dashboard" icon={<FaHome />} />
          <AdminOption name="Email" icon={<FaPaperPlane />} />
          <AdminOption name="Todo" icon={<FaCalendarCheck />} />
          <AdminOption name="User" icon={<FaUserAlt />} />
          <AdminOption name="Calender" icon={<FaRegCalendarAlt />} />
          <AdminOption name="Chat" icon={<FaRocketchat />} />
          <AdminOption name="eCommerce" icon={<FaCartPlus />} />
        </div>
      </div>
    </>
  );
};

export default AdminNav;
