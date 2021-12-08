// const { Comment, Hashtag, Post, User, Sequelize } = require("../models");
// const deleteCommentData = require("./functions/commentAndHashtags/deleteCommentData");
// const createCommentHashtagData = require("./functions/commentAndHashtags/createCommentHashtagData");
// const getCommentHashtagData = require("./functions/commentAndHashtags/getCommentHashtagData");
// const updateCommentHashtagData = require("./functions/commentAndHashtags/updateCommentHashtagData");
// const { isAuthorized } = require("./tokenFunctions");

// // 이 함수는 post_hashtag table도 업데이트시켜야 함
// // 덧글을 수정할 때마다 다시 목록을 읽어서 보내야 한다

// module.exports = {
//   readComments: async (req, res) => {
//     const accessTokenData = isAuthorized(req);
//     if (!accessTokenData) {
//       // return res.status(401).send("no token in req.headers['authorization']");
//       return res.status(400).json({ data: null, message: "invalid access token" });
//     }
//     const { userId } = accessTokenData;
//     const { post_id, post_contentid, comment_id } = req.params;
//     const { comment_content, hash_name } = req.body;
//     getCommentHashtagData(userId, post_id);
//   },
//   createComments: async (req, res) => {},
//   updateComments: async (req, res) => {},
//   deleteComments: async (req, res) => {},
// };
