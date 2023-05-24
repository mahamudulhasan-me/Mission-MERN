import React from "react";
import loader from "../../../assets/images/loader.gif";

const Preloader = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <img src={loader} alt="" />
    </div>
  );
};

export default Preloader;
