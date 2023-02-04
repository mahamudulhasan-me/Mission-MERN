const myArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 102];

function filterAfter80(numbers) {
  let initial = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 80) {
      initial.push(numbers[i]);
    }
  }
  return initial;
}
console.log(filterAfter80(myArray));
