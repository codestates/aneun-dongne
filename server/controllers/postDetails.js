// 클라이언트에서 특정 포스트카드 클릭
// 세부정보 보내기
// contentId, contentTypeId, 관광지 제목을 쿼리로 받음
// 보내야하는 데이터
// {
// "data" : {
// "post" : {
//    "picture":"http://tong.visitkorea.or.kr/cms/resource/08/27",
//    "title":"올림픽공원",
//    "homepage":"https://olympic/file/jDF0JU7yNritvz43jHq3Z7/tenten-team-library?node-id=0%3A1",
//    "content":"올림픽공원은 어쩌구저쩌구..",
//    "mapx":"126.99",
//    "mapy":"37.58",
//    "address":"서울특별시 종로구 율곡로"
// },
//  "hashtags" :  [{
//      hashtag_id
//      hashtag_name
//      post_count
//      created_at
//   },..........],
//   "likeCount" :  0
// }

const { User, Post, HashTag, Like } = require("../models");
const request = require("request");
require("dotenv").config();

// node ./controllers/postDetails.js

const contentId = 126580;

// Post.findOne({
//   raw: true,
//   where: {
//     post_contentid: contentId,
//   },
// }).then((data) => {
//   if (data.post_content === null) {
//     const options = {
//       method: "GET",
//       url: `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${contentId}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`,
//       headers: {},
//     };
//     request(options, function (error, response, body) {
//       if (error) {
//         throw new Error(error);
//       }
//       let info = JSON.parse(body);
//       console.log(info.response.body.items.item);
//       Post.update(
//         {
//           post_content: info.response.body.items.item.overview,
//         },
//         { where: { post_contentid: contentId } }
//       );
//     });
//   } else {
//     console.log("이미 저장 : " + data);
//   }
// });

//     .then((res) => {
//       // console.log(res.data.response.body.items.item);
//       const { mapx, mapy } = res.data.response.body.items.item;
//       // console.log(mapx, mapy);
//       setPlaceLocation({ lat: mapy, lon: mapx });
//       setImgURL(res.data.response.body.items.item.firstimage);
//       setTitle(res.data.response.body.items.item.title);
//       setPlaceAddr(res.data.response.body.items.item.addr1);
//       if (res.data.response.body.items.item.homepage) {
//         setPageURL(res.data.response.body.items.item.homepage.split('<a href="')[1].split('"')[0]);
//         // setPageURL(res.data.response.body.items.item.homepage);
//       }
//       setOverview(res.data.response.body.items.item.overview);
