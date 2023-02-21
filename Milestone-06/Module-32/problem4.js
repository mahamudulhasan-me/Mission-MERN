// Challenging Follow above array of objects. So, you have 3 objects as
// array element. Can you find out the total sum from here?

// 20 + 15 + 22 = 57 . The output will be 57

// What are you thinking? Yeah! Do it with for loop. I know you can do it.
// But! Wait !! Wait !!! Do the same task using array.reduce() method.
const girls = [
  { name: "mina", age: 20 },
  { name: "jane", age: 15 },
  { name: "tina", age: 22 },
];
let totalAge = 0;
for (let girl of girls) {
  totalAge += girl.age;
}
console.log(totalAge);
const age = girls.reduce((acc, current) => acc + current.age, 0);
console.log(age);
