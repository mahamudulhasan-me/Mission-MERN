const numbers = [1, 2, 3, 4, 5, 6];
const dividedBy2 = numbers.map((n) => n / 2);
// console.log(dividedBy2);
const friends = ["John", "Jane", "Mary5"];
const firstLetter = friends.map((friend) => friend[0]);
// console.log(firstLetter);
const longestName = friends.map((friend) => friend.length);
// console.log(longestName);
// console.log(Math.max(...longestName));
const products = [
  { id: 1, name: "apple", price: 10 },
  { id: 2, name: "banana", price: 20 },
  { id: 3, name: "cherry", price: 30 },
  { id: 4, name: "grape", price: 40 },
];
const productName = products.map((p) => p.name);
console.log(productName);
friends.forEach((friend) => console.log(`Hey ${friend} How are you?`));
