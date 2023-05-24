import { Rating } from "@smastrom/react-rating";
import React from "react";
import {
  FaCartPlus,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaUserLock,
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useLoaderData } from "react-router";
import useTitle from "../../../hooks/useTitle";
import SectionTopBanner from "../../Shared/SectionTopBanner/SectionTopBanner";

const ToyDetails = () => {
  const toyDetails = useLoaderData();
  const {
    name,
    image1,
    image2,
    sellerName,
    sellerEmail,
    quantity,
    rating,
    price,
    category,
    description,
  } = toyDetails;
  useTitle(`${name}'s Details`);
  return (
    <div>
      <SectionTopBanner
        sectionTitle={`${name}'s Details`}
        sectionName="toy-details"
      />
      <div className="w-4/5 mx-auto my-10 text-gray-700">
        <div className="md:grid md:grid-cols-12">
          <div className="md:col-span-4 mb-6 md:mb-0">
            <img src={image1} alt="" className=" rounded-xl border-2" />
          </div>
          <div className="md:col-span-8">
            <h2 className=" text-2xl font-nunito">{name}</h2>
            <p className="flex  text-gray-600 mb-4">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              {rating}/5
            </p>
            <div className="flex gap-2 items-center">
              <h>
                Price: <span className="font-semibold">${price}</span>
              </h>
              <p className="bg-sec mb-2 py-1 px-2 text-white font-semibold rounded-md">
                Save 15%
              </p>
            </div>
            <p>
              Category:
              <span className="font-semibold"> {category}</span>
            </p>
            <p>
              Available Quantity:
              <span className="font-semibold"> {quantity}</span>
            </p>
            <p className="md:w-4/5 text-justify mt-2">{description}</p>
            <div className="mt-5">
              <p className="font-semibold ">Seller Info:</p>
              <div className="border-l-8 border-pri rounded-l pl-1 ">
                <p className="flex  items-center gap-2">
                  <FaUserLock className="text-lg text-gray-700" /> {sellerName}
                </p>
                <p className="flex  items-center gap-2">
                  <FaEnvelope className="text-lg text-gray-700" /> {sellerEmail}
                </p>
                <div className="flex gap-2 text-2xl">
                  <FcGoogle />
                  <FaFacebook className="text-[#1877F2]" />
                  <FaInstagram className="text-[#D9455A]" />
                </div>
              </div>
            </div>

            <button className="bg-pri group flex items-center justify-center gap-4 hover:bg-sec duration-200 mt-5 md:w-2/6 w-full py-2 rounded-md text-white">
              Add to Cart
              <FaCartPlus className="text-sec text-2xl group-hover:text-pri" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
