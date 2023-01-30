// function totalCost(products) {
//   let result = 0;
//   for (let i = 0; i < products.length; i++) {
//     result += products[i].price;
//   }
//   return result;
// }
// const shoppingCart = [
//   { name: "Dano Milk", price: 500 },
//   { name: "Taaza Tea", price: 200 },
//   { name: "Fresh Sugar", price: 300 },
// ];
// const result = totalCost(shoppingCart);
// console.log(result);

function average(avg) {
  //write your code here
  // don't forget to write return
  let result = parseFloat((avg / 5).toFixed(2));
  return result;
}
var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;

const totalMark = Mathematics + Biology + Chemistry + Physics + Bangla;
average(totalMark);
