// 1. Swaping Values
let array = [1, 2, 3, 4, 5];
//temp variable
// let temp = array[0];
// array[0] = array[5];
// array[5] = temp;
// // console.log(array);
// array destructuring
// [array[0], array[4]] = [array[4], array[0]];
// console.log(array);
let a = 1;
let b = 2;
// [a, b] = [b, a];
// console.log(a, b);
//match
b = a + (a = b) - b;
// console.log(a, b);
// -
// 2.copy to Clipboard
//3. destructuring alias
const language = {
  name: "JavaScript",
  founded: 1995,
  founder: "Brendan Eich",
};
const { name: nam, founder: abiskarok } = language;
console.log(nam, abiskarok);

// 4. get value as data type
// const element = document.querySelector("#number").valueAsNumber;

// 5. remove duplicate from array
const myArray = [1, 2, 3, 1, 5, 6, 4, 5, 6];
const newArray = [...new Set(myArray)];
console.log(newArray);
//6. compare tow arrays by value
// const hasSameElement = (a, b) => {
//   return (
//     a.length === b.length &&
//     a.every((v, i) => {
//       return v === b[i];
//     })
//   );
// };

// console.log(hasSameElement([1, 2, 3], [1, 2, 3]));

const hasSameElement = (a, b) => {
  return (
    a.length === b.length &&
    a.every((v, i) => {
      return v === b[i];
    })
  );
};
// console.log(hasSameElement([1, 2, 3], [1, 2, 3]));

// 7. shuffling array
const myNumArray = [1, 2, 3, 4, 5, 6];
// console.log(myNumArray.sort(Math.random() - 0.5));

// 8.comma operator
let x = 1;
x = (x++, x);
// console.log(x);
const y = (2, 3);
// console.log(y);

let hey = [[1, 2, 3, 4], [3, 4, 5], [5, 6], [7]];
for (let i = 0, j = 3; i <= 3; i++, j--) {
  //   console.log("a", hey[i][j]);
}
