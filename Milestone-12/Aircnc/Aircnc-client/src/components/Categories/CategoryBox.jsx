import React from "react";

const CategoryBox = ({ label, icon: Icon }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 text-neutral-500 border-transparent ">
      <Icon size={28} />
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default CategoryBox;
