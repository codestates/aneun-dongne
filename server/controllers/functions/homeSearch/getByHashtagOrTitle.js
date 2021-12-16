const { Post, Like, sequelize, Sequelize } = require("../../../models");

module.exports = async (userId, tag, searchWord) => {
  let result = [];
  console.log("여기다");
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
      "post_readcount",
    ],
    include: [
      {
        model: Like,
        attributes: ["like_user_id"],
        group: "Posts.post_contentid",
      },
    ],
    where: { post_title: { [Sequelize.Op.substring]: `${searchWord}` } },
  })
    .then((data) => {
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
          return true;
        } else if (el.post_tags !== null) {
          return el.post_tags.includes(tag);
        } else {
          return false;
        }
      });
      result.sort(function (a, b) {
        return b.likeCount - a.likeCount;
      });
      result.splice(30);
      // console.log("해시태그없고 지역없고 검색어만눌렀을때 나오는거", result);
    })
    .catch((err) => console.log("에러", err));

  // for (let i = 0; i < result.length; i++) {
  //   result[i].isLiked = false;
  //   if (result[i]["Likes.like_user_id"] === userId) {
  //     result[i].isLiked = true;
  //   }
  //   delete result[i]["Likes.like_user_id"];
  // }

  return result;
};

//SELECT `Post`.*, COUNT(*) AS `Likes.likeCount`, `Likes`.`like_user_id` AS `Likes.like_user_id` FROM (SELECT `Post`.`id`, `Post`.`post_addr1`, `Post`.`post_addr2`, `Post`.`post_areacode`, `Post`.`post_contentid`, `Post`.`post_contenttypeid`, `Post`.`post_firstimage`, `Post`.`post_firstimage2`, `Post`.`post_mapx`, `Post`.`post_mapy`, `Post`.`post_sigungucode`, `Post`.`post_title`, `Post`.`post_wtmx`, `Post`.`post_wtmy`, `Post`.`post_tags`, `Post`.`post_readcount` FROM `Posts` AS `Post` WHERE (`Post`.`post_tags` LIKE '%%' AND `Post`.`post_title` LIKE '%경복궁%') GROUP BY `post_contentid` ORDER BY COUNT(*) DESC, `Post`.`post_readcount` DESC LIMIT 100) AS `Post` LEFT OUTER JOIN `Likes` AS `Likes` ON `Post`.`post_contentid` = `Likes`.`like_post_contentid` ORDER BY COUNT(*) DESC, `Post`.`post_readcount` DESC;
