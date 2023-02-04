const rollNumbers = [1, 2, 5, 8, 9, 7, 4, 6, 3, 1, 5, 1, 42, 6];
const result = rollNumbers.sort(function (a, b) {
  return b - a;
});
console.log(result);
