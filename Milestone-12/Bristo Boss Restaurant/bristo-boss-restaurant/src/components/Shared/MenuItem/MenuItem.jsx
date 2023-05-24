import React from "react";

const MenuItem = ({ menuDetails }) => {
  const { image, name, recipe, price } = menuDetails;
  return (
    <>
      <div className="flex justify-between gap-5 bg-gray-50 p-1 rounded-lg">
        <img
          src={image}
          alt=""
          style={{ borderRadius: "0px 200px 200px 200px" }}
          className="w-[118px] h-[104px]"
        />
        <div>
          <h3 className="text-xl font-cinzel">{name}-----------</h3>
          <p className="font-inter">{recipe}</p>
        </div>
        <p className="font-semibold text-yellow-500 text-lg">${price}</p>
      </div>
    </>
  );
};

export default MenuItem;
