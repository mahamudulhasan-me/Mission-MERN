const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

const placeName = require("./data/travelPlace.json");
const hotelRoomInfo = require("./data/hotelInfo.json");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Travel Guru is running");
});
app.get("/place", (req, res) => {
  res.send(placeName);
});
app.get("/booking/:id", (req, res) => {
  const id = req.params.id;
  const placeById = placeName.find((place) => place.id == id);
  res.send(placeById);
});

// get hotel room info
app.get("/hotel", (req, res) => {
  res.send(hotelRoomInfo);
});
app.listen(port, () => {
  console.log("Travel Guru Listening on port " + port);
});
