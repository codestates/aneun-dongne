require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const { sequelize } = require("./models/index");

const app = express();
const PORT = 4000;
const controllers = require("./controllers");

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
app.use(cookieParser());
// const commentRouter = require("./router/commentRouter");
// app.use("/comment", commentRouter);
app.get("/user/info", controllers.auth);
app.post("/user/signup", controllers.signup);
app.post("/user/login", controllers.signin);
app.post("/signout", controllers.signout);

sequelize
  .sync({ force: false }) // 이 코드 발견 시 시퀄라이즈 실행
  .then(async () => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

module.exports = server;
