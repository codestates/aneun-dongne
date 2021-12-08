const { Comment, User, Sequelize } = require("../../../models");

// 포스트 contentId를 가지고 모든 댓글 목록 불러오기

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
    await User.findOne({
      raw: true,
      where: {
        id: onlyCommentData[i].comment_user_id,
      },
    }).then((userInfo) => {
      adduser.comments = onlyCommentData[i]; // {"comments":{...}}
      //userInfo {id:,....}
      if (userInfo.id === userId) {
        adduser.comments.editable = true;
      } else {
        adduser.comments.editable = false;
      }
      // {"comments":{..."editable": true}}
      adduser.user = {
        nickname: userInfo.nickname || null,
        user_image_path: userInfo.user_image_path || null,
      };
    });
    delete adduser.comments.comment_user_id;
    result.push(adduser);
    //유저아이디 삭제
  }
  // console.log(result);

  return result;
};
