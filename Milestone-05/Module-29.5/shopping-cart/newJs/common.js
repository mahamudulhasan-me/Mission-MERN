function getQuantity(isPositive, id) {
  const quantity = document.getElementById(id);
  const quantityToNum = parseInt(quantity.value);
  let totalQuantity;
  if (isPositive) {
    quantity.value = quantityToNum + 1;
    totalQuantity = quantity.value;
  } else {
    quantity.value = quantityToNum - 1;
    totalQuantity = quantity.value;
  }
  return totalQuantity;
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function getPrice(id) {
  const price = document.getElementById(id);
  const priceToNum = parseInt(price.innerText);
  return priceToNum;
}
function totalPrice() {
  const phonePrice = getPrice("phone_price");
  const casePrice = getPrice("case_price");
  const subTotal = phonePrice + casePrice;
  setInnerText("subtotal", subTotal);
  const afterTax = parseFloat((subTotal * 0.15).toFixed(2));
  setInnerText("tax", afterTax);
  setInnerText("total", afterTax + subTotal);
}
