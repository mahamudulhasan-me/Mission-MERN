const numbers = [1, 2, 3, 4, 5, 6];
const output = [];
for (let num of numbers) {
  output.push(num * 2);
}
// console.log(output);
// function double(num) {
//   return num * 2;
// }
// console.log(double(2));

const double = (num) => num * 2;
const result = (numbers) => {
  const output = [];

  for (let num of numbers) {
    output.push(double(num));
  }
  return output;
};
// console.log(result(numbers));
const makeDouble = numbers.map(double);
console.log(makeDouble);
const makeTriple = makeDouble.map((x) => x * 5);
console.log(makeTriple);
