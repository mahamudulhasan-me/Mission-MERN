function even_odd(number) {
  if (number % 2 == 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
let number = 36;
const result = even_odd(number);
console.log(result);

function odd_even(number) {
  if (number % 2 != 0) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
odd_even(99);
