import React from "react";
import { FaAngleRight } from "react-icons/fa";

const AdminOption = ({ icon, name }) => {
  return (
    <div className="w-full h-12 hover:bg-gray-200 px-5  flex justify-between items-center">
      <div className="flex justify-center items-center gap-2 ">
        <span className="text-xl">{icon}</span>
        {name}
      </div>
      <FaAngleRight />
    </div>
  );
};

export default AdminOption;
