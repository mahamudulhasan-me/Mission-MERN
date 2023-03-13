// Which one is true about map and forEach when called on an empty array?
const emptyArray = [];
const forMap = emptyArray.map((x) => x);
const foreach = emptyArray.forEach((x) => x);
// console.log(forMap);
// console.log(foreach);

if (0) {
  console.log("true");
}
const name = "Hero";
const age = 34;
const person = { name, age };
// console.log(person);
const adventurer = { name: "Alice", cat: { name: "Lucy" } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);
let persons = null;
// console.log(persons ? persons : "person is null");
const myArray = [1, 3, 5];
const evenNumbers = myArray.filter((x) => x % 2 === 0);
console.log(evenNumbers);
