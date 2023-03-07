/* 
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withdraw Total and set the value
4-5: set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");
  const previousBalanceTotal = getTextElementValueById("balance-total");
  const previousWithdrawTotal = parseFloat(
    getTextElementValueById("withdraw-total")
  );

  if (newWithdrawAmount < 0) {
    alert("Withdraw amount must be greater than 0");
  } else {
    if (newWithdrawAmount > previousBalanceTotal) {
      alert("You can't withdraw more than your balance");
    } else {
      const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
      setTextElementValueById("withdraw-total", newWithdrawTotal);
      const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
      setTextElementValueById("balance-total", newBalanceTotal);
    }
  }
});
