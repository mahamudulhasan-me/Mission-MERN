// const myCart = [
//   { name: "Pant", price: 700 },
//   { name: "Shirt", price: 700 },
//   { name: "Panjabi", price: 1400 },
// ];
// function cartTotalPrice(cart) {
//   let total = 0;
//   for (let i = 0; i < cart.length; i++) {
//     total += cart[i].price;
//   }
//   return total;
// }
// const totalPrice = cartTotalPrice(myCart);
// console.log(totalPrice);

// calculate shopping cart with quantity
const myCart = [
  { name: "Pant", price: 700, quantity: 3 },
  { name: "Shirt", price: 700, quantity: 2 },
  { name: "Panjabi", price: 1400, quantity: 1 },
];
function cartTotalPrice(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    let quantityWithPrice = cart[i].price * cart[i].quantity;
    total += quantityWithPrice;
  }
  return total;
}
const totalPrice = cartTotalPrice(myCart);
console.log(totalPrice);
