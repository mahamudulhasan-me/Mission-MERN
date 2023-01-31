// function leapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         console.log("This is a leap year");
//       } else console.log("THis is not a leap year.");
//     } else console.log("This is a leap year");
//   } else console.log("This is not a leap year.");
// }
// let year = 2021;
// let myYear = leapYear(year);

function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isLeapYear(2000));
console.log(isLeapYear(2020));
console.log(isLeapYear(2100));
