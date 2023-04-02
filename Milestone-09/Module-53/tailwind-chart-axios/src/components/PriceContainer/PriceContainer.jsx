import React, { useEffect, useState } from "react";
import PriceCard from "../PriceCard/PriceCard";

const PriceContainer = () => {
  const [priceList, setPriceList] = useState([]);
  useEffect(() => {
    fetch("pricelist.json")
      .then((response) => response.json())
      .then((price) => setPriceList(price.products));
  }, []);
  return (
    <div className="px-[10%] ">
      <h1 className="text-4xl  font-semibold text-violet-500 my-8 text-center">
        Our Price List
      </h1>
      <div className="md:grid grid-cols-3 gap-5">
        {priceList.map((price) => (
          <PriceCard key={price.id} price={price} />
        ))}
      </div>
    </div>
  );
};

export default PriceContainer;
