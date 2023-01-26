var numList = [100, 89, 70, 675, 22, 80];
var playerList = ["sakib al hasan", "tamim", "rahman", "meraz"];
// push elemnt in arrays[by push added item in last index]
console.log(playerList);
console.log(playerList.length);
playerList.push("liton das");
console.log(playerList);
console.log(playerList.length);

// add item in begging of the array
playerList.unshift("najmul", "morteza");
console.log(playerList);

// pop element in arrays[by pop subtract item from last index]
playerList.pop();
console.log(playerList);
var popItem = numList.pop();
console.log(numList);
console.log(popItem);

// remove first item form array
playerList.shift();
playerList.shift();
console.log(playerList);
