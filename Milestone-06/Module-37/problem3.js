// 1. Print result of num1+num2 if operation is “add”
// 2. Print result of num1-num2 if operation is “subtract”
// 3. Print result of num1*num2 if operation is “multiply”
// 4. Print result of num1/num2 if operation is “divide”
// 5. Print result of num1%num2 if operation is “modulus”
// 6. Else print “Invalid operation”
function calculator(a, b, operator) {
  if (
    typeof a === "number" &&
    typeof b === "number" &&
    isFinite(a) &&
    isFinite(b)
  ) {
    if (operator === "add") {
      return a + b;
    } else if (operator === "subtract") {
      return a - b;
    } else if (operator === "multiply") {
      return a * b;
    } else if (operator === "divide") {
      return a / b;
    } else if (operator === "modulus") {
      return a % b;
    } else {
      return "Invalid operation";
    }
  } else {
    return "Enter a number";
  }
}
console.log(calculator(2, 10, "multiply"));
