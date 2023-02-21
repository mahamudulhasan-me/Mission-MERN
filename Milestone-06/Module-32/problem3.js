// You have an array [ 1, 9, 17, 22 ]. Add the all elements
// of this array and give output. Do this using for loop &
// array.reduce() method.
const myArray = [1, 9, 17, 22];
// add by for loop:
let result = 0;
for (let num of myArray) {
  result += num;
}
console.log(result);
// add by array.reduce():
const output = myArray.reduce((previous, current) => previous + current, 0);
console.log(output);
