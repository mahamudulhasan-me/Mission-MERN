// Write an arrow function where it will do the following:
// a) Square each array element
// b) Calculate the sum of the squared elements
// c) Return the average of the sum of the squared elements

const squareAverage = (numArray) => {
  const squareArray = [];
  let sumResult = 0;
  for (let num of numArray) {
    squareArray.push(num ** 2);
    for (let squareValue of squareArray) {
      sumResult += squareValue;
    }
  }
  return sumResult / squareArray.length;
};
const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(squareAverage(numbers));
