const { User, Post, HashTag, Like, Comment, sequelize, Sequelize } = require("../models");
// const axios = require("axios");
require("dotenv").config();

// node ./controllers/home.js

//pickpoint 찍으면 반경 구하는 로직
const clientwtmx = 210824.23357599074;
const clientwtmy = 446669.38480642065;

const radius = 1000;

const userId = 2;

// Post.findAll로 데이터 불러와서 모든 데이터에 대해 하나하나 post_hashtag 정해주는 로직
// comment도 불러와야 한다

// const getPlaceList = async (userId, radius, clientwtmx, clientwtmy) => {
let result = [];
Post.findAll({
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
  order: [[sequelize.literal("COUNT(`Likes`.`id`)"), "DESC"]],
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
    console.log(data);
    // select Posts.post_contentid, Count(Likes.id) as likeCount
    // from Posts join Likes on Posts.post_contentid = Likes.like_post_contentid
    // where Posts.post_contentid in ( 126508,126532) group by
    // Posts.post_contentid order by likeCount;
    for (let i = 0; i < data.length; i++) {
      data[i].isLiked = false;
      if (data[i]["Likes.like_user_id"] === userId) {
        data[i].isLiked = true;
      }
      delete data[i]["Likes.like_user_id"];
    }

    console.log(data);
    result = data;

    // console.log(result.length);
  })
  .catch((err) => console.log(err));
// };

module.exports = async (req, res) => {};
