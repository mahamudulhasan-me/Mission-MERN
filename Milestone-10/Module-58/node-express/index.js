const express = require("express");
const cors = require("cors");
const phones = require("./phone.json");
const app = express();
const port = 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("Phone server is under development");
});
app.get("/phone", (req, res) => {
  res.send(phones);
});
app.get("/phone/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const phone = phones.find((phone) => phone.id === id);
  res.send(phone);
});
app.listen(port, () => console.log(`Server listening on port ${port}`));
