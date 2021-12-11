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

const { Post, Like, sequelize, Sequelize } = require("./models");
const axios = require("axios");

Post.findAll({
  raw: true,
  limit: 300,
  order: [["post_readcount", "DESC"]],
  where: { post_areacode: 1 },
})
  .then((data) => {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      if (data[i].post_content === null) {
        (function (x) {
          setTimeout(function () {
            axios
              .get(
                `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${data[i].post_contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
              )
              .then((response) => {
                if (response.data.response.body !== undefined) {
                  Post.update(
                    {
                      post_content: response.data.response.body.items.item.overview,
                      post_homepage_path: response.data.response.body.items.item.homepage,
                    },
                    { where: { post_contentid: data[i].post_contentid } }
                  );
                } else {
                  console.log(response.data.response);
                  console.log("데이터 없음");
                }
              });
          }, 500 * x);
        })(i);
      } else {
        console.log("이미 저장됨");
      }
    }
  })
  .catch((err) => console.log(err));

//areacode               시군구    1      2       3      4      5      6     7
// 1 서울 656                    강남    강동    강북    강서   관악   광진
// 2 인천 351                    강화    계양   미추홀   남동   동구   부평
// 3 대전 120                    대덕    동구    서구    유성   중구
// 4 대구 253                    남구    달서    달성    동구   북구   서구
// 5 광주 141                    광산    남구    동구    북구   서구
// 6 부산 247                    강서    금정    기장    남구   동구   동래
// 7 울산 136                    중구    남구    동구    북구   울주
// 8 세종특별자치시 45            all
// 32 강원 1254                  강릉    고성    동해    삼척   속초   양구
// 33 충북 692                   괴산    단양    보은    영동   옥천   음성
// 34 충남 826                   공주    금산    논산    당진   보령   부여
// 35 경북 1264                  경산    경주    고령    구미   군위   김천
// 36 경남 1075                  거제    거창    고성    김해   남해
// 37 전북 926                   고창    군산    김제    남원   무주   부안
// 38 전남 1124                  강진    고흥    곡성    광양   구례   나주
// 39 제주 427                                  서귀포  제주시
// 31 경기 1404                  가평    고양    과천    광명   광주   구리
