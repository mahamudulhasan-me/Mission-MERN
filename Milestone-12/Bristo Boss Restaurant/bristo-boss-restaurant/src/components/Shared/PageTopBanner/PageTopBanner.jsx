import React from "react";

const PagesTopBanner = ({ image, title, subtitle }) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className="bg-cover flex justify-center items-center p-20"
    >
      <div className="w-4/5 mt-20 py-24 text-center text-white font-cinzel  bg-slate-950 bg-opacity-40">
        <h2 className="text-4xl font-semibold">{title}</h2>{" "}
        <p className="font-semibold">{subtitle}</p>
      </div>
    </div>
  );
};

export default PagesTopBanner;
