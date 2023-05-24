import React from "react";

const RecipeBanner = ({ image, title, subtitle }) => {
  return (
    <div
      className=" p-16 bg-cover rounded-sm my-20 bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="w-4/5 mx-auto rounded-sm p-5 bg-slate-950 bg-opacity-50 py-16 text-white text-center ">
        <h2 className="text-3xl font-cinzel font-semibold mb-2 ">{title}</h2>
        <p className="text-sm text-gray-300">{subtitle}</p>
      </div>
    </div>
  );
};

export default RecipeBanner;
