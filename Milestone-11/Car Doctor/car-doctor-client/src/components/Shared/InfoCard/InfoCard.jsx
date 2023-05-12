/* eslint-disable react/prop-types */
import React from "react";
import {
  FaPhoneAlt,
  FaRegEnvelope,
  FaTimesCircle,
  FaUserCog,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const InfoCard = ({ appointInfo, handleDelete, handleConfirm }) => {
  const { _id, name, img, email, phone, date, price, status } = appointInfo;

  return (
    <div className="flex justify-between items-center font-semibold bg-[#f3f3f3] p-2 rounded-md ">
      <div className="flex justify-between items-center gap-4">
        <Link onClick={() => handleDelete(_id)}>
          <FaTimesCircle className="text-xl text-rose-600" />
        </Link>
        <img src={img} alt="" className="w-36 h-32 rounded-md" />
        <div className="">
          <h3 className=" text-xl">{appointInfo["service-title"]}</h3>
          <p className="flex items-center gap-2">
            <FaUserCog className="text-primary" /> {name}
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaPhoneAlt className="text-primary" /> {phone}
          </p>
          <p className="text-sm flex items-center gap-2">
            <FaRegEnvelope className="text-primary" /> {email}
          </p>
        </div>
      </div>
      <p className="text-xl">${price}</p>
      <p className="text-xl">{date}</p>
      {status === "confirm" ? (
        <div
          className="myPrimary-btn"
          onClick={() => {
            handleConfirm(_id);
          }}
        >
          Confirm
        </div>
      ) : (
        <div
          className="myPrimary-btn"
          onClick={() => {
            handleConfirm(_id);
          }}
        >
          Pending
        </div>
      )}
    </div>
  );
};

export default InfoCard;
