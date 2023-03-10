document.getElementById("add_to_cart").addEventListener("click", () => {
  const product = document.getElementById("product");
  const quantity = document.getElementById("quantity");
  showCartItems(product.value, quantity.value);
  addCartToLocalStorage(product.value, quantity.value);
  product.value = "";
  quantity.value = "";
});

function showCartItems(product, quantity) {
  document.querySelector("ol").innerHTML += `
        <li>${product}: ${quantity}</li>
    `;
}

function createCart() {
  let cart = {};
  const isCartAvailable = localStorage.getItem("cart");
  if (isCartAvailable) {
    cart = JSON.parse(isCartAvailable);
  }
  return cart;
}

function addCartToLocalStorage(product, quantity) {
  let cart = createCart();
  cart[product] = quantity;
  const stringifyCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyCart);
}
function displayLocalStoresData() {
  const cart = createCart();
  for (let key in cart) {
    showCartItems(key, cart[key]);
    console.log(cart[key]);
  }
  console.log(cart);
}
displayLocalStoresData();
