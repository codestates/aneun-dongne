const { Post, Like, sequelize, Sequelize } = require("../../../models");

module.exports = async (userId, tag, searchWord) => {
  let result = [];
  await Post.findAll({
    raw: true,
    limit: 100,
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
      ],
    },
  })
    .then((data) => {
      // console.log(data);
      for (let i = 0; i < data.length; i++) {
        data[i].isLiked = false;
        if (data[i]["Likes.like_user_id"] === userId) {
          data[i].isLiked = true;
        }
        delete data[i]["Likes.like_user_id"];
      }
      result = data;
    })
    .catch((err) => console.log(err));
  return result;
};
