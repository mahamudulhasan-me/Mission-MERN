// total marks as a input
var mathematics = 75.25;
var biology = 65;
var chemistry = 80;
var physics = 35.45;
var bangla = 99.5;
// total marks
var totalMark = mathematics + biology + chemistry + physics + bangla;
// find average number
var averageNumber = totalMark / 5;
// fixed two number after decimal point
averageNumber = averageNumber.toFixed(2);
console.log("Average Marks: " + averageNumber);
