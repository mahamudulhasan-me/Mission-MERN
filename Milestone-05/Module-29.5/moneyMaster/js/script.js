function getValue(id) {
  const items = document.getElementById(id);
  const itemsValueToNum = parseFloat(items.value);
  return itemsValueToNum;
}
document
  .getElementById("btn_calculate")
  .addEventListener("click", function (e) {
    const food = getValue("food");
    const rent = getValue("rent");
    const clothes = getValue("clothes");
    const income = getValue("income");
    const totalExpenses = food + rent + clothes;
    if (totalExpenses > income) {
      alert("Sorry, you don't have enough money");
    } else {
      if (isNaN(totalExpenses)) {
        alert("Please enter a number");
      } else {
        //   calculate total expenses
        document.getElementById("total_expenses").innerText = totalExpenses;

        //   balance after total expenses subtract from income
        const balanceAfterExpenses =
          parseFloat(income) - parseFloat(totalExpenses);
        document.getElementById("balance").innerText = balanceAfterExpenses;
      }
    }
  });
document.getElementById("save").addEventListener("click", function () {
  const income = getValue("income");
  const savingRate = getValue("saving_rate");
  const balance = document.getElementById("balance");
  const balanceToNum = parseFloat(balance.innerText);

  const savingAmount = (savingRate * income) / 100;
  if (savingRate > 100) {
    alert("Please enter a saving rate less than 100");
  } else {
    if (isNaN(savingAmount)) {
      alert("Please enter a Saving Rate");
    } else {
      if (savingAmount > balanceToNum) {
        alert("Sorry, you don't have enough money");
      } else {
        document.getElementById("saving_amount").innerText = savingAmount;

        const balanceAfterExpenses =
          document.getElementById("balance").innerText;
        document.getElementById("remaining_balance").innerText =
          balanceAfterExpenses - savingAmount;
      }
    }
  }
});
let allInput = document.querySelectorAll('input[type="number"]');
for (let input of allInput) {
  input.addEventListener("keyup", function (e) {
    if (e.target.value < 0) {
      alert("Please enter a number");
      e.target.value = "";
    }
  });
}
