const person = {
  fName: "John",
  lName: "Doe",
};
const person2 = {
  fName: "John",
  lName: "Doe",
};
// first way to compare two object
// we can convert this comparable object to string by json stringify
let nokolPeron = JSON.stringify(person);
let nokolPeron2 = JSON.stringify(person2);

// section way to compare two object

function comparePerson(person, person2) {
  for (let prsn in person) {
    if (person[prsn] === person2[prsn]) {
      return true;
    } else {
      return false;
    }
  }
}
console.log(comparePerson(person, person2));
