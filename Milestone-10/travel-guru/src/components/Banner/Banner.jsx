import React from "react";
import slide1 from "../../assets/Banner.png";
import slide2 from "../../assets/Sreemongol.png";
import slide3 from "../../assets/sundorbon.png";
const Banner = () => {
  return (
    <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img src={slide1} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={slide2} className="rounded-box" />
      </div>
      <div className="carousel-item">
        <img src={slide3} className="rounded-box" />
      </div>
    </div>
  );
};

export default Banner;
