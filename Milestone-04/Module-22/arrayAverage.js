function arrayAverage(yourArray) {
  let result = 0;

  for (let i = 0; i < yourArray.length; i++) {
    result += yourArray[i];
  }
  let avg = result / yourArray.length;
  return avg;
}
const myArray = [10, 5, 15, 4, 48, 4, 78, 98];
console.log(arrayAverage(myArray));
