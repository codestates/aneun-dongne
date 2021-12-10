const { Comment, Hashtag, Post, Sequelize } = require("../../../models");

// 이 함수는 post_hashtag table도 업데이트시켜야 한다
//덧글을 수정할때마다 포스트 페이지 전체를 렌더링해야 함

module.exports = async (comment_id, comment_user_id, comment_post_contentid) => {
  await Comment.destroy({
    where: {
      id: comment_id,
      comment_user_id: comment_user_id, //필수
      comment_post_contentid: comment_post_contentid, //필수
    },
  });
  // 함수 실행하자마자 먼저 댓글 삭제
  // 조인 테이블의 데이터는 자동으로 삭제됨 (onDelete : CASCADE)

  let obj = {};
  let allTagsOfComments = [];
  let arrallTagsOfComments = [];

  await Comment.findAll({
    raw: true,
    attributes: ["comment_tags"],
    where: {
      comment_post_contentid: comment_post_contentid,
    },
  })
    .then(async (data) => {
      if (data.length === 0) {
        console("no data");
      } else {
        //태그가 하나라도 있을 경우 실행되는 로직
        console.log(data);
        //let data = ["a,t,b", "c,d", "a,b,t,h,a", "t", "y,t"]
        let flatdata = await data
          .map((el) => {
            return el.comment_tags.split(",");
          })
          .flat(); // ["a","t","b","c","d","a","b","t","h","a","t","y","t"]
        console.log(flatdata);
        let set = new Set(flatdata); //{"a","t","b","c","d","h","y"}
        await flatdata.forEach((x) => {
          obj[x] = (obj[x] || 0) + 1;
        }); //{"a":3,"t":4,"b":2,"c":1,"d":1,"h":1,"y":1}
        console.log(set);
        allTagsOfComments = [...set]; //["a","t","b","c","d","h","y"]
        arrallTagsOfComments = allTagsOfComments.map((el) => {
          return [el];
        }); //[["a"],["t"],["b"],["c"],["d"],["h"],["y"]]
        for (let i = 0; i < arrallTagsOfComments.length; i++) {
          arrallTagsOfComments[i].push(obj[arrallTagsOfComments[i]]);
          arrallTagsOfComments[i].push(i);
        } //[["a",3,0],["t",4,1],["b"],["c"],["d"],["h"],["y"]]
        arrallTagsOfComments.sort((a, b) => {
          let cntA = a[1];
          let cntB = b[1];
          let idxA = a[2];
          let idxB = b[2];

          if (cntA > cntB) return -1;
          if (cntA < cntB) return 1;
          if (idxA > idxB) return 1;
          if (idxA < idxB) return -1;
          return 0;
        });
        console.log(obj);
        console.log(arrallTagsOfComments);
      }
    })
    .catch((err) => console.log(err));
  // 댓글 삭제 이후 남은 댓글 목록의 모든 해시태그들 중 가장 개수가 많고 먼저 등록된 순서대로 정렬
  // arrallTagsOfComments [[태그 이름, 개수, 인덱스(작을수록 더 먼저 등록)],[],[],]

  const findPost = await Post.findOne({
    where: {
      post_contentid: comment_post_contentid,
    },
  });

  await findPost.setHashtags(null); //인스턴스를 전부 끊는다

  if (arrallTagsOfComments[0] !== undefined) {
    const post_tag1 = await Hashtag.findOne({
      where: {
        hashtag_name: arrallTagsOfComments[0][0],
      },
    });
    await findPost.addHashtag(post_tag1);
  }
  if (arrallTagsOfComments[1] !== undefined) {
    const post_tag2 = await Hashtag.findOne({
      where: {
        hashtag_name: arrallTagsOfComments[1][0],
      },
    });
    await findPost.addHashtag(post_tag2);
  }

  // 해시태그 2개와 포스트를 연결
  // 만약 포스트와 연결된 해시태그가 존재한다면 지우고 다시 연결해야 한다
  //기존에 포스트와 연결된 태그 인스턴스가 있을 경우

  let postTags = "";
  if (arrallTagsOfComments.length >= 2) {
    postTags = `${arrallTagsOfComments[0][0]}` + `,` + `${arrallTagsOfComments[1][0]}`;
  }
  if (arrallTagsOfComments.length === 1) {
    postTags = `${arrallTagsOfComments[0][0]}`;
  }

  await Post.update(
    {
      post_tags: postTags,
    },
    {
      where: {
        post_contentid: comment_post_contentid,
      },
    }
  ); //새 해시태그 정보를 포스트 테이블에 업데이트
};
