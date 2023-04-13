import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePHone = () => {
  const phone = useLoaderData();
  return (
    <div>
      <p>{phone.name}</p>
      <img src={phone.image} alt="" />
    </div>
  );
};

export default SinglePHone;
