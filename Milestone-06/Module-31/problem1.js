// 1) Write an arrow function that will take 3 parameters, will multiply
// the parameters and will return the result.
const multiply = (num1, num2, num3) => num1 * num2 * num3;
console.log(multiply(2, 3, 4));
// 2) Write the following sentence in three lines and print the result:
// I am a web developer. I love to code. I love to eat biryani.
// const threeLines = `
//         I am a web developer.
//         I love to code.
//         I love to eat biryani`;
const threeLines =
  "I am a web developer. I love to code. I love to eat biryani";
const threeNewLines = threeLines.split(".");
for (let line of threeNewLines) {
  console.log(line);
}

// 3) Write an arrow function that will take 2 parameters: One parameter
// will come from you and the other parameter will be a default
// parameter. Add these two parameters and return the result.
const add = (num1, num2 = 5) => num1 + num2;
console.log(add(2));
