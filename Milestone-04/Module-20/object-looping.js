const shoppingCart = {
  headphone: 2,
  mobil: 1,
  pen: 12,
  mouse: 2,
  keyboard: 1,
  shoe: 2,
};
let allKeys = Object.keys(shoppingCart);
let allValues = Object.values(shoppingCart);
console.log(allKeys);
// for (let i = 0; i < allKeys.length; i++) {
//   var keys = allKeys[i];
//   console.log(keys, shoppingCart[keys]);
// }
for (let objectKeys in shoppingCart) {
  console.log(objectKeys, shoppingCart[objectKeys]);
}
