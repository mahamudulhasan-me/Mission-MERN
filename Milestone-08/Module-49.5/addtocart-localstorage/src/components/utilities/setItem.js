function setItemOnLocalStorage(id) {
  let productList = {};
  const isProductAvailable = localStorage.getItem("product-list");
  if (isProductAvailable) {
    productList = JSON.parse(isProductAvailable);
  } else {
    productList = {};
  }

  let quantity = productList[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    productList[id] = newQuantity;
  } else {
    productList[id] = 1;
  }
  localStorage.setItem("product-list", JSON.stringify(productList));
}

function removeItemOnLocalStorage(id) {
  const isProductAvailable = localStorage.getItem("product-list");
  if (isProductAvailable) {
    const parsedList = JSON.parse(isProductAvailable);
    if (id in parsedList) {
      delete parsedList[id];
      localStorage.setItem("product-list", JSON.stringify(parsedList));
    }
  }
}

export { setItemOnLocalStorage, removeItemOnLocalStorage };
