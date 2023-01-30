function makeArray_Avg(myArray) {
  let sum = 0;
  for (let i = 0; i < myArray.length; i++) {
    sum += myArray[i];
    avg = sum / myArray.length;
  }
  return avg;
}
const myArray = [20, 80, 50, 7, 48, 56, 15];
const result = makeArray_Avg(myArray);
console.log(result);
