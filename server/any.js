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

// Post.findAll({
//   raw: true,
//   // limit: 300,
//   order: [["id"]],
//   // where: { post_areacode: 1 },
// })
//   .then((data) => {
//     // console.log(data);
//     for (let i = 2630; i < 3130; i++) {
//       (function (x) {
//         setTimeout(function () {
//           axios
//             .get(
//               `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${data[x].post_contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
//             )
//             .then((response) => {
//               Post.update(
//                 {
//                   post_content: response.data.response.body.items.item.overview,
//                   post_homepage_path: response.data.response.body.items.item.homepage,
//                 },
//                 { where: { post_contentid: data[x].post_contentid } }
//               );
//             });
//         }, 300 * x);
//       })(i);
//     }
//   })
//   .catch((err) => console.log(err));

const { Post, Like, sequelize, Sequelize } = require("./models");
const axios = require("axios");
const request = require("request");

Post.findAll({
  raw: true,
})
  .then((data) => {
    for (let i = 2631; i < 2632; i++) {
      (function (x) {
        setTimeout(function () {
          const options = {
            method: "GET",
            url: `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${data[x].post_contentid}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`,
            headers: {},
          };
          request(options, function (error, response, body) {
            if (error) {
              throw new Error(error);
            }
            let info = JSON.parse(body);
            console.log(info);
            // Post.update(
            //   {
            //     post_content: info.body.items.item.overview,
            //     post_homepage_path: info.body.items.item.homepage,
            //   },
            //   { where: { post_contentid: data[x].post_contentid } }
            // );
          });
        }, 500 * x);
      })(i);
    }
  })
  .catch((err) => console.log(err));
