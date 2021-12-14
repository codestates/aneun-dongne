import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const CommentWrapper = styled.div`
  width: 100%;
  /* border: 1px gray solid; */
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
            <div key={idx}>
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
