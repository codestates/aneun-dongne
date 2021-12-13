const { User, Post, Like, sequelize, Sequelize } = require("../../../models");

module.exports = async (userId, radius, clientwtmx, clientwtmy, tag, searchWord) => {
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
      [
        sequelize.fn(
          "ST_Distance",
          sequelize.fn("POINT", sequelize.col("post_wtmx"), sequelize.col("post_wtmy")),
          sequelize.fn("POINT", clientwtmx, clientwtmy)
        ),
        "distance",
      ], // ('post_mapy', 'post_mapx') 와 (clientMapy, clientMapx) 사이의 거리를 구하고 그것을 'distance'이름으로 할당
    ],
    include: [
      {
        model: Like,
        attributes: [[sequelize.literal("COUNT(`Likes`.`id`)"), "likeCount"], "like_user_id"],
      },
    ],
    group: "post_contentid",
    order: [
      [sequelize.literal("COUNT(`Likes`.`id`)"), "DESC"],
      ["post_readcount", "DESC"],
    ],
    where: sequelize.where(
      sequelize.fn(
        "ST_Distance",
        sequelize.fn("POINT", sequelize.col("post_wtmx"), sequelize.col("post_wtmy")),
        sequelize.fn("POINT", clientwtmx, clientwtmy)
      ),
      { [Sequelize.Op.lte]: radius }
    ),
  })
    .then((data) => {
      result = data.filter((el) => {
        if (tag === "") {
          return el.post_title.includes(searchWord);
        } else if (el.post_tags !== null) {
          return el.post_tags.includes(tag) && el.post_title.includes(searchWord);
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

      result.splice(50);
      // console.log(result);
    })
    .catch((err) => console.log(err));
  return result;
};
