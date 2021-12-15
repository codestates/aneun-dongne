const { Comment, User, Sequelize, Post } = require("../../../models");

// 포스트 contentId를 가지고 모든 댓글 목록 불러오기
//getCommentHashtagData.js에요
module.exports = async (userId, contentId) => {
  let onlyCommentData = [];
  let result = [];
  let adduser = {};
  await Comment.findAll({
    raw: true,
    where: {
      comment_post_contentid: contentId,
    },
  })
    .then((data) => {
      if (data.length === 0) {
        console.log("no data");
        //res.status(400).json({message: "Comments do not exist"})
        //return "Comments do not exist";
      }

      onlyCommentData = data;
    })
    .catch((err) => console.log(err));

  for (let i = 0; i < onlyCommentData.length; i++) {
    adduser = {};
    adduser.comments = onlyCommentData[i]; // {"comments":{...}}
    await User.findOne({
      raw: true,
      where: {
        id: onlyCommentData[i].comment_user_id,
      },
    }).then((userInfo) => {
      //userInfo {id:,....}
      if (userInfo.id === userId) {
        adduser.comments.editable = true;
      } else {
        adduser.comments.editable = false;
      }
      // {"comments":{..."editable": true}}
      adduser.user = {
        nickname: userInfo.nickname,
        user_image_path: userInfo.user_image_path,
      };
      delete adduser.comments.comment_user_id;
    });
    await Post.findOne({
      raw: true,
      where: {
        post_contentid: onlyCommentData[i].comment_post_contentid,
      },
    })
      .then((postInfo) => {
        adduser.post = {
          title: postInfo.post_title,
          sigungucode: postInfo.post_sigungucode,
          areacode: postInfo.post_areacode,
        };
      })
      .catch((err) => console.log(err));

    // 오래된게 밑으로가고 최신이 가장위에있는게 맞는것같아서 unshift로 바꿨어요
    result.unshift(adduser);
  }
  // console.log(result);

  return result;
};
