document.getElementById("case_ince").addEventListener("click", function () {
  const caseQuantity = quantityCount(true, "case_quantity");
  setInnerText("case_price", caseQuantity * 59);
  subtotal();
});
document.getElementById("case_dec").addEventListener("click", function () {
  const caseQuantity = quantityCount(false, "case_quantity");
  setInnerText("case_price", caseQuantity * 59);
  subtotal();
});
