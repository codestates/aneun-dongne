require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const express = require("express");
const db = require("./models");

const app = express();
const PORT = 80;
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
app.get("/user/info", controllers.auth);
app.post("/user/signup", controllers.signup);
app.post("/user/login", controllers.signin);
app.post("/signout", controllers.signout);

db.sequelize
  .sync({ force: false }) // 이 코드 발견 시 시퀄라이즈 실행
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/hello", (req, res) => {
  res.json({ data: "서버랑 연결 됐어요!!" });
});

const server = app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

module.exports = server;

// open api를 이용해 데이터를 한번에 받아와 db에 저장하는 로직
// const request = require("request");
// const { Post } = require("./models");
// const options = {
//   method: "GET",
//   url: "http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=yVnmXj8gK%2FyivX6RFtZ9jHvoBXBT1RuC%2B5yXT7%2BhyPwdy6oId2TaMwc8%2FU5BFkn90HmSILBcfmmY0ZWIN%2BIldA%3D%3D&contentTypeId=12&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=1000&pageNo=11&_type=json",
//   headers: {},
// };

// request(options, function (error, response, body) {
//   if (error) {
//     throw new Error(error);
//   }
//   let info = JSON.parse(body);
//   for (i in info.response.body.items.item) {
//     Post.create({
//       post_addr1: info.response.body.items.item[i].addr1,
//       post_addr2: info.response.body.items.item[i].addr2,
//       post_areacode: info.response.body.items.item[i].areacode,
//       post_cat1: info.response.body.items.item[i].cat1,
//       post_cat2: info.response.body.items.item[i].cat2,
//       post_cat3: info.response.body.items.item[i].cat3,
//       post_contentid: info.response.body.items.item[i].contentid,
//       post_contenttypeid: info.response.body.items.item[i].contenttypeid,
//       post_createdtime: info.response.body.items.item[i].createdtime,
//       post_firstimage: info.response.body.items.item[i].firstimage,
//       post_firstimage2: info.response.body.items.item[i].firstimage2,
//       post_mapx: Number(info.response.body.items.item[i].mapx),
//       post_mapy: Number(info.response.body.items.item[i].mapy),
//       post_mlevel: info.response.body.items.item[i].mlevel,
//       post_modifiedtime: info.response.body.items.item[i].modifiedtime,
//       post_readcount: info.response.body.items.item[i].readcount,
//       post_sigungucode: info.response.body.items.item[i].sigungucode,
//       post_title: info.response.body.items.item[i].title,
//       post_zipcode: info.response.body.items.item[i].zipcode,
//     });
//   }
// });
