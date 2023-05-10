/* eslint-disable react/prop-types */
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="rounded-lg border p-4 overflow-hidden group">
      <img
        src={img}
        alt=""
        className="rounded-lg  group-hover:-translate-x-3 group-hover:-translate-y-3 transition-all duration-200"
      />
      <h2 className="font-semibold text-2xl my-2">{title}</h2>
      <div className="font-semibold flex justify-between text-lg items-center text-primary">
        <p>Price : ${price}</p>
        <Link to={`service-details/${_id}`}>
          <HiArrowRight className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
