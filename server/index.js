require("dotenv").config();
const fs = require("fs");
const https = require("https");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./models");
// const { upload } = require("./upload");
const { upload } = require("./upload");
// const { update } = require("../update");
// const { sequelize } = require("./models/index");

const app = express();

// const PORT = 4000;

const HTTPS_PORT = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: [
      // 클라이언트 s3 주소
      "https://localhost:3000",
      "http://localhost:3000",
      "https://tenten-deploy.s3-website.ap-northeast-2.amazonaws.com",
      "http://tenten-deploy.s3-website.ap-northeast-2.amazonaws.com",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    credentials: true,
  })
);
app.use(cookieParser());

const controllers = require("./controllers");

// app.get("/home", controllers.home);
// app.get("/post", controllers.postDetails);

app.get("/user/info", controllers.getAuth);
app.patch("/user/info", upload.single("image"), controllers.updateAuth);
// const commentRouter = require("./router/commentRouter");
// app.use("/comment", commentRouter);

app.post("/user/signup", controllers.signup);
app.post("/user/login", controllers.signin);

app.post("/signout", controllers.signout);
app.post("/home/bookmark", upload.single("image"), controllers.bookmark);

// app.get("/comment", controllers.readComments);
// app.post("/comment", controllers.createComment);
// app.patch("/comment", controllers.updateComment);
// app.delete("/comment", controllers.deleteComment);

// app.post("/like", controllers.addLike);
// app.delete("/like", controllers.deleteLike);

// sequelize
//   .sync({ force: false }) // 이 코드 발견 시 시퀄라이즈 실행
//   .then(async () => {
//     console.log("데이터베이스 연결 성공");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

let server;

if (fs.existsSync("./key.pem") && fs.existsSync("./cert.pem")) {
  const privateKey = fs.readFileSync(__dirname + "/key.pem", "utf8");
  const certificate = fs.readFileSync(__dirname + "/cert.pem", "utf8");
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () => console.log("https server runnning"));
} else {
  server = app.listen(HTTPS_PORT, () => console.log("http server runnning"));
}

module.exports = server;
