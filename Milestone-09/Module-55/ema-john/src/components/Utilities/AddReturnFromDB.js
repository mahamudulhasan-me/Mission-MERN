function addLocalStorage(id) {
  let productCart = {};
  const isProductCartAvailable = localStorage.getItem("product-cart");
  if (isProductCartAvailable) {
    productCart = JSON.parse(isProductCartAvailable);
  } else {
    localStorage.setItem("product-cart", JSON.stringify(productCart));
  }
  const quantity = productCart[id];
  if (quantity) {
    productCart[id] = quantity + 1;
  } else {
    productCart[id] = 1;
  }
  localStorage.setItem("product-cart", JSON.stringify(productCart));
}

function getProductFromDB() {
  const getProduct = localStorage.getItem("product-cart");
  return JSON.parse(getProduct);
}
function clearLocalStorage() {
  localStorage.removeItem("product-cart");
}
function removeFromDB(id) {
  const getProduct = getProductFromDB();
  if (id in getProduct) {
    delete getProduct[id];
    localStorage.setItem("product-cart", JSON.stringify(getProduct));
  }
}
export { addLocalStorage, getProductFromDB, clearLocalStorage, removeFromDB };
