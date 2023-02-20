const users = [{ id: 1, name: "John", job: "Developer" }];
// console.log(users[0].name);
const data = {
  count: 5000,
  data: [
    { id: 1, name: "John", job: "Developer" },
    { id: 2, name: "Jane", job: "Doctor" },
  ],
};
// console.log(data.data[0].job);
const userAddress = {
  id: 1,
  name: "John",
  job: "Developer",
  address: {
    city: "New York",
    state: {
      country: "USA",
      state: "NY",
    },
    zip: 10001,
  },
};

console.log(userAddress.address.stat?.country);
console.log(userAddress.address.state.country);
