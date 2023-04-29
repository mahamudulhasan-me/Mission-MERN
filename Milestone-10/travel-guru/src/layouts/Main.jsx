import React from "react";
import banner from "../assets/Banner.png";
import Home from "../components/Home/Home";
const Main = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-slate-800 bg-blend-overlay bg-right-top bg-no-repeat bg-cover"
    >
      <Home />
    </div>
  );
};

export default Main;
