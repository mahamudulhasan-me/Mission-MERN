import { getProductFromDB } from "../components/Utilities/AddReturnFromDB";

const getAddedItems = async () => {
  const loadProducts = await fetch(`products.json`);
  const products = await loadProducts.json();

  const storedCart = getProductFromDB();
  let saveCart = [];
  console.log(storedCart);
  for (let id in storedCart) {
    const findProduct = products.find((product) => product.id === id);
    if (findProduct) {
      const quantity = storedCart[id];
      products.quantity = quantity;
      saveCart.push(findProduct);
    }
  }
  return saveCart;
};

export { getAddedItems };
