// // first way
function secondLargest(yourArray) {
  let sortingArray = yourArray.sort(function (a, b) {
    return a - b;
  });
  let secondLargest = sortingArray[1];
  return secondLargest;
}
// // second way
// function findSecLargest(array) {
//   let largest = array[0];
//   let secondLargest = array[1];
//   if (largest < secondLargest) {
//     [largest, secondLargest] = [secondLargest, largest];
//   }
//   for (let i = 2; i < array.length; i++) {
//     if (largest < array[i]) {
//       secondLargest = largest;
//       largest = array[i];
//     } else if (secondLargest < array[i]) {
//       secondLargest = array[i];
//     }
//   }
//   return secondLargest;
// }

function findSecLargest(array) {
  let largest = array[0];
  let secondLargest = array[1];
  if (largest < secondLargest) {
    [largest, secondLargest] = [secondLargest, largest];
  }
  for (let i = 2; i < array.length; i++) {
    if (largest < array[i]) {
      secondLargest = largest;
      largest = array[i];
    } else if (secondLargest < array[i]) {
      secondLargest = array[i];
    }
  }
  return secondLargest;
}

const myArray = [10, 48, 5, 4, 64, 88, 79, 66, 44, 5, 47, 54, 99, 100];
const result = findSecLargest(myArray);
console.log(result);
console.log("He is" + (2021 - 1999) + "years old");
