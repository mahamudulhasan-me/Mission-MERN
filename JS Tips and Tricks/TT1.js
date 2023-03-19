// Tip:1
// remove falsy values from an array
let miscellaneous = [
  "apples",
  false,
  "oranges",
  null,
  "mango",
  undefined,
  "banana",
  0,
];
const fruits = miscellaneous.filter(Boolean);
// console.log(fruits);
//  Tip: 2
//Convert any value to a boolean
//Using !! in front of a value
// console.log(!!0);
//we can also user Boolean() to achieve same
// console.log(Boolean(0));//false

// Tip: 3
//Resizing any array
let animals = ["🐕", "🐱", "🐯", "🐒"];

// we can use array's length property to resize the array
animals.length = 3;

// Tip: 4
// How to flatters a multidimensional array
let letters = ["a", "b", ["c", "d"], "j", "k"];
// console.log("first flat", letters.flat());
// for multi level array
let letters2 = [
  "a",
  "b",
  ["c", "d", "e", ["f", "g", "h"], "i"],
  "j",
  "k",
  ["l", "m", "n"],
  "o",
  "p",
];
// We can pass 'Infinity' parameter to Array.flat() function
// console.log(letters2.flat(Infinity));

// Tip: 5
//short conditionals
const captain = "Mashrafi";

const captain2 = "Shakib";

//Instead of doing this
if (captain === "Mashrafi") {
  console.log("💌");
}
// we can use &&
// captain === "Mashrafi" && console.log("🃏 ");
// captain2 === "Mashrafi" || console.log("Shakib");

// Tip: 6
// Replace all occurances of a string
const quote =
  "React is a JS framework & this framework is the most popular front-end framework right now";
//Replace all occurances of 'framwork' with 'library'
// console.log(quote.replace(/framework/g, "library"));

// Tip:7
//Log values with variable names smartly
const library1 = "jQuery";
const library2 = "React";
//we can do this
console.log({ library1 });
console.log({ library2 });

// Tip: 8
// know performance of task
const startTime = performance.now();
let container = 0;
for (let i = 0; i < 10000; i++) {
  container += i;
}
const endTime = performance.now();
console.log(endTime - startTime);
