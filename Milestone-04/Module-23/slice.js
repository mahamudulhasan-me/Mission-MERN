//slice
const friendsAge = [12, 14, 15, 16, 17, 18, 19, 20];
// after slice effect do not change original array
const initial = friendsAge.slice(2, 5);
console.log(friendsAge);
// console.log(initial);

// splice
const newArray = ["mahmud", "hasan"];
// after splice effect change orginal array
const spliceInitial = friendsAge.splice(2, 4, 195, 4545, 5, 45675);
console.log(spliceInitial);
console.log(friendsAge);
