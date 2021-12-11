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
    const { contentId } = req.params;
    if (!accessTokenData) {
      return res.status(200).json({
        message: "no user",
        data: await getCommentHashtagData(0, contentId),
        userinfo: {
          user_image_path:
            "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png",
          nickname: "김코딩",
        },
      });
    }
    const { id } = accessTokenData;

    console.log("겟커멘트", accessTokenData);
    const { user_image_path, nickname } = accessTokenData;
    if (accessTokenData) {
      await res.status(200).json({
        data: await getCommentHashtagData(id, contentId),
        userinfo: { user_image_path, nickname },
      });
    }
  },
  createComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;
    const { contentId } = req.params;
    const { commentContent, tagsArr } = req.body;
    console.log("포스트커맨드", req.body);
    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      await res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      await createCommentHashtagData(id, contentId, commentContent, tagsArr);
      await res.status(200).json({
        data: await getCommentHashtagData(id, contentId),
      });
    }
  },
  updateComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;
    const { contentId } = req.params;
    const { commentId, commentContent, tagsArr } = req.body;

    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      return res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      console.log("패치커맨드", req.body);
      await updateCommentHashtagData(commentId, id, contentId, commentContent, tagsArr);
      await res.status(200).json({
        data: await getCommentHashtagData(id, contentId),
      });
    }
  },
  deleteComment: async (req, res) => {
    console.log(req.cookies);
    console.log("커맨드 제거 ", req.query);
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;
    const { contentId } = req.params;
    const { commentId } = req.query;
    console.log("파람,쿼리", req.params, req.query);
    if (!accessTokenData) {
      // return res.status(401).send("no token in req.headers['authorization']");
      return res.status(400).json({ data: null, message: "invalid access token" });
    } else {
      await deleteCommentData(commentId, id, contentId);
      await res.status(200).json({
        data: await getCommentHashtagData(id, contentId),
      });
    }
  },
};
