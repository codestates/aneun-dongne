const { Post, Like, sequelize, Sequelize } = require("../../models");

const getMyLikes = async (userId) => {
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
        attributes: [[sequelize.literal("COUNT(`Likes`.`id`)"), "likeCount"], "like_user_id", "createdAt"],
      },
    ],
    group: "post_contentid",
    order: [[Like, "createdAt", "DESC"]],
    where: {
      "$Likes.like_user_id$": userId,
    },
  })
    .then((data) => {
      // console.log(data);
      result = data;
      for (let i = 0; i < result.length; i++) {
        result[i].isLiked = false;
        if (result[i]["Likes.like_user_id"] === userId) {
          result[i].isLiked = true;
        }
        delete result[i]["Likes.like_user_id"];
      }
    })
    .catch((err) => console.log(err));
  return result;
};

// const bb = async () => {
//   console.log(await getMyLikes(1));
// };

// bb();

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  try {
    if (!accessTokenData) {
      await res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      const { id } = accessTokenData;
      await res.status(200).json({
        data: await getMyLikes(id),
      });
    }
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};
