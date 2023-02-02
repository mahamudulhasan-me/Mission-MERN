// Which line will generate a random number between 0 to 10?
const randomNum = Math.round(Math.random() * 10);
// console.log(randomNum);
// If you are adding all the numbers of an array and storing the total in a variable called “total”.
//  What should be the initial value of total?
let total = 0;
let myArray = [10, 20, 4, 15, 659, 2, 464];
for (let i = 0; i < myArray.length; i++) {
  total += myArray[i];
}
// console.log(total);
// Find the largest?
var a = 5;
var b = 8;
var c = 4;
var d = 6;
var highest = Math.max(a, b, c, d);
// console.log(highest);
// Which of the following can be found by applying Math.floor for 13.67?
// console.log(Math.floor(13.67));
// what would be the output?

let number = -78;
number = -89;
const answer = Math.abs(number);
// console.log(answer);
// Which condition will print hello?

var a = 2;
var b = 3;
if (a < b) {
  //   console.log("Hello");
}
// What would be the output of the code below?

function add(a, b) {
  return a + b;
}
console.log(add("adam" + "eve", "hey"));
