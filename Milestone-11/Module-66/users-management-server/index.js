const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 6969;

app.use(cors());
app.use(express.json());

const users = [
  { _id: 1, name: "Sara Lee", email: "sara.lee@gmail" },
  { _id: 2, name: "Elizabeth", email: "elizabeth@gmail" },
  { _id: 3, name: "Maria", email: "maria@gmail" },
];

app.get("/", (req, res) => {
  res.send("User management system is running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser._id = users.length + 1;
  users.push(newUser);
  res.send(newUser);
});
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
