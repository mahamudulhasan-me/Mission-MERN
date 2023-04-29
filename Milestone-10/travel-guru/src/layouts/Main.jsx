import React from "react";
import banner from "../assets/Banner.png";
import Banner from "../components/Banner/Banner";
import Header from "../components/shared/Header";
const Main = () => {
  return (
    <div
      style={{ backgroundImage: `url(${banner})` }}
      className="bg-slate-800 bg-blend-overlay bg-right-top bg-no-repeat bg-cover h-screen"
    >
      <Header />
      <Banner />
    </div>
  );
};

export default Main;
