import React from "react";
import featured from "../../../assets/home/featured.jpg";
import SectionHeader from "../../Shared/SectionHeader/SectionHeader";
const Feature = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featured})` }}
      className="py-16 bg-slate-950 bg-blend-overlay bg-opacity-50 bg-cover bg-fixed"
    >
      <SectionHeader
        title={<span className="text-white">FROM OUR MENU</span>}
        subTitle="Check It Out"
      />
      <div className="w-4/5 mx-auto flex justify-center items-center gap-8">
        <img src={featured} alt="" className="w-1/2" />
        <div className="text-white space-y-2">
          <h2>12 April 2023</h2>
          <h1>WHERE CAN I GET SOME?</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className=" mt-5 uppercase border-b-4 rounded-xl border-white py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 hover:border-yellow-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
