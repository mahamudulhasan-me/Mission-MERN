document
  .getElementById("case_increment")
  .addEventListener("click", function () {
    const caseQuantity = getQuantity(true, "case_quantity");
    setInnerText("case_price", caseQuantity * 93);
    totalPrice();
  });
document
  .getElementById("case_decrement")
  .addEventListener("click", function () {
    const caseQuantity = getQuantity(false, "case_quantity");
    setInnerText("case_price", caseQuantity * 93);
    totalPrice();
  });
