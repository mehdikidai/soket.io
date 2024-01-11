const express = require("express");
const http = require("http");
const cors = require('cors')


const app = express();
const port = 4000;
app.use(cors())

app.get("/", function (req, res) {
  res.json({ name: "mehdi" });
});

app.listen(port, () => {
  console.log(`start server http:\\localhost:${port}`);
});
