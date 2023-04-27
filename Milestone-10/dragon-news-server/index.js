const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const allNews = require("./data/news.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon server is running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
// get all news
app.get("/news", (req, res) => {
  res.send(allNews);
});
// news find by id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const newsById = allNews.find((news) => news._id === id);
  res.send(newsById);
});
// news filter by id
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  if (id === "0") {
    res.send(allNews);
  } else {
    const categoryNews = allNews.filter((news) => news.category_id === id);
    res.send(categoryNews);
  }
});
app.listen(port, () => {
  console.log(`Dragon server is running on ${port}`);
});
