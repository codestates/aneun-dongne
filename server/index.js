const express = require("express");
const cors = require('cors');
const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: true,
    credentials: true
  })
);

app.get("/api", (req, res) => {
  res.send({ hello : "Hello World!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
