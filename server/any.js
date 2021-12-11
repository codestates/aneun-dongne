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

Post.findAll({
  raw: true,
  limit: 200,
  order: [["post_readcount", "DESC"]],
  where: { post_areacode: 1 },
})
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data.post_content === null) {
        (function (x) {
          setTimeout(function () {
            axios
              .get(
                `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${data[i].post_contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
              )
              .then((response) => {
                Post.update(
                  {
                    post_content: response.data.response.body.items.item.overview,
                    post_homepage_path: response.data.response.body.items.item.homepage,
                  },
                  { where: { post_contentid: data[i].post_contentid } }
                );
              });
          }, 200 * x);
        })(i);
      } else {
        console.log("이미 저장됨");
      }
    }
  })
  .catch((err) => console.log(err));

//areacode               시군구    1      2      3
// 1 서울 656                    강남    강동   강북구
// 2 인천 351                    강화    계양   미추홀
// 3 대전 120                    대덕    동구    서구
// 4 대구 253                    남구    달서    달성
// 5 광주 141                    광산    남구    동구
// 6 부산 247                    강서    금정    기장
// 7 울산 136                    중구    남구    동구
// 8 세종특별자치시 45            all
// 32 강원 1254                  강릉    고성    동해
// 33 충북 692                   괴산    단양    보은
// 34 충남 826                   공주    금산    논산
// 35 경북 1264                  경산    경주    고령
// 36 경남 1075                  거제    거창    고성
// 37 전북 926                   고창    군산    김제
// 38 전남 1124                  강진    고흥    곡성
// 39 제주 427                                  서귀포
// 31 경기 1404                  가평    고양    과천
