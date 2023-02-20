// Write an arrow function where it will do the following:
// a) It will take two array inputs
// b) Combine the two arrays and assign them in a new array
// c) Find the maximum number from the new array and return the
// result

const maxInArray = (arr1, arr2) => {
  const combineArray = [...arr1, ...arr2];
  return Math.max(...combineArray);
};
const arr1 = [1, 2, 33, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
console.log(maxInArray(arr1, arr2));
