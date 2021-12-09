module.exports = {
  //User
  auth: require("./users/auth"),
  signup: require("./users/signup"),
  signin: require("./users/signin"),
  signout: require("./users/signout"),
  //Home
  home: require("./home"),
  //Post
  postDetails: require("./postDetails"),
  //Like
  addLike: require("./like").addLike,
  deleteLike: require("./like").deleteLike,
  //Comment
  readComments: require("./comment").readComments,
  createComment: require("./comment").createComment,
  updateComment: require("./comment").updateComment,
  deleteComment: require("./comment").deleteComment,
};
