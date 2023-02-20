// function declaration
function add(a, b) {
  const total = a + b;
  return total;
}
//  function expression
const add1 = (a, b) => a + b;
console.log(add1(1, 2));
// arrow function
const add2 = (a, b) => a + b;
console.log(add2(1, 2));

// multiLine arrow function
const average = (a, b) => {
  const multipy = a * b;
  const result = multipy / 2;
  return result;
};
console.log(average(2, 2));
