const express = require("express");
const app = express();
const path = require("path");
var dotenv = require("dotenv");
dotenv.config({ path: "./.env" });

app.use("/", express.static("./client/dist"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
});

app.all("*", (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, "..", "client/dist", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));