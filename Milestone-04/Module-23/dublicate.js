function removeDuplicate(names) {
  let uniqueValue = [];
  for (let i = 0; i < names.length; i++) {
    if (uniqueValue.includes(names[i]) === false) {
      uniqueValue.push(names[i]);
    }
  }
  return uniqueValue;
}
const names = [
  "abul",
  "babi",
  "kabul",
  "ebul",
  "chabul",
  "libul",
  "abul",
  "kabul",
  "iskul",
  "ebul",
];
let result = removeDuplicate(names);
console.log(result);
