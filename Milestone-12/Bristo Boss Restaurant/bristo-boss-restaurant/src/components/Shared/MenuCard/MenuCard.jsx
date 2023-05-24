import React from "react";

const MenuCard = ({ menuDetails }) => {
  const { image, name, recipe } = menuDetails;

  return (
    <div className="group">
      <div className="overflow-hidden">
        <img src={image} className="group-hover:scale-y-110" />
      </div>
      <div className="p-2 bg-[#EFEFEF] overflow-hidden">
        <div className="border border-dashed border-slate-950 text-center flex flex-col justify-center items-center">
          <h1 className="mt-5 text-slate-950 text-xl font-cinzel font-semibold ">
            {name}
          </h1>
          <p className="text-sm text-slate-950 text-justify w-4/5">{recipe}</p>
          <button className=" mt-6 mb-4 uppercase border-b-4 rounded-xl hover:border-slate-950 text-yell bg-[#EFEFEF] py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 border-yell">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
