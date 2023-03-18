const heyBro = {
  fName: "Mahmuudo",
  lName: "Hasan",
  address: "Dhaka",
  fullName: function () {
    console.log(this.fName + " " + this.lName);
    return () => {
      console.log(this.fName + " " + this.lName + " " + this.address);
    };
  },
};
heyBro.fullName()();
const myArray = [1, 2, 3, 4];
function myFunction(a, b, c, d) {
  console.log("Sum: ", a + b + c + d);
}
myFunction.apply(null, myArray);
const info = {
  name: "Sakib al hasan",
  age: 35,
  profession: {
    batter: true,
    bowling: true,
    businessman: {
      amba1: "gp",
      amba2: "bluchez",
    },
  },
};

const {
  name,
  age,
  profession: {
    batter,
    businessman: { amba1: marketer },
  },
} = info;
console.log(name);
console.log(age);
console.log(batter);
console.log(marketer);
