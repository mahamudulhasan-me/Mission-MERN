import React from "react";
import "./ShowCountry.css";

const ShowCountry = (props) => {
  const { name, region, flags, cca3 } = props.country;

  return (
    <div className="grid grid-cols-4 border-b my-2 py-1 text-xl text-center items-center">
      <img src={flags.png} alt="" className="w-32" />
      <label
        htmlFor="my-modal-5"
        onClick={() => props.uniqueId(cca3)}
        className="text-violet-500 hover:underline cursor-pointer"
      >
        {name.common}
      </label>
      <p>{name.official}</p>
      <p>{region}</p>
    </div>
  );
};
export default ShowCountry;
