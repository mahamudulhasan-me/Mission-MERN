function setItemOnLocalStorage(id) {
  let productList;
  const isProductListAvailable = localStorage.getItem("product-list");
  if (isProductListAvailable) {
    productList = JSON.parse(isProductListAvailable);
  } else {
    productList = {};
  }
  const quantity = productList[id];
  if (quantity) {
    const newQuantity = parseInt(quantity) + 1;
    productList[id] = newQuantity;
  } else {
    productList[id] = 1;
  }

  localStorage.setItem("product-list", JSON.stringify(productList));
}

export { setItemOnLocalStorage };
