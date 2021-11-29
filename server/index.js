const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
const port = 80;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.status(201).send("Hello World");
});

app.get("/hello", (req, res) => {
  res.json({ data: "서버랑 연결 됐어요!!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
