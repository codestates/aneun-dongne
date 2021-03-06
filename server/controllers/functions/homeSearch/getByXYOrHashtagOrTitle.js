const { User, Post, Like, sequelize, Sequelize } = require("../../../models");

module.exports = async (userId, radius, clientwtmx, clientwtmy, tag, searchWord) => {
  console.log("xy 함수에 변수가 어떻게 들어오는지", radius, clientwtmx, clientwtmy, tag, searchWord);
  let result = [];
  await Post.findAll({
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
        attributes: ["like_user_id"],
        group: "Posts.post_contentid",
      },
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
      // console.log("데이터", data);
      for (let i = 0; i < data.length; i++) {
        result.push(data[i].dataValues);
        let result2 = result[i].Likes.map((el) => {
          return el.dataValues.like_user_id;
        });
        result[i].like_user_ids = result2;
        result[i].isLiked = false;
        if (result[i].like_user_ids.includes(userId)) {
          result[i].isLiked = true;
        }
        result[i].likeCount = result[i].Likes.length;
        // delete result[i].like_user_ids;
      }
      result = result.filter((el) => {
        if (tag === "") {
          return el.post_title.includes(searchWord);
        } else if (el.post_tags !== null) {
          return el.post_tags.includes(tag) && el.post_title.includes(searchWord);
        } else {
          return false;
        }
      });
      result.sort(function (a, b) {
        return b.likeCount - a.likeCount;
      });
      result.splice(30);
    })
    .catch((err) => console.log(err));
  return result;
};
