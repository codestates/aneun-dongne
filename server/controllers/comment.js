const deleteCommentData = require("./functions/commentAndHashtags/deleteCommentData");
const createCommentHashtagData = require("./functions/commentAndHashtags/createCommentHashtagData");
const getCommentHashtagData = require("./functions/commentAndHashtags/getCommentHashtagData");
const updateCommentHashtagData = require("./functions/commentAndHashtags/updateCommentHashtagData");
const { isAuthorized } = require("./tokenFunctions");

// 이 함수는 post_hashtag table도 업데이트시켜야 함
// 덧글을 수정할 때마다 다시 목록을 읽어서 보내야 한다

module.exports = {
  readComments: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { userId } = accessTokenData;
    const { post_contentid } = req.params;
    if (!accessTokenData) {
      await res.status(200).json({
        data: await getCommentHashtagData(0, post_contentid),
      });
    } else {
      await res.status(200).json({
        data: await getCommentHashtagData(userId, post_contentid),
      });
    }
  },
  createComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { userId } = accessTokenData;
    const { post_contentid } = req.params;
    const { comment_content, hash_name } = req.body;
    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      await res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      await createCommentHashtagData(userId, post_contentid, comment_content, hash_name);
      await res.status(200).json({
        data: await getCommentHashtagData(userId, post_contentid),
      });
    }
  },
  updateComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { userId } = accessTokenData;
    const { post_contentid } = req.params;
    const { comment_id, comment_content, hash_name } = req.body;
    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      return res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      await updateCommentHashtagData(comment_id, userId, post_contentid, comment_content, hash_name);
      await res.status(200).json({
        data: await getCommentHashtagData(userId, post_contentid),
      });
    }
  },
  deleteComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { userId } = accessTokenData;
    const { post_contentid } = req.params;
    const { comment_id } = req.body;
    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      return res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      await deleteCommentData(comment_id, userId, post_contentid);
      await res.status(200).json({
        data: await getCommentHashtagData(userId, post_contentid),
      });
    }
  },
};
