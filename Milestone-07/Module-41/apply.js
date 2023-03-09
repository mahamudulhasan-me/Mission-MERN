const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function (city, state) {
    console.log(
      this.firstName + " " + this.lastName,
      "city: " + city,
      "state: " + state
    );
  },
};
person.fullName("New York", "NY");

const person2 = {
  firstName: "Mahmud",
  lastName: "Hasan",
};
person.fullName.apply(person2, ["Dhaka", "Uttara"]);
const numArray = [99, 1, 2, 3, 4, 5, 6, 78];
const maxNum = Math.max.apply(null, numArray);
console.log(maxNum);
