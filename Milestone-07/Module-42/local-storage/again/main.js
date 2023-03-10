document.getElementById("add_to_cart").addEventListener("click", () => {
  const quantity = document.getElementById("quantity");
  const product = document.getElementById("product");
  showCartItems(product.value, quantity.value);
  quantity.value = "";
  product.value = "";
});
function showCartItems(product, quantity) {
  document.querySelector("ul").innerHTML += `
        <li>${product}: ${quantity}</li>
    `;
}
function storedData() {
  const cart = {};
  const isCartAvailable = localStorage.getItem('cart')
  if()
}
