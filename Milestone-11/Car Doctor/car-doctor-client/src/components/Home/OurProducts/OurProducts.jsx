import React from "react";
import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ProductCart from "./ProductCart";
const OurProducts = () => {
  return (
    <div className="my-20">
      <SectionTitle section="Popular Products" title="Browse Our Products" />
      <div className="grid grid-cols-3 mt-10 gap-6">
        <ProductCart image={product1} title="Car Engine Plug" rating={4} />
        <ProductCart image={product2} title="Car Air Filter" rating={4.5} />
        <ProductCart image={product3} title="Cools Led Light" rating={4.4} />
        <ProductCart image={product6} title="Cools Led Light" rating={4.5} />
        <ProductCart image={product5} title="High Quality Tyre" rating={4} />
        <ProductCart image={product4} title="Battery and Water" rating={5} />
      </div>
    </div>
  );
};

export default OurProducts;
