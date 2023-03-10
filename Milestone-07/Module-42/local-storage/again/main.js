document.getElementById("add_to_cart").addEventListener("click", () => {
  const quantity = document.getElementById("quantity");
  const product = document.getElementById("product");
  showCartItems(product.value, quantity.value);
  displayLocalStorageData(product.value, quantity.value);
  quantity.value = "";
  product.value = "";
});
function showCartItems(product, quantity) {
  document.querySelector("ul").innerHTML += `
        <li>${product}: ${quantity}</li>
    `;
}
function storedData() {
  let cart = {};
  const isCartAvailable = localStorage.getItem("cart");
  if (isCartAvailable) {
    cart = JSON.parse(isCartAvailable);
  }
  return cart;
}
function displayLocalStorageData(product, quantity) {
  let cartData = storedData();
  cartData[product] = quantity;
  const cartStringify = JSON.stringify(cartData);
  localStorage.setItem("cart", cartStringify);
  console.log(cartStringify);
}

function displayLocalStorage() {
  const data = storedData();
  for (let key in data) {
    showCartItems(key, data[key]);
    console.log(key);
  }
}
displayLocalStorage();
