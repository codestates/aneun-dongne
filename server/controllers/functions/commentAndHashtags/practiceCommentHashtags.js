const { Comment, Hashtag, User } = require("../../../models");
const deleteCommentData = require("./deleteCommentData");
const createCommentHashtagData = require("./createCommentHashtagData");
const getCommentHashtagData = require("./getCommentHashtagData");
const updateCommentHashtagData = require("./updateCommentHashtagData");
//node ./controllers/functions/commentAndHashtags/practiceCommentHashtags.js

// deleteCommentData(1);

// Comment.findOne({where : {id : id}})

// deleteCommentData(12, 1, 2360786);
// deleteCommentData(2);
// deleteCommentData(3);
const aa = async () => {
  let commentsData = [];
  commentsData = await getCommentHashtagData(1, 126508);
  console.log("aa");
  console.log(commentsData);
};

aa();

//comment_id, comment_user_id, comment_post_contentid, comment_content, comment_tags_arr
// updateCommentHashtagData(1, 1, 126508, "아이들과 견학하기 좋은 곳이예요.", ["가을", "데이트"]);
// createCommentHashtagData(1, 2360786, "공기가 맑아요.", ["가을"]);
// createCommentHashtagData(2, ["데이트", "공원", "산책하기좋은"]);
// createCommentHashtagData(3, ["데이트", "가을"]);
// createCommentHashtagData(4, ["해시태그가", "적은", "순서대로", "보내지는지", "확인"]);

// deleteCommentData(1);
