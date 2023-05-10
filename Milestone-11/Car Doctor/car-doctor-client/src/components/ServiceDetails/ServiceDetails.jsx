import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id } = useLoaderData();
  return (
    <div>
      <Link to={`/checkout/${_id}`} className="myPrimary-btn">
        Checkout
      </Link>
    </div>
  );
};

export default ServiceDetails;
