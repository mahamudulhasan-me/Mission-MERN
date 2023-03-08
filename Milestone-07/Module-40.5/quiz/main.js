// document.getElementById("btn").addEventListener("click", () => {
//   const text = document.getElementById("text");
//   //   text.classList.add("text-green-500");
//   //   text.className = "text-rose-500";
//   text.setAttribute("class", "text-green-500");
// });
const sum = (p, q) => parseInt(p) + q;
const total = sum("h", 1);
// console.log(total);

const marks = 60;
const resubmit = -5;
// console.log(!(marks > 0 || resubmit > 0));

const person = {
  name: "hero",
  id: 101,
  address: "BD",
  postalCode: 40321,
};
// console.log(Object.keys(person).length);
const animals = ["cat", "dog", "rat"];
// console.log(animals.includes("Cat"));
const unique = (array) => array.indexOf("21");
const array = [2, 3, 4, 5, 2];
// console.log(unique(array));
const add = (para1, para2) => para2 + para1;
// console.log(add("2", 3));
const b = 6;
// b = 6;
// console.log(b);
const colors = { mango: "green", grapes: "black", organe: "yellow" };
console.log(colors[grapes]);
