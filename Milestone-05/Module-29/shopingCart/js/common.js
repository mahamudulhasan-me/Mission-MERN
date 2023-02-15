function quantityCount(isPositive, quantityId) {
  const quantity = document.getElementById(quantityId);
  const quantityToNum = parseInt(quantity.value);
  let productQuantity;
  if (isPositive) {
    quantity.value = quantityToNum + 1;
    productQuantity = quantity.value;
  } else {
    quantity.value = quantityToNum - 1;
    productQuantity = quantity.value;
  }
  return productQuantity;
}
function setInnerText(id, price) {
  document.getElementById(id).innerText = price;
}
function getTotalPrice(productId) {
  const total = document.getElementById(productId);
  const totalToNum = parseInt(total.innerText);
  return totalToNum;
}
function subtotal() {
  const mobileTotal = getTotalPrice("phone_price");
  const caseTotal = getTotalPrice("case_price");
  const totalPrice = mobileTotal + caseTotal;
  setInnerText("subtotal", totalPrice);
  const taxAmount = parseFloat((totalPrice * 0.1).toFixed(2));
  setInnerText("tax", taxAmount);
  const totalAmount = totalPrice + taxAmount;
  setInnerText("total", totalAmount);
}

document.getElementById("remove_item").addEventListener("click", function (e) {
  e.target.parentElement.parentElement.remove();
});
