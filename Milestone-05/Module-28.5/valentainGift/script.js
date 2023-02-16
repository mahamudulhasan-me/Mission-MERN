function getQuantity(quantityId) {
  const quantity = document.getElementById(quantityId);
  const quantityToNum = parseInt(quantity.value);
  return quantityToNum;
}
function getPrice(quantityId) {
  const quantity = document.getElementById(quantityId);
  const quantityToNum = parseFloat(quantity.innerText);
  return quantityToNum;
}
function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
const isApply = true;
function setPrice(buyBtn, productQnty, productPrice, productTotalPrice) {
  document.getElementById(buyBtn).addEventListener("click", (e) => {
    const quantity = getQuantity(productQnty);
    const price = getPrice(productPrice);
    const totalAmount = price * quantity;

    if (isNaN(totalAmount)) {
      alert("Enter quantity");
    } else {
      setInnerText(productTotalPrice, totalAmount);
      const totalPrice = setTotalPrice();
      setInnerText("total_amount", totalPrice);
      const taxAmount = totalPrice * 0.08;
      setInnerText("tax", taxAmount);
      const taxAndTotalAmount = totalPrice + taxAmount;

      setInnerText("total_cost", taxAndTotalAmount);
    }
  });
}
setPrice("kitkat_buy", "kitkat_quantity", "kitkat_price", "kitkat_total");
setPrice("rose_buy", "rose_quantity", "rose_price", "rose_total");
setPrice("teddy_buy", "teddy_quantity", "teddy_price", "teddy_total");

function setTotalPrice() {
  const chocolatePrice = getPrice("kitkat_total");
  const rosePrice = getPrice("rose_total");
  const teddyPrice = getPrice("teddy_total");
  const totalPrice = chocolatePrice + rosePrice + teddyPrice;
  return totalPrice;
}

document.getElementById("btn_apply").addEventListener("click", (e) => {
  const cuppon = document.getElementById("cuppon_field").value;
  if (isApply) {
    if (cuppon == "DESC101") {
      const getTotalPrice = getPrice("total_amount");
      const discountAmount = getTotalPrice - getTotalPrice * 0.1;
      document.getElementById("total_cost").innerText = discountAmount;
    } else {
      alert("Invalid Cuppon");
    }
  }
  isApply = false;
});
// function setTotalAmount(amountId, totalAmount) {
//   const amount = document.getElementById(amountId);
//   amount.innerText = totalAmount;
// }
// function getTotalBalance(totalBalanceId, totalAmount) {
//   const totalBalance = document.getElementById(totalBalanceId);
//   const totalBalanceToNum = parseFloat(totalBalance.innerText);
//   totalBalance.innerText = totalBalanceToNum + totalAmount;
// }

// function getTotalAmount(buyBtnId, productQuantity, productPrice, productTotal) {
//   document.getElementById(buyBtnId).addEventListener("click", () => {
//     const quantity = getQuantity(productQuantity);
//     const getProductPrice = getPrice(productPrice);
//     const totalAmount = getProductPrice * quantity;
//     let a = setTotalAmount(productTotal, totalAmount);
//     getTotalBalance("total_amount", totalAmount);
//   });
// }

// getTotalAmount("kitkat_buy", "kitkat_quantity", "kitkat_price", "kitkat_total");
// getTotalAmount("rose_buy", "rose_quantity", "rose_price", "rose_total");
// getTotalAmount("teddy_buy", "teddy_quantity", "teddy_price", "teddy_total");
// // function(){
// //     const kitkatTotal = parseFloat(document.getElementById('kitkat_total').innerText);
// //     const roseTotal = document.getElementById('rose_total');
// //     const teddyTotal = document.getElementById('teddy_total');

// // }
// console.log(parseFloat(document.getElementById("kitkat_total").innerText));
