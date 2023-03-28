import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);
  return (
    <div className="grid grid-cols-12 pl-[5%] gap-8 relative">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-5 mt-28">
          {products.map((product) => (
            <Product
              product={product}
              key={product.id}
              addToCart={addToCart}
            ></Product>
          ))}
        </div>
      </div>
      <Cart cart={cart} />
    </div>
  );
};

export default ProductContainer;
