function getQuantity(quantityId) {
  const quantity = document.getElementById(quantityId);
  const quantityToNum = parseFloat(quantity.value);
  quantity.value = 0;
  return quantityToNum;
}
function getPrice(quantityId) {
  const quantity = document.getElementById(quantityId);
  const quantityToNum = parseFloat(quantity.innerText);
  return quantityToNum;
}
function setTotalAmount(amountId, totalAmount) {
  const amount = document.getElementById(amountId);
  amount.innerText = totalAmount;
}
function getTotalBalance(totalBalanceId, totalAmount) {
  const totalBalance = document.getElementById(totalBalanceId);
  const totalBalanceToNum = parseFloat(totalBalance.innerText);
  totalBalance.innerText = totalBalanceToNum + totalAmount;
}

function getTotalAmount(buyBtnId, productQuantity, productPrice, productTotal) {
  document.getElementById(buyBtnId).addEventListener("click", () => {
    const quantity = getQuantity(productQuantity);
    const getProductPrice = getPrice(productPrice);
    const totalAmount = getProductPrice * quantity;
    let a = setTotalAmount(productTotal, totalAmount);
    getTotalBalance("total_amount", totalAmount);
  });
}

getTotalAmount("kitkat_buy", "kitkat_quantity", "kitkat_price", "kitkat_total");
getTotalAmount("rose_buy", "rose_quantity", "rose_price", "rose_total");
getTotalAmount("teddy_buy", "teddy_quantity", "teddy_price", "teddy_total");
// function(){
//     const kitkatTotal = parseFloat(document.getElementById('kitkat_total').innerText);
//     const roseTotal = document.getElementById('rose_total');
//     const teddyTotal = document.getElementById('teddy_total');

// }
console.log(parseFloat(document.getElementById("kitkat_total").innerText));
