const phone = [
  {
    name: "Xiaomi",
    camera: "12mpx",
    memory: "4/64",
    price: 18000,
    color: "Silver",
  },
  {
    name: "Iphone",
    camera: "16mpx",
    memory: "4/64",
    price: 118000,
    color: "Silver",
  },
  {
    name: "Realmi",
    camera: "12mpx",
    memory: "4/64",
    price: 8000,
    color: "Silver",
  },
  {
    name: "OnePlus",
    camera: "50mpx",
    memory: "4/64",
    price: 28000,
    color: "Silver",
  },
  {
    name: "Oppo",
    camera: "29mpx",
    memory: "4/64",
    price: 12000,
    color: "Silver",
  },
  {
    name: "Infinix",
    camera: "18mpx",
    memory: "4/64",
    price: 1000,
    color: "Silver",
  },
];
function chepestPhone(yourArray) {
  let lowPrice = yourArray[0].price;
  for (let i = 0; i < yourArray.length; i++) {
    if (lowPrice > yourArray[i].price) {
      lowPrice = yourArray[i].price;
    }
  }
  return lowPrice;
}
const myPhone = chepestPhone(phone);
console.log(myPhone);
