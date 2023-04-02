import { CheckCircleIcon } from "@heroicons/react/24/solid";
import React from "react";

const PriceCard = (props) => {
  const { name, price, features } = props.price;
  return (
    <div className="border p-5 rounded-lg">
      <div className=" text-2xl font-semibold py-5 text-center">
        <h1>
          <span className="text-violet-600">{price}$</span>/Month
        </h1>
        <h1>{name}</h1>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-violet-600 underline">
          Features:
        </h2>
        {features.map((feature, index) => (
          <p key={index} className="border-b flex gap-2 my-2">
            <CheckCircleIcon className="w-6 h-6 text-violet-600" /> {feature}
          </p>
        ))}
      </div>
      <button className="bg-violet-600 text-white px-4 py-2 rounded-lg my-8">
        Buy Now
      </button>
    </div>
  );
};

export default PriceCard;
