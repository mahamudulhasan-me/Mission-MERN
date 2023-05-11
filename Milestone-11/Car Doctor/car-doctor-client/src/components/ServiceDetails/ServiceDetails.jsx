import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
  const { _id } = useLoaderData();
  return (
    <div>
      <h3 className="text-center text-2xl text-primary my-10">
        Service details page
      </h3>
      <Link to={`/checkout/${_id}`} className="myPrimary-btn">
        Checkout
      </Link>
    </div>
  );
};

export default ServiceDetails;
