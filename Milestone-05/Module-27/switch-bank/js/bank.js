const totalBalance = document.getElementById("total_balance");
const totalBalanceToNum = parseFloat(totalBalance.innerText);

document.getElementById("btn_deposit").addEventListener("click", function () {
  let depositAmount = document.getElementById("deposit_amount");
  let depositAmountToNum = parseFloat(depositAmount.value);

  let depositBalance = document.getElementById("deposit_balance");
  let depositBalanceToNum = parseFloat(depositBalance.innerText);
  if (depositAmountToNum > 0) {
    depositBalance.innerText = depositAmountToNum + depositBalanceToNum;
    totalBalance.innerText = totalBalanceToNum + depositAmountToNum;
  } else {
    alert("Please enter a positive number");
  }
  depositAmount.value = "";
});

document.getElementById("btn_withdraw").addEventListener("click", function () {
  let withdrawAmount = document.getElementById("withdraw_amount");
  let withdrawAmountToNum = parseFloat(withdrawAmount.value);

  if (totalBalanceToNum < withdrawAmountToNum) {
    alert("Insufficient Balance");
    // withdrawAmount.value = "";
    return;
  } else {
    let withdrawBalance = document.getElementById("withdraw_balance");
    let withdrawBalanceToNum = parseFloat(withdrawBalance.innerText);

    if (withdrawAmountToNum > 0) {
      withdrawBalance.innerText = withdrawAmountToNum + withdrawBalanceToNum;
      totalBalance.innerText = totalBalanceToNum - withdrawAmountToNum;
    } else {
      alert("Please enter a positive number");
    }
    withdrawAmount.value = "";
  }
});
