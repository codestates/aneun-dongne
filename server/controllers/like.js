const { User, Post, Like } = require("../models");
const { isAuthorized } = require("./tokenFunctions");

// like 누른 상태 client: {isLiked=true} -> post 요청
const getLikeCount = async (userId, contentId) => {
  let result = {};
  await Like.findAndCountAll({
    where: {
      like_post_contentid: contentId,
    },
  })
    .then((data) => {
      result.likeCount = data.count;
      result.isLiked = false;
      for (let i = 0; i < data.rows.length; i++) {
        if (data.rows[i].like_user_id === userId) {
          result.isLiked = true;
        }
      }
    })
    .catch((err) => console.log(err));
  //result에 Like 관련 내용 추가
  return result;
};

const addLike = async (userId, contentId) => {
  await Like.create({
    like_user_id: userId,
    like_post_contentid: contentId,
  });
};

const deleteLike = async (userId, contentId) => {
  await Like.destroy({
    where: {
      like_user_id: userId,
      like_post_contentid: contentId,
    },
  });
};

module.exports = {
  getLikeCount: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { contentId } = req.params;
    try {
      if (!accessTokenData) {
        await res.status(200).json({
          data: await getLikeCount(0, contentId),
        });
      } else {
        const { id } = accessTokenData;
        await res.status(200).json({
          data: await getLikeCount(id, contentId),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  addLike: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log(accessTokenData);
    const { contentId } = req.params;
    try {
      if (!accessTokenData) {
        // return res.status(401).send("no token in req.headers['authorization']");
        await res.status(401).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        await addLike(id, contentId);
        await res.status(200).json({
          data: await getLikeCount(id, contentId),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
  deleteLike: async (req, res) => {
    const accessTokenData = isAuthorized(req);
    const { contentId } = req.params;
    try {
      if (!accessTokenData) {
        // return res.status(401).send("no token in req.headers['authorization']");
        return res.status(401).json({ data: null, message: "invalid access token" });
      } else {
        const { id } = accessTokenData;
        await deleteLike(id, contentId);
        await res.status(200).json({
          data: await getLikeCount(id, contentId),
        });
      }
    } catch (err) {
      res.status(500).json({ message: "server err" });
    }
  },
};
