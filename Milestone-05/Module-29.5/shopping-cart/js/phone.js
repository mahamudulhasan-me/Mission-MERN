document.getElementById("phone_ince").addEventListener("click", function () {
  const productQuantity = quantityCount(true, "phone_quantity");
  setInnerText("phone_price", productQuantity * 1219);
  subtotal();
});
document.getElementById("phone_dec").addEventListener("click", function () {
  const productQuantity = quantityCount(false, "phone_quantity");
  setInnerText("phone_price", productQuantity * 1219);
  subtotal();
});
