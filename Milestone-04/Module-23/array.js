// check array by Array.isArray method
const myArray = [10, 50, 78, 5, 79, 246];
// console.log(typeof myArray);
// console.log(Array.isArray(myArray));
const myNum = myArray.includes(550);
// console.log(myNum);
if (myArray.indexOf(50) !== -1) {
  //   console.log(true);
}
const againMyArray = [41, "mahmdu", 545, "hasan"];
const newArray = myArray.concat(againMyArray);
console.log(newArray);
