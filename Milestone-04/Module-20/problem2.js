function make_avg(num1, num2, num3) {
  let sum = num1 + num2 + num3;
  let avg = sum / 3;
  return avg;
}
let num1 = 10;
let num2 = 35;
let num3 = 64;
const result = parseFloat(make_avg(num1, num2, num3).toFixed(2));
console.log(result);
