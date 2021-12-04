const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { sequelize } = require("./models/index");
const controllers = require("./controllers");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      // 클라이언트 s3 주소
      "http://localhost:3000",
      "http://tenten-deploy.s3-website.ap-northeast-2.amazonaws.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

// sequelize
//   .sync({ force: false }) // 이 코드 발견 시 시퀄라이즈 실행
//   .then(() => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

module.exports = server;
