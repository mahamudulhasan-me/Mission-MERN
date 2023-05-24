import React from "react";

const SectionHeader = ({ title, subTitle }) => {
  return (
    <div className="w-3/12 mx-auto text-center font-inter my-10">
      <p className="text-yellow-400 mb-2 ">---{subTitle}---</p>
      <div className="border-y-4  py-2 text-2xl uppercase text-slate-950">
        {title}
      </div>
    </div>
  );
};

export default SectionHeader;
