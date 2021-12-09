const { Post, Like, sequelize, Sequelize } = require("../../../models");

module.exports = async (userId, areacode, sigungucode, tag, searchWord) => {
  let result = [];
  await Post.findAll({
    raw: true,
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
      "post_tags",
    ],
    include: [
      {
        model: Like,
        attributes: [[sequelize.literal("COUNT(`Likes`.`id`)"), "likeCount"], "like_user_id"],
      },
    ],
    group: "post_contentid",
    order: [[sequelize.literal("COUNT(`Likes`.`id`)"), "DESC"]],
    where: {
      [Sequelize.Op.and]: [
        { post_tags: { [Sequelize.Op.substring]: `${tag}` } },
        { post_title: { [Sequelize.Op.substring]: `${searchWord}` } },
        { post_areacode: areacode },
      ],
    },
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
  return result;
};
