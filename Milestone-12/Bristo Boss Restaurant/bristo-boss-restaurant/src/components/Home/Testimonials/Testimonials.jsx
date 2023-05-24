import "@smastrom/react-rating/style.css";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
// Import Swiper styles
import { Rating } from "@smastrom/react-rating";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="w-3/5 mx-auto my-20">
      <SectionHeader
        title={"TESTIMONIALS"}
        subTitle={<span className="text-sm">What Our Clients Say</span>}
      />
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col justify-center items-center px-10 text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className="text-6xl my-6" />
                <p>{review.details}</p>
                <h2 className="font-cinzel font-semibold text-orange-500 text-xl mt-2">
                  {review.name}
                </h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
