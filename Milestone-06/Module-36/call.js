const person = {
  fullName: function () {
    return this.fName + " " + this.lName;
  },
  address: function (currentAddress, district) {
    return `My Permanent address is: ${district} now i'm living at ${currentAddress}`;
  },
};
const person1 = {
  fName: "John",
  lName: "Doe",
};
const myName = {
  fName: "Mahamudul",
  lName: "Hasan",
};
// person.fullName.call(person1);
// person.fullName.call(myName);
const johnAddress = person.address.call(person1, "New York", "USA");
console.log(johnAddress);
