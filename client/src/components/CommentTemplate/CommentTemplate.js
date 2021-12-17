import React from "react";
import styled from "styled-components";
import Comments from "../Comments/Comments";

const CommentWrapper = styled.div`
  width: 100%;
  /* border: 1px gray solid; */
  .comment-template {
    background: yellow;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 768px) {
      width: 80%;
      margin-left: 40px;
      margin-right: auto;
      /* margin-left: 10px; */
    }
    @media (max-width: 612px) {
      width: 450px;
      margin-left: 20px;
      margin-right: auto;
      /* margin-left: 10px; */
    }
  }
`;

function CommentTemplate({ commentDummy, contentId }) {
  // console.log(commentDummy);
  return (
    <>
      <CommentWrapper>
        {commentDummy.map((comment, idx) => {
          // console.log(comment);
          if (comment.text === "\n") return null;
          // if (comment.text === "") alert("내용을 입력해주세요");
          return (
            <div className="comment-template" key={idx}>
              <Comments
                uuid={comment[0].id}
                img={comment[0].user_image_path}
                nickname={comment[0].nickname}
                text={comment[0].comment_content}
                initialTags={comment[0].comment_tags}
                date={comment[0].comment_createdAt}
                commentId={comment[0].comment_post_contentid}
                editable={comment[0].editable}
                contentId={contentId}
              ></Comments>
            </div>
          );
        })}
      </CommentWrapper>
    </>
  );
}

// export default CommentTemplate;
export default React.memo(CommentTemplate);
