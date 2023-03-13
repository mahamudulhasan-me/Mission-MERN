// ১. কিভাবে let, const দিয়ে ভেরিয়েবল লিখতে হয়,কখন কোনটা ইউজ করে তুমি কি জানো ?
// var নামক একটা জিনিস আছে সেটাও জানতে হবে।
{
  var num = 10;
}
{
  let num2;
  num2 = 20;
  const num3 = 30;
  //   console.log(num2);
  //   console.log(num3);
  num2 = 50;
  //   console.log(num2);
}
// console.log(num);

const marks = 56;
if (marks >= 80) {
  console.log("You Got A+");
} else if (marks >= 70) {
  console.log("You Got A");
} else if (marks >= 60) {
  console.log("You Got A-");
} else if (marks >= 50) {
  console.log("You Got B");
} else if (marks >= 40) {
  console.log("You Got C");
} else if (marks >= 33) {
  console.log("You Got D");
} else {
  console.log("You Got F");
}

const myArray = [1, { a: 2, b: 3 }, 4, [5, 6]];
const arrayLength = myArray.length;
myArray[0] = 9;
myArray.push(88);
myArray.pop();
myArray.unshift(1);
myArray.shift();
// console.log(Array.isArray(myArray));
const myNewArray = [10, 20, 30, 40, 50, 60];
const arraySlice = myNewArray.slice(2, 5);
const arrayJoin = myNewArray.join("*");
const arraySplice = myNewArray.splice(-2, 0, 80);
// const arrayReverse = myNewArray.reverse();
// console.log(myNewArray);
const arrayReduce = myNewArray.reduce((a, b) => {
  //   console.log(a, b);
  const sum = a + b;
  //   console.log(sum);
  return sum;
}, 0);
// console.log(arraySplice);
// console.log(arrayReduce);

// while loop
let sum = 0;
let n = 1;
while (n <= 5) {
  sum += n;
  n++;
}
// console.log(sum);
// do while loop
let sum2 = 0;
let n2 = 1;
do {
  sum2 += n2;
  n2++;
} while (n2 <= 5);
// console.log(sum2);
let sum3 = 0;
for (let i = 1; i <= 5; i++) {
  sum3 += i;
}
// console.log(sum3);

function myFunction(num1, num2) {
  const sum = num1 + num2;
  return sum;
}
// console.log(myFunction(10, 20));

const myObject = {
  fName: "John",
  lName: "Doe",
  sub: ["cse", "eee", "math"],
  info: {
    email: "envkt@example.com",
    mob: 9999999999,
  },
};
console.log(myObject["sub"][3]);
