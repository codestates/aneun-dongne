const express = require("express");
const app = express();
const port = 80;

app.get("/api", (req, res) => {
  res.send({ hello : "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
