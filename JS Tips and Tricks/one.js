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
// console.log(Boolean(0));

// Tip: 3
//Resizing any array
let animals = ["🐕", "🐱", "🐯", "🐒"];

// we can use array's length property to resize the array
animals.length = 3;

// Tip: 4
// How to flatters a multidimensional array
let letters = ["a", "b", ["c", "d"], "j", "k"];
console.log(letters.flat);
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
console.log(letters2.flat(Infinity));
