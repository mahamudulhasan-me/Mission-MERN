// function declaration
function bringSingara(taka) {
  let price = 10;
  let quantity = taka / price;
  return quantity;
}
let myMoney = 90;
let result = bringSingara(myMoney);
console.log("You deserve ", result, "pics singara");

function sumTwoNumber(num1, num2) {
  var result = num1 + num2;
  return result;
}
let summation = sumTwoNumber(10, 20);
console.log("Summation:", summation);
