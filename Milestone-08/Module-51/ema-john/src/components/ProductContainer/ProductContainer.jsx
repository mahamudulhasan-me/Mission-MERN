import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import {
  addLocalStorage,
  getProductFromDB,
} from "../Utilities/AddReturnFromDB";

const ProductContainer = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    // const newCart = [...cart, product];
    // setCart(newCart);
    let newCart = [];
    const isExistProduct = cart.find((pd) => pd.id === product.id);
    if (isExistProduct) {
      isExistProduct.quantity = isExistProduct.quantity + 1;
      const restProduct = cart.filter((pd) => pd.id !== product.id);
      newCart = [...restProduct, isExistProduct];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addLocalStorage(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((products) => setProducts(products));
  }, []);

  useEffect(() => {
    const storedCart = getProductFromDB();
    const saveCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((pd) => pd.id == id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    setCart(saveCart);
  }, [products]);
  return (
    <div className="grid grid-cols-12 pl-[5%] gap-8 relative">
      <div className="col-span-9">
        <div className="grid grid-cols-3 gap-5 mt-28">
          {products.map((product) => (
            <Product
              product={product}
              key={product?.id}
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
