function findOdd(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}

function addOddNum(oddArray) {
  let result = 0;
  for (let i = 0; i < oddArray.length; i++) {
    if (oddArray[i] % 2 !== 0) {
      result += oddArray[i];
    }
  }
  return result;
}
let myArray = [10, 15, 13, 18, 29, 28, 26, 25, 33, 39, 35, 36, 38, 40, 49];
let findOddNum = findOdd(myArray);
console.log(findOddNum);
console.log(addOddNum(findOddNum));
