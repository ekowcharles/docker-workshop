const express = require("express");
const app = express();

var path = require("path");
var favicon = require("serve-favicon");

app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

app.get("/", (req, res) => {
  res.send("Hello Docker!");
});

app.listen(8000, () => {
  console.log("Dockerizable app listening to connections!");
});
