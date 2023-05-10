import React from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";
import banImg1 from "../../../assets/images/banner/1.jpg";
// import banImg5 from "../../../assets/images/banner/6.jpg"
// import banImg6 from "../../../assets/images/banner/5.jpg"
const Banner = () => {
  return (
    <>
      <div className="carousel w-full h-[calc(100vh-7.5rem)] mt-5 rounded-lg">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={banImg1} className="w-full" />
          <div className="absolute pl-20 bg-gradient-to-r rounded-lg from-[#151515] to-[rgba(21, 21, 21, 0) 100%)] left-0 top-0 right-0 bottom-0 flex items-center">
            <div className="w-3/5 mt-8">
              <h2 className="text-6xl text-white font-semibold mb-5">
                Affordable Price For Car Servicing
              </h2>
              <p className="w-4/5 text-gray-300">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
              <div className="mt-10  gap-5">
                <Link className="myPrimary-btn mr-10">Discover More</Link>
                <Link className="myOutline-btn">Latest Project</Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end gap-2 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="slider-btn bg-primary bg-opacity-30">
              <HiArrowLeft />
            </a>
            <a href="#slide4" className="slider-btn bg-primary">
              <HiArrowRight />
            </a>
          </div>
        </div>
        {/* <div id="slide2" className="carousel-item relative w-full">
          <img src={banImg2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={banImg3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={banImg4} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Banner;
