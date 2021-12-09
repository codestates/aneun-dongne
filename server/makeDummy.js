// // open api를 이용해 데이터를 한번에 받아와 db에 저장하는 로직
// const request = require("request");
// require("dotenv").config();
// const { Post } = require("./models");
// const options = {
//   method: "GET",
//   url: `http://api.visitkorea.or.kr/openapi/service/rest/KorService/areaBasedList?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&areaCode=&sigunguCode=&cat1=&cat2=&cat3=&listYN=Y&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&arrange=A&numOfRows=11000&pageNo=1&_type=json`,
//   headers: {},
// };

// request(options, function (error, response, body) {
//   if (error) {
//     throw new Error(error);
//   }
//   let info = JSON.parse(body);
//   for (i in info.response.body.items.item) {
//     Post.update(
//       {
//         post_mapx: parseFloat(info.response.body.items.item[i].mapx),
//         post_mapy: parseFloat(info.response.body.items.item[i].mapy),
//       },
//       { where: { post_contentid: info.response.body.items.item[i].contentid } }
//     );
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

// post_addr1: info.response.body.items.item[i].addr1,
// post_addr2: info.response.body.items.item[i].addr2,
// post_areacode: info.response.body.items.item[i].areacode,
// post_cat1: info.response.body.items.item[i].cat1,
// post_cat2: info.response.body.items.item[i].cat2,
// post_cat3: info.response.body.items.item[i].cat3,
// post_contentid: info.response.body.items.item[i].contentid,
// post_contenttypeid: info.response.body.items.item[i].contenttypeid,
// post_createdtime: info.response.body.items.item[i].createdtime,
// post_firstimage: info.response.body.items.item[i].firstimage,
// post_firstimage2: info.response.body.items.item[i].firstimage2,
// post_mapx: Number(info.response.body.items.item[i].mapx),
// post_mapy: Number(info.response.body.items.item[i].mapy),
// post_mlevel: info.response.body.items.item[i].mlevel,
// post_modifiedtime: info.response.body.items.item[i].modifiedtime,
// post_readcount: info.response.body.items.item[i].readcount,
// post_sigungucode: info.response.body.items.item[i].sigungucode,
// post_title: info.response.body.items.item[i].title,
// post_zipcode: info.response.body.items.item[i].zipcode,

// const request = require("request");
// require("dotenv").config();
// const { Post, Sequelize } = require("./models");

// //중간에 913씩 밀린 아이디 원상복구
// // 3001~3913
// // 11867

// for (i = 3914; i <= 11867; i++) {
//   Post.update({ id: i - 913 }, { where: { id: i } }).catch((err) => console.log(err));
// }

//// 카카오 api 위도경도좌표를 평면좌표로 변환

// "https://dapi.kakao.com/v2/local/geo/transcoord.json?longitude=경도&latitude=위도&input_coord=WGS84&output_coord=WTM" \ -H "Authorization: KakaoAK kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"

// 출처: https://cremvruille.tistory.com/93 [미자랑 복자랑]
// Post.findAll({
//   raw: true,
// })
//   .then((data) => {
//     for (i = 0; i < data.length; i++) {
//       (function (x) {
//         setTimeout(function () {
//           const options = {
//             method: "GET",
//             url: `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${data[x].post_mapx}&y=${data[x].post_mapy}&input_coord=WGS84&output_coord=WTM`,
//             headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` },
//           };
//           request(options, function (error, response, body) {
//             if (error) {
//               throw new Error(error);
//             }
//             let info = JSON.parse(body);
//             Post.update(
//               {
//                 post_wtmx: info.documents[0].x,
//                 post_wtmy: info.documents[0].y,
//               },
//               { where: { post_contentid: data[x].post_contentid } }
//             );
//           });
//         }, 200 * x);
//       })(i);
//     }
//   })
//   .catch((err) => console.log(err));

// ?  좌표를 주소로 변환 -> 버튼 클릭시 onClick이벤트를 통해 91번줄로 이동
//! 왠지 주소쓸일 없을듯 우선 남겨놈
// axios
//   .get(
//     `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${latlng.getLng()}&y=${latlng.getLat()}&input_coord=WGS84`,
//     { headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API}` } }
//   )
//   .then((res) => res.data.documents[0].address)
//   .then((address) => {
//     // console.log(address)
//     setMeetingPlace([address.region_1depth_name, address.region_2depth_name, address.address_name]);
//   })
//   //   .then(res=>console.log(meetingPlace))
//   .catch((err) => console.log(err)); //237줄에 console.log(meetingPlace)있음.

// join table에 데이터 넣는 로직
// require("dotenv").config();

const { Like } = require("./models");

Like.findAndCountAll({
  raw: true,
  where: {
    like_user_id: 1,
    like_post_contentid: 126508,
  },
}).then((data) => {
  console.log(data);
});
