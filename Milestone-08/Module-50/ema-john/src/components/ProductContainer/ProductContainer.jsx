import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
const ProductContainer = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => setProduct(products));
  }, []);
  return (
    <div className="grid grid-cols-12 pl-[5%] gap-8">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-5 mt-28">
          {product.map((product) => (
            <Product product={product} key={product.id}></Product>
          ))}
        </div>
      </div>
      <div className="bg-[#FFE0B3] col-span-3 px-5 pt-8">
        <h2 className="text-center font-semibold text-2xl mb-5">
          Order Summary
        </h2>
        <div className="space-y-3">
          <p>Selected Items: </p>
          <p>Total Price: $ </p>
          <p>Total Shipping Charge: $</p>
          <p>Tax: $</p>
          <h3>Grand Total</h3>
        </div>
        <div className="flex flex-col space-y-4 mt-5">
          <button className=" bg-rose-500 text-white text-lg  py-2">
            Clear Cart <FontAwesomeIcon icon={faTrash} />
          </button>
          <button className=" bg-orange-500 text-white text-lg py-2">
            Review Order <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductContainer;
