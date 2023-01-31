function inchToFeet(inch) {
  let feet = parseFloat((inch / 12).toFixed(2));
  return feet;
}
let inch = 84;
let myInchToFeet = inchToFeet(inch);
console.log(myInchToFeet);
