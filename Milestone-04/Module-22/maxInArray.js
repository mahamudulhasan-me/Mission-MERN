function maxInArray(yourArray) {
  let max = yourArray[0];
  for (let i = 0; i < yourArray.length; i++) {
    if (yourArray[i] > max) {
      max = yourArray[i];
    }
  }
  return max;
}
const myArray = [10, 996, 78, 48, 5778, 15, 79, 99, 105];
console.log(maxInArray(myArray));
