// 1) You have an odd array (array with odd numbers). [ 1, 3, 5, 7, 9 ].
// Now convert this array into an even array (array with even
// numbers). [ 2, 4, 6, 8, 10 ]. Do this using for loop & array.map()
// method. Hints: add one to any odd number and it will become an even
// number.
const oddArray = [1, 3, 5, 7, 9];
// by for loop:
let evenArray = [];

for (num of oddArray) {
  evenArray.push(num + 1);
}
// console.log(evenArray);
// by map:
const evenArrayMapped = oddArray.map((n) => n + 1);
console.log(evenArrayMapped);
