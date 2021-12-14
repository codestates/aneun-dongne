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

    try {
      if (!accessTokenData) {
        await res.status(200).json({
          data: await getCommentHashtagData(0, contentId),
        });
      } else {
        const { id } = accessTokenData; //유저이미지는 없어요
        console.log("겟커멘트", accessTokenData);
        await res.status(200).json({
          data: await getCommentHashtagData(id, contentId), //이안에 userinfo가 있는건 알아요
          userinfo: { user_image_path, nickname },
        });
      }
    } catch (err) {
      console.log("에러", err);
      res.status(500).json({ message: "server err" });
    }
  },
  createComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { contentId } = req.params;
    const { commentContent, tagsArr } = req.body;
    console.log("포스트커맨드", req.body);
    try {
      if (!accessTokenData) {
        // return res.status(401).send("no token in req.headers['authorization']");
        await res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        await createCommentHashtagData(id, contentId, commentContent, tagsArr);
        await res.status(200).json({
          data: await getCommentHashtagData(id, contentId, commentContent, tagsArr),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  updateComment: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { contentId } = req.params;
    const { commentId, commentContent, tagsArr } = req.body;
    try {
      if (!accessTokenData) {
        // return res.status(401).send("no token in req.headers['authorization']");
        return res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        console.log("패치커맨드", req.body);
        await updateCommentHashtagData(commentId, id, contentId, commentContent, tagsArr);
        await res.status(200).json({
          data: await getCommentHashtagData(id, contentId),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  deleteComment: async (req, res) => {
    console.log(req.cookies);
    console.log("커맨드 제거 ", req.query);
    const accessTokenData = isAuthorized(req);
    const { contentId } = req.params;
    const { commentId } = req.query;
    console.log("파람,쿼리", req.params, req.query);
    try {
      if (!accessTokenData) {
        // return res.status(401).send("no token in req.headers['authorization']");
        return res.status(400).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        await deleteCommentData(commentId, id, contentId);
        await res.status(200).json({
          data: await getCommentHashtagData(id, contentId),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
};
