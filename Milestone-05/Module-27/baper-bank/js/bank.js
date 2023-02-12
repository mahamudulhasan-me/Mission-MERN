const totalBalance = document.getElementById("total_balance");

// functionality of deposit amount
document.getElementById("btn_deposit").addEventListener("click", function () {
  const depositAmount = document.getElementById("deposit_amount");
  const depositBalance = document.getElementById("deposit_balance");
  //   add deposit amount and deposit balance
  const depositUpdateBalance =
    parseFloat(depositAmount.value) + parseFloat(depositBalance.innerText);
  depositBalance.innerText = depositUpdateBalance;

  //   add deposit amount with total balance
  totalBalance.innerText =
    parseFloat(depositAmount.value) + parseFloat(totalBalance.innerText);
  depositAmount.value = "";
});

// functionality of withdrawBalance
document.getElementById("btn_withdraw").addEventListener("click", function () {
  const withdrawAmount = document.getElementById("withdraw_amount");
  const withdrawBalance = document.getElementById("withdraw_balance");
  //   add withdraw amount and withdraw balance
  const withdrawUpdateBalance =
    parseFloat(withdrawAmount.value) - parseFloat(withdrawBalance.innerText);
  withdrawBalance.innerText = withdrawUpdateBalance;

  //   add withdraw amount with total balance
  totalBalance.innerText =
    parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount.value);
  withdrawAmount.value = "";
});
