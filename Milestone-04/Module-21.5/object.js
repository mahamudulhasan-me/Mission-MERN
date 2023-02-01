const person = {
  fName: "Mahmudul",
  lName: "Hasan",
  age: 24,
  height: 5.6,
  weight: "60kg",
  fullName: function () {
    let fullName = this.fName + this.lName;
    return fullName;
  },
};
let allKeys = Object.keys(person);
let allValues = Object.values(person);
for (let i = 0; i < allKeys.length; i++) {
  console.log(person[allKeys[i]]);
}
for (let leito in person) {
  console.log(leito, person[leito]);
}
