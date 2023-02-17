function getValue(id) {
  const quantity = document.getElementById(id);
  const quantityToNum = parseInt(quantity.value);
  return quantityToNum;
}
function getInnerText(id) {
  const quantity = document.getElementById(id);
  const quantityToNum = parseInt(quantity.value);
  return quantityToNum;
}

function setValue(id, num) {
  document.getElementById(id).value = num;
}
function setInnerText(id, text) {
  document.getElementById(id).innerText = text;
}

// phone functionality
document
  .getElementById("phone_increment")
  .addEventListener("click", function () {
    const quantity = getValue("phone_quantity");
    setValue("phone_quantity", quantity + 1);
    setInnerText("phone_price", quantity * 1219);
  });
document
  .getElementById("phone_decrement")

  .addEventListener("click", function () {
    const quantity = getValue("phone_quantity");
    setValue("phone_quantity", quantity - 1);
  });

// case functionality
document
  .getElementById("case_increment")
  .addEventListener("click", function () {
    const quantity = getValue("case_quantity");
    setValue("case_quantity", quantity + 1);

    // setInnerText("case_quantity", quantity + 1);
  });
document
  .getElementById("case_decrement")
  .addEventListener("click", function () {
    const quantity = getValue("case_quantity");
    setValue("case_quantity", quantity - 1);
  });
