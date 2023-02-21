// 2) You are given an array say: [33, 50, 79, 78, 90, 101, 30 ]. Now
// return/get all the elements which are divisible by 10 using
// array.filter() method.
const myArray = [33, 50, 79, 78, 90, 101, 30];
const divisibleBy10 = myArray.filter((num) => num % 10 === 0);
console.log(divisibleBy10);
//
// 3) Now do the same task of question 2. But do this using array.find()
// method. Then compare the output of question 2 & question 3.
const divisibleBy10_2 = myArray.find((num) => num % 10 === 0);
console.log(divisibleBy10_2);
