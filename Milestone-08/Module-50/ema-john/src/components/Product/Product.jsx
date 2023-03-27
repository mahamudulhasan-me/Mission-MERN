import React from "react";
import cart from "../../assets/images/trolley.png";

const Product = (props) => {
  const { name, price, img, seller, ratings } = props.product;
  const addToCart = props.addToCart;
  return (
    <div className="border rounded-lg relative">
      <div className="p-2">
        <img src={img} alt="" className="rounded-lg" />
        <div>
          <h2 className="text-lg font-semibold mt-5">{name}</h2>
          <h5 className="text-lg font-semibold">Price: ${price}</h5>
          <div className="mt-12">
            <p className="font-medium">Manufacture: {seller}</p>
            <p>Ratings: {ratings} Stars</p>
          </div>
        </div>
      </div>
      <div
        onClick={() => addToCart(props.product)}
        className=" cursor-pointer bg-[#FFE0B3] flex justify-center items-center gap-3 font-semibold border-t rounded-b-lg"
      >
        <p>Add to Cart</p>
        <img src={cart} alt="" className="w-10 py-2 " />
      </div>
    </div>
  );
};

export default Product;
