// DRY ---> Do Not Repeat Yourself
document.getElementById("btn-deposit").addEventListener("click", function () {
  /* 
    1. get the element by id
    2. get the value from the element
    3. convert string value to a number
    */
  const newDepositAmount = getInputFieldValueById("deposit-field");
<<<<<<< HEAD
  console.log(newDepositAmount);
=======
>>>>>>> b9ca85567dbe878110f8d492bd60e324bca7fd61
  /* 
    1. get previous deposit total by id

    */
  const previousDepositTotal = getTextElementValueById("deposit-total");

<<<<<<< HEAD
if(!isNaN(newDepositAmount)){
  if (newDepositAmount < 0) {
    alert("Please Enter a Positive Amount");
  } else {
    // calculate new deposit total
=======
  // calculate new deposit total
  if (isNaN(newDepositAmount) || newDepositAmount < 0) {
    alert("Please enter a positive number");
  } else {
>>>>>>> b9ca85567dbe878110f8d492bd60e324bca7fd61
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    console.log(newDepositTotal, previousDepositTotal, newDepositAmount);
    // set deposit total value
    setTextElementValueById("deposit-total", newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById("balance-total");
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById("balance-total", newBalanceTotal);
  }
<<<<<<< HEAD
})
=======
});
>>>>>>> b9ca85567dbe878110f8d492bd60e324bca7fd61
