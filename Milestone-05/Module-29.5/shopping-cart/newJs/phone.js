document
  .getElementById("phone_increment")
  .addEventListener("click", function () {
    const phoneQuantity = getQuantity(true, "phone_quantity");
    setInnerText("phone_price", phoneQuantity * 1219);
    totalPrice();
  });
document
  .getElementById("phone_decrement")
  .addEventListener("click", function () {
    const phoneQuantity = getQuantity(false, "phone_quantity");
    setInnerText("phone_price", phoneQuantity * 1219);
    totalPrice();
  });
