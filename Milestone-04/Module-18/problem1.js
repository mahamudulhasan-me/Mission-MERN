var fruits = ["Apple", "Banana", "Orange"];
var findBanana = fruits.indexOf("Banana");
// find index of banana
// var findBanana = fruits.indexOf("Banana");
fruits[fruits.indexOf("Banana")] = "Mango";
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.push("Watermelon");
console.log(fruits);
