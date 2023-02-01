// Math.power
const result = Math.pow(2, 3);
// console.log(result);
// Math.abs
let mark1 = 64;
let mark2 = 80;
let diff = Math.abs(mark1 - mark2);
// console.log(diff);
// if (diff < 5) {
//   console.log("Yes guys can be friend");
// } else {
//   console.log("you guys stay apart");
// }

//? math.round
let myNum = 7.65646;
myNum = Math.round(myNum);
// console.log(myNum);
let myNum2 = 7.313;
myNum2 = Math.round(myNum2);
// console.log(myNum2);
let myNum3 = Math.ceil(2.000001);
let myNum4 = Math.floor(45.5452);
// console.log(myNum4);

// ==============================
//             random
// ===============================
// console.log(Math.random());
let myRandom = Math.round(Math.random() * 10);
for (let i = 0; i < 20; i++) {
  let myRandom = Math.round(Math.random() * 6);
  console.log(myRandom);
}
