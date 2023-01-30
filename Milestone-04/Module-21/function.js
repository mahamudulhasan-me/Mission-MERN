function inchTOFeet(inches) {
  let result = inches / 12;
  return result;
}
let myInches = 65;
let myHeight = inchTOFeet(myInches);
console.log("Amar Height: ", myHeight);
let otherInches = 80;
let otherHeight = inchTOFeet(otherInches);
console.log("Other Height: ", otherHeight);
