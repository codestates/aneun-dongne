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

// data: [
//   {
//     id: 1,
//     visited_address: DataTypes.STRING, //도로명주소....? string type
//     visited_mapx: DataTypes.DECIMAL(25, 20), // ex) '127.122442582700000' 좌표는 전부 올림픽공원
//     visited_mapy: DataTypes.DECIMAL(25, 20), // ex) '37.519445638600000' DECIMAL 타입은 일단 console엔 스트링으로 나옴
//     visited_memo: DataTypes.TEXT, //string type
//     visited_title: DataTypes.STRING, //string type 만약 제목을 넣는다면 ....?
//     visited_memo_image_path: DataTypes.TEXT, //string type
//     visited_wtmx: DataTypes.DECIMAL(50, 30), //'210824.233575990740000000000000000000'
//     visited_wtmy: DataTypes.DECIMAL(50, 30), //'446669.384806420650000000000000000000' 올림픽공원 좌표
//     visited_post_contentid: DataTypes.INTEGER, //126532 int type 관광지가 아닐 경우 null이 될 수도 있음
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   },
//   {},
//   {},
// ];

// [
//   {
//     id: 6925,
//     post_addr1: "서울특별시 송파구 올림픽로 424",
//     post_addr2: "(방이동)",
//     post_areacode: 1,
//     post_contentid: 126532,
//     post_contenttypeid: 12,
//     post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/39/2650439_image2_1.jpg",
//     post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/39/2650439_image3_1.jpg",
//     post_mapx: "127.12244258270000000000",
//     post_mapy: "37.51944563860000000000",
//     post_sigungucode: 18,
//     post_title: "올림픽공원",
//     post_wtmx: "210824.233575990740000000000000000000",
//     post_wtmy: "446669.384806420650000000000000000000",
//     post_tags: null,
//     distance: 0,
//     "Likes.likeCount": 2,
//     isLiked: true,
//   },
//   {
//     id: 4817,
//     post_addr1: "서울특별시 송파구 올림픽로 424",
//     post_addr2: null,
//     post_areacode: 1,
//     post_contentid: 127525,
//     post_contenttypeid: 12,
//     post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/14/1567814_image2_1.jpg",
//     post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/14/1567814_image3_1.jpg",
//     post_mapx: "127.12297582370000000000",
//     post_mapy: "37.52098713620000000000",
//     post_sigungucode: 18,
//     post_title: "서울 몽촌토성",
//     post_wtmx: "210871.149799955540000000000000000000",
//     post_wtmy: "446840.533233923840000000000000000000",
//     post_tags: null,
//     distance: 177.46243632929102,
//     "Likes.likeCount": 0,
//     isLiked: true,
//   },
//   {
//     id: 6927,
//     post_addr1: "서울특별시 송파구 올림픽로 424",
//     post_addr2: "(방이동)",
//     post_areacode: 1,
//     post_contentid: 2758192,
//     post_contenttypeid: 12,
//     post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/88/2770088_image2_1.jpg",
//     post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/88/2770088_image3_1.jpg",
//     post_mapx: "127.12297582370000000000",
//     post_mapy: "37.52098713620000000000",
//     post_sigungucode: 18,
//     post_title: "올림픽공원들꽃마루",
//     post_wtmx: "210871.149799955540000000000000000000",
//     post_wtmy: "446840.533233923840000000000000000000",
//     post_tags: null,
//     distance: 177.46243632929102,
//     "Likes.likeCount": 0,
//     isLiked: true,
//   },
// ];

// {
// 	"placeList"
// 	//[{visited_area:'충청북도',
// 	//visited_memo_image_path:'"./image/dafault_profile.jpg"',
// 	//visited_memo:'와~~신나',
// 	//mapX:'128',
// 	//mapY:'37',
// 	//visited_created_at:2021-08-23
// 	},...]
//     }

// data : [
//   {
//     comments: {
//       id: 1,
//       comment_content: '아이들과 견학하기 좋은 곳이예요.',
//       comment_tags: '가을,데이트',
//       comment_post_contentid: 126508,
//       createdAt: 2021-12-06T12:17:34.000Z,
//       updatedAt: 2021-12-07T16:03:14.000Z,
//       editable: true
//     },
//     user: {
//       nickname: '2',
//       user_image_path: 'https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/1639034041074_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-29%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.52.14.png'
//     }
//   },
//   {
//     comments: {
//       id: 2,
//       comment_content: '가까워서 좋아요.',
//       comment_tags: '데이트,공원,산책하기좋은',
//       comment_post_contentid: 126508,
//       createdAt: 2021-12-06T12:17:34.000Z,
//       updatedAt: 2021-12-06T12:17:34.000Z,
//       editable: true
//     },
//     user: {
//       nickname: '할로할로',
//       user_image_path: 'https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/1638973791038_%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-07-26%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%209.12.40.png'
//     }
//   },
//   {
//     comments: {
//       id: 3,
//       comment_content: '야경이 예뻐요.',
//       comment_tags: '데이트,가을',
//       comment_post_contentid: 126508,
//       createdAt: 2021-12-06T12:17:34.000Z,
//       updatedAt: 2021-12-06T12:17:34.000Z,
//       editable: true
//     },
//     user: { nickname: 'user3', user_image_path: null }
//   }
// ]

// const { Like } = require("./models");

// Like.findAndCountAll({
//   raw: true,
//   where: {
//     like_user_id: 1,
//     like_post_contentid: 126508,
//   },
// }).then((data) => {
//   console.log(data);
// });

const { Post, Sequelize } = require("./models");

Post.findAll({
  raw: true,
  limit: 10,
  where: { post_addr1: { [Sequelize.Op.substring]: `성남` } },
}).then((data) => {
  console.log(data);
});
