/* eslint-disable react/prop-types */
import React from "react";

const Job = ({ job }) => {
  const { title, image, salary, vacancy } = job;
  return (
    <div className="border border-rose-600 p-5 rounded-lg mt-10">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Job;
