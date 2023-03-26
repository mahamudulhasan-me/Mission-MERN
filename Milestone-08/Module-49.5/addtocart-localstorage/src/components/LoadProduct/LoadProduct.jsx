import React, { useEffect, useState } from "react";
import ShowProduct from "../showProduct/ShowProduct";

const LoadProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div className="w-4/5 mx-auto">
      <h1 className="text-3xl font-bold text-center my-10">
        Pick Your Favorite Product to
        <span className="text-rose-500"> Favorite Shop</span>
      </h1>
      <h2 className="text-xl font-bold text-center my-10">
        Total Price:{" "}
        <span className="text-rose-500">
          {product
            .reduce((preVale, currentValue) => preVale + currentValue.price, 0)
            .toFixed(2)}
        </span>{" "}
        Taka Only
      </h2>
      <div className="grid grid-cols-3 gap-8">
        {product.map((product) => (
          <ShowProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LoadProduct;
