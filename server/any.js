// const { Post } = require("./models");
// const axios = require("axios");

// Post.findAll({
//   raw: true,
// })
//   .then((data) => {
//     for (let i = 1974; i < 2974; i++) {
//       (function (x) {
//         setTimeout(function () {
//           axios
//             .get(
//               `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${data[i].post_contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
//             )
//             .then((response) => {
//               Post.update(
//                 {
//                   post_content: response.data.response.body.items.item.overview,
//                   post_homepage_path: response.data.response.body.items.item.homepage,
//                 },
//                 { where: { post_contentid: data[i].post_contentid } }
//               );
//             });
//         }, 200 * x);
//       })(i);
//     }
//   })
//   .catch((err) => console.log(err));

const { Post, Like, sequelize, Sequelize } = require("../../../models");

let result = [];
await Post.findAll({
  raw: true,
  limit: 200,
  order: [["post_readcount", "DESC"]],
  where: { post_areacode: 1 },
})
  .then((data) => {
    // console.log(data);
    result = data.filter((el) => {
      if (sigungucode === null) {
        return true;
      } else if (sigungucode === el.post_sigungucode) {
        return true;
      } else {
        return false;
      }
    });
    for (let i = 0; i < result.length; i++) {
      result[i].isLiked = false;
      if (result[i]["Likes.like_user_id"] === userId) {
        result[i].isLiked = true;
      }
      delete result[i]["Likes.like_user_id"];
    }
    result.splice(100);
  })
  .catch((err) => console.log(err));

//areacode               시군구    1      2      3
// 1 서울 656                    강남    강동
// 2 인천 351                    강화    계양
// 3 대전 120                    대덕    동구
// 4 대구 253                    남구    달서
// 5 광주 141                    광산    남구   동구
// 6 부산 247                    강서    금정
// 7 울산 136                    중구    남구
// 8 세종특별자치시 45            연기
// 32 강원 1254                  강릉    고성
// 33 충북 692                   괴산    단양   보은
// 34 충남 826                   공주    금산
// 35 경북 1264                  경산    경주
// 36 경남 1075                  거제    거창
// 37 전북 926                   고창    군산   김제
// 38 전남 1124                  강진    고흥
// 39 제주 427                                 서귀포
// 31 경기                       가평    고양
