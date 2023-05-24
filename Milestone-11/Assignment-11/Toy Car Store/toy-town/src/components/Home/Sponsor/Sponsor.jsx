import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay } from "swiper";

// import image
import sponsor1 from "../../../assets/images/sponsor/sponsor1.png";
import sponsor2 from "../../../assets/images/sponsor/sponsor2.png";
import sponsor3 from "../../../assets/images/sponsor/sponsor3.png";
import sponsor4 from "../../../assets/images/sponsor/sponsor4.png";
import sponsor5 from "../../../assets/images/sponsor/sponsor5.png";
import sponsor6 from "../../../assets/images/sponsor/sponsor6.png";
export default function Sponsor() {
  return (
    <div data-aos="zoom-in" className="md:px-[8%] md:p-0 p-10 md:my-14">
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sponsor1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sponsor6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
