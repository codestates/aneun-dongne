const { Comment, User, Post, Sequelize } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

// 포스트 contentId를 가지고 모든 댓글 목록 불러오기

const getMyComments = async (userId) => {
  let onlyCommentData = [];
  let result = [];
  let adduser = {};
  await Comment.findAll({
    raw: true,
    where: {
      comment_user_id: userId,
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
    })
      .then((userInfo) => {
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
      })
      .catch((err) => console.log(err));
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

// const bb = async () => {
//   console.log(await getMyComments(1));
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
        data: await getMyComments(id),
      });
    }
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};
