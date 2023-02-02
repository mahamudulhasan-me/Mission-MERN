// function reverseByLetter(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   return result;
// }
function reverseByword(str) {
  let splitWord = str.split(" ");
  let result = [];
  for (let i = splitWord.length - 1; i >= 0; i--) {
    result.push(splitWord[i]);
  }
  return result;
}
let myString = "Hey Bro How Are You?";
console.log(reverseByword(myString));
