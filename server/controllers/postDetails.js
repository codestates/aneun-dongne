const { User, Post, Like } = require("../models");
const axios = require("axios");
require("dotenv").config();
const { isAuthorized } = require("./tokenFunctions");

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

const getPostData = async (userId, contentId) => {
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

  await Like.findAndCountAll({
    where: {
      like_post_contentid: contentId,
    },
  })
    .then((data) => {
      result.likeCount = data.count;
      result.isLiked = false;
      for (let i = 0; i < data.rows.length; i++) {
        if (data.rows[i].like_user_id === userId) {
          result.isLiked = true;
        }
      }
    })
    .catch((err) => console.log(err));
  //result에 Like 관련 내용 추가
  return result;
};

const bb = async () => {
  console.log("bb");
  await updatePostData(126537).then(async () => {
    console.log(await getPostData(1, 126537));
  });
};

// bb();

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  const { id } = accessTokenData;
  const { post_contentid } = req.params;

  if (!accessTokenData) {
    await updatePostData(post_contentid)
      .then(async () => {
        res.status(200).json(await getPostData(0, post_contentid));
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "unsufficent request" });
      });
  } else {
    await updatePostData(post_contentid)
      .then(async () => {
        res.status(200).json(await getPostData(id, post_contentid));
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json({ message: "unsufficent request" });
      });
  }
};
