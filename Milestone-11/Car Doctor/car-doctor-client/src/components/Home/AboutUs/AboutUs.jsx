import React from "react";
import aboutParts from "../../../assets/images/about_us/parts.jpg";
import aboutPerson from "../../../assets/images/about_us/person.jpg";
const AboutUs = () => {
  return (
    <div className="flex justify-between  my-28  items-stretch">
      <div className="w-2/5 relative">
        <img src={aboutPerson} alt="" className="h-full rounded-lg" />
        <img
          src={aboutParts}
          alt=""
          className=" absolute left-1/2 top-1/2 w-72 h-72 p-2 bg-white rounded-md border"
        />
      </div>

      <div className="w-1/2">
        <h5 className="text-xl font-semibold text-primary">About Us</h5>
        <h1 className="font-bold text-4xl">
          We are qualified & of experience in this field
        </h1>
        <p className="my-10 text-slate-700">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
          <br /> <br /> the majority have suffered alteration in some form, by
          injected humour, or randomised words which don't look even slightly
          believable.
        </p>
        <button className="myPrimary-btn">Get More Info.</button>
      </div>
    </div>
  );
};

export default AboutUs;
