const { User, Post, Like } = require("../models");
const axios = require("axios");
require("dotenv").config();

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
  //토큰없으면 401번보내고 끝내는거
  const { contentId } = req.params;
  try {
    res.status(200).json(await getPostData(contentId));
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};
