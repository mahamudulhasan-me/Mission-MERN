const person = {
  fullInfo: function (district, city) {
    return `My Name ${this.fName} ${this.lName}, Address: ${district} ${city}`;
  },
};
const person2 = {
  fName: "Mahamudul",
  lName: "Hasan",
};
const myInfo = person.fullInfo.apply(person2, ["Dhaka", "Uttara"]);
console.log(myInfo);
