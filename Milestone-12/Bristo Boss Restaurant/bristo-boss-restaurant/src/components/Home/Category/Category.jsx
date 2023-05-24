import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";

// slider image
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
export default function Category() {
  return (
    <div className="w-4/5 mx-auto mt-20 mb-10">
      <SectionHeader title="ORDER ONLINE" subTitle="From 11:00am to 10:00pm" />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        autoplay={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Desserts
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide1} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Salads
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Pizza
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Soups
          </p>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <p className="font-cinzel font-semibold text-2xl text-center -mt-20 text-slate-950">
            Desserts
          </p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
