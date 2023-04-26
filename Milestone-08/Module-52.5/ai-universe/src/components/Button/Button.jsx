import React from "react";

const Button = (props) => {
  return (
    <div className="text-center">
      <button className="bg-rose-500 px-4 py-3 text-white font-semibold rounded-md text-lg">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
