import React from "react";
import { Link } from "react-router-dom";

const PrimaryBtn = ({ children }) => {
  return (
    <div className="mx-auto col-span-2">
      <Link>
        <button className="uppercase border-b-4 rounded-xl border-slate-950 text-slate-950 font-semibold py-2 px-5 hover:bg-slate-950 hover:text-white transition-all duration-300 hover:border-yellow-500">
          {children}
        </button>
      </Link>
    </div>
  );
};

export default PrimaryBtn;
