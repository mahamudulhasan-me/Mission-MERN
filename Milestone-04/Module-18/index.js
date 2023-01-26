var numList = [70, 81, 53, 79, 20];
// find element by index number
var element = numList[0];
console.log(element);
// set new value in consisting index value
numList[0] = 69;
console.log(numList);
var nextElement = numList[3];
console.log(nextElement);
numList[3] = 96;
console.log(numList);

// find index number by elemtn
var findElement = numList.indexOf(69);
console.log(findElement);
console.log(numList.indexOf(53));
