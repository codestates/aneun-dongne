const { User, Post, Like } = require("../models");
const axios = require("axios");
require("dotenv").config();

// node ./controllers/postDetails.js

const updatePostData = async (contentId) => {
  let prevPost = {};
  try {
    await Post.findOne({
      raw: true,
      where: {
        post_contentid: contentId,
      },
    }).then((data) => {
      prevPost = data;
    }); // prevPost 변수에 이전 데이터 저장

    const response = await axios.get(
      `http://api.visitkorea.or.kr/openapi/service/rest/KorService/detailCommon?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}&contentTypeId=12&contentId=${contentId}&MobileOS=ETC&MobileApp=TourAPI3.0_Guide&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&transGuideYN=Y&_type=json`
    );
    console.log("이거되니");
    console.log("오버뷰", response.data.response.body.items.item.overview);
    if (prevPost.post_content === null || prevPost.post_homepage_path === null) {
      await Post.update(
        {
          post_content: response.data.response.body.items.item.overview,
          post_homepage_path: response.data.response.body.items.item.homepage,
        },
        { where: { post_contentid: contentId } }
      );
      console.log("저장 완료");
    } else {
      console.log("이미 저장됨");
    }
  } catch (err) {
    console.log(err);
  }
  // 포스트를 찾아서 내용 및 홈페이지가 없을 경우 api요청해서 db에 넣고 있을 경우 넣지 않음
};

const getPostData = async (contentId) => {
  let result = {};

  await Post.findOne({
    raw: true,
    where: {
      post_contentid: contentId,
    },
    attributes: [
      "id",
      "post_addr1",
      "post_addr2",
      "post_areacode",
      "post_contentid",
      "post_contenttypeid",
      "post_firstimage",
      "post_firstimage2",
      "post_mapx",
      "post_mapy",
      "post_sigungucode",
      "post_title",
      "post_wtmx",
      "post_wtmy",
      "post_content",
      "post_tags",
      "post_homepage_path",
    ],
  })
    .then((data) => {
      result.post = data;
    })
    .catch((err) => console.log(err));
  //데이터가 바뀌어서 다시 호출, result에 포스트 데이터 추가

  return result;
};

// const bb = async () => {
//   console.log("bb");
//   await updatePostData(126537).then(async () => {
//     console.log(await getPostData(126537));
//   });
// };

// bb();

module.exports = async (req, res) => {
  const { contentId } = req.params;
  try {
    res.status(200).json(await getPostData(contentId));
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};
