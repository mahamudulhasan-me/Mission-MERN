const products = [
  { id: "566", price: 1300, quantity: 4, brand: "Автомобиль" },
  { name: "Сканер", price: 2700, quantity: 2, brand: "Apple" },
  { name: "oppo", price: 400, quantity: 3, brand: "Магазин" },
  { name: "Захват", price: 1200, quantity: 8, brand: "Mi" },
];
// const allBrands = products.map((products) => products.brand);
// console.log(allBrands);
const object1 = {
  a: "somestring",
  b: 42,
};
// console.log(Object.entries(object1));
const deleteOppo = products.filter((products) => products.id !== "566");
console.log(deleteOppo);
