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

// {
//   id: 4,
//   nickname: "user4",
//   user_sigg: "해운대구",
//   user_area: "부산",
//   email: "user4@aneun-dongne.com",
//   password: "user4_user4",
//   user_image_path: null,
//   createdAt,
//   updatedAt,
// },
// {
//   id: 5,
//   nickname: "user5",
//   user_sigg: "강릉시",
//   user_area: "강원",
//   email: "user5@aneun-dongne.com",
//   password: "user5_user5",
//   user_image_path: null,
//   createdAt,
//   updatedAt,
// },

// app.get("/authAccesstoken", controllers.authAccesstoken);
// app.get("/authRefreshtoken", controllers.authRefreshtoken);

// app.delete("/comment", controllers.deleteComment);
// app.post("/comment", controllers.writeComment);

// app.get("/mypage", controllers.myPage);
// app.get("/like", controllers.like);
// app.get("/", controllers.home);
// app.get("/postDetails", controllers.postDetails);

// app.get("/hello", (req, res) => {
//   res.json({ data: "서버랑 연결 됐어요!!" });
// });

//   authAccesstoken: require("./tokenRequest/authAccesstoken"),
//   authRefreshtoken: require("./tokenRequest/authRefreshtoken"),
//   signup: require("./users/signup"),
//   withdrawal: require("./users/withdrawal"),
//   login: require("./users/login"),
//   logout: require("./users/logout"),
//   edit: require("./users/edit"),
//   myPage: require("./myPage"),
//   like: require("./like"),
//   postDetails: require("./postDetails"),
//   writeComment: require("./comments/writeComment"),
//   deleteComment: require("./comments/deleteComment"),
