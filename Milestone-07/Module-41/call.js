const person = {
  fullName: function (city, state) {
    console.log(
      this.firstName + " " + this.lastName,
      "city:",
      city,
      "state:",
      state
    );
  },
};
const mahmud = {
  firstName: "Mahmud",
  lastName: "Hasan",
};

person.fullName.call(mahmud, "Dahaka", "Uttara");
