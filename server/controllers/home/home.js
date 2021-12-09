// 클라이언트에서 검색어 요청
// 해당하는 데이터 목록 (최대 50개) 보내기
// 시군구 정보, 도 정보, 관광지 제목, 해시태그 검색을 쿼리로 받음
// 보내야하는 데이터
// "data" : [{
//     "landmark" :  {
//        title,   // "경복궁"
//        picture,   // "http://tong.visitkorea.or.kr/cms/resource/08/27"
//        city,  // "서울"
//        mapx,  //126.99",
//        mapy,  //37.58",
//     },
//     "hashtags" :  [{
//         hashtag_id
//         hashtag_name
//         post_count
//         created_at
//     },..........],
//     "likeCount" :  0,
//     "isLiked" :  true, // 내가 그 포스트에 좋아요 눌렀는지
//     },........]

const { User, Post, HashTag, Like, Comments } = require("../models");
const axios = require("axios");
require("dotenv").config();

// node ./controllers/home.js

//pickpoint 찍으면 반경 구하는 로직
const clientwtmx = 210824.23357599074;
const clientwtmy = 446669.38480642065;

const clientradius = 1000;
let result = [];
result = [];
let likecount = 0;
likeCount = 0;

// Post.findAll로 데이터 불러와서 모든 데이터에 대해 하나하나 post_hashtag 정해주는 로직
// comment도 불러와야 한다

// Post.findAll({
//   raw: true,
//   attributes: [
//     "post_mapy",
//     "post_mapx",
//     "post_title",
//     "post_firstimage",
//     "post_addr1",
//     "post_contentid",
//     [
//       sequelize.fn(
//         "ST_Distance",
//         sequelize.fn("POINT", sequelize.col("post_wtmx"), sequelize.col("post_wtmy")),
//         sequelize.fn("POINT", clientwtmx, clientwtmy)
//       ),
//       "distance",
//     ], // ('post_mapy', 'post_mapx') 와 (clientMapy, clientMapx) 사이의 거리를 구하고 그것을 'distance'이름으로 할당
//   ],
// })
//   .then((data) => {
//     console.log(data);
//     for (let i = 0; i < data.length; i++) {
//       if (data[i].distance <= clientradius) {
//         result.push({ landmark: data[i] });
//         result.map((el) => {
//           el.hashtags = [];
//           el.likeCount = 0;
//           return el;
//         });
//       }
//     }
//     console.log(result);
//   })
//   .catch((err) => console.log(err));

// res.status(200).json(["landmark" :])

// axios
//   .get(
//     `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}`,
//     {
//       params: {
//         MobileOS: "ETC",
//         MobileApp: "TourAPI3.0_Guide",
//         //! 관광지 개수
//         numOfRows: 10,
//         // areaCode:33,
//         // sigunguCode:7,
//         //! contentTypeId : 12:관광지,14:문화시설,15:행사,25:여행코스,28:레포츠,32:숙박,38:쇼핑,39:식당,
//         contentTypeId: 12,
//         mapX: clientMapx,
//         mapY: clientMapy,
//         //! 반경 몇m??
//         radius: 20000,
//         //*
//         arrange: "A",
//         listYN: "Y",
//       },
//     },
//     { "content-type": "application/json" }
//   )
//   .then((res) => {
//     console.log(res.data);
//     console.log(res.data.response.body.items.item);
//     let list = res.data.response.body.items.item;
//     //! list : [[관광지각각의 y좌표,x좌표,제목,썸네일,주소,컨텐트id],..]
//     // list = list.map((el) => {
//     //   return [Number(el.mapy), Number(el.mapx), el.title, el.firstimage, el.addr1, el.contentid];
//     // });
//     //   dispatch(changePlaceList(list))
//     // setPlaceList(list); //-> 이걸 PlaceList.js에서 사용한다.
//   })
//   .catch((err) => console.log(err));

// User.findAll().then((data) =>
//   console.log(
//     data.map((el) => {
//       return el.dataValues;
//     })
//   )
// );

module.exports = async (req, res) => {
  // User.findAll().then((data) =>
  //   console.log(
  //     data.map((el) => {
  //       return el.dataValues;
  //     })
  //   )
  // );
  //   try {
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: "Server error" });
  //   }
};
