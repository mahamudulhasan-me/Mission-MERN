let first = 5;
let second = 7;
console.log(first, second);

// swapping with temp variable
let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

// swapping with destructure
// [first, second] = [second, first];
// console.log(first, second);
first = first + second;
second = first - second;
first = first - second;
console.log(first, second);
