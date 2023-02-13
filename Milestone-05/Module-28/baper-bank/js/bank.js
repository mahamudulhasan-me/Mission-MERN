function getValue(inputId) {
  const getInputById = document.getElementById(inputId);
  const getValueAsNum = parseFloat(getInputById.value);
  getInputById.value = "";
  return getValueAsNum;
}
function getInnerText(id) {
  const getElemById = document.getElementById(id);
  const gettingTextToNum = parseFloat(getElemById.innerText);
  return gettingTextToNum;
}
function setElementInnerText(id, text) {
  return (document.getElementById(id).innerText = text);
}
document.getElementById("btn_deposit").addEventListener("click", function () {
  const depositAmount = getValue("deposit_amount");
  const depositBalance = getInnerText("deposit_balance");
  const totalBalance = getInnerText("total_balance");

  if (depositAmount > 0) {
    setElementInnerText("deposit_balance", depositAmount + depositBalance);
    setElementInnerText("total_balance", depositAmount + totalBalance);
  } else {
    alert("Please enter a positive number");
  }
});

document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdrawAmount = getValue("withdraw_amount");
  const withdrawBalance = getInnerText("withdraw_balance");
  const totalBalance = getInnerText("total_balance");
  if (withdrawAmount > totalBalance) {
    alert("Insufficient Balance");
  } else {
    if (withdrawAmount > 0) {
      setElementInnerText("withdraw_balance", withdrawAmount + withdrawBalance);
      setElementInnerText("total_balance", totalBalance - withdrawAmount);
    } else {
      alert("Please enter a positive number");
    }
  }
});

// const totalBalance = document.getElementById("total_balance");

// // functionality of deposit amount
// document.getElementById("btn_deposit").addEventListener("click", function () {
//   const depositAmount = document.getElementById("deposit_amount");
//   const depositBalance = document.getElementById("deposit_balance");
//   if (depositAmount < 0) {
//     alert("Please Enter a Positive deposit");
//   } else {
//     //   add deposit amount and deposit balance
//     const depositUpdateBalance =
//       parseFloat(depositAmount.value) + parseFloat(depositBalance.innerText);
//     depositBalance.innerText = depositUpdateBalance;

//     //   add deposit amount with total balance
//     totalBalance.innerText =
//       parseFloat(depositAmount.value) + parseFloat(totalBalance.innerText);
//     depositAmount.value = "";
//   }
// });

// // functionality of withdrawBalance
// document.getElementById("btn_withdraw").addEventListener("click", function () {
//   const withdrawAmount = document.getElementById("withdraw_amount");
//   const withdrawBalance = document.getElementById("withdraw_balance");
//   if (parseFloat(withdrawAmount.value) > parseFloat(totalBalance.innerText)) {
//     alert("Insufficient Balance");
//     withdrawAmount.value = "";
//     return;
//   } else {
//     //   add withdraw amount and withdraw balance
//     const withdrawUpdateBalance =
//       parseFloat(withdrawAmount.value) + parseFloat(withdrawBalance.innerText);
//     withdrawBalance.innerText = withdrawUpdateBalance;

//     //   add withdraw amount with total balance
//     totalBalance.innerText =
//       parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
//     withdrawAmount.value = "";
//   }
// });
