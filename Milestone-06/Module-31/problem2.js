// Write an arrow function where it will do the following:
// a) It will take an array where the array elements will be the
// name of your friends
// b) Check if the length of each element is even, push elements
// with even length to a new array and return the result
const friendsName = [
  "Jane",
  "Johns",
  "Mary",
  "Mike",
  "Michelle",
  "Lily",
  "Sarah",
];
const evenLength = (fNames) => {
  const evenLength = [];
  for (let fName of fNames) {
    if (fName.length % 2 === 0) {
      evenLength.push(fName);
    }
  }
  return evenLength;
};
console.log(evenLength(friendsName));
