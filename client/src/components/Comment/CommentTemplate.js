import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const CommentWrapper = styled.div`
  width: 100%;
  border: 1px gray solid;
`;

function CommentTemplate({ commentDummy }) {
  // console.log(commentDummy);
  return (
    <>
      <CommentWrapper>
        {commentDummy.map((comment, idx) => {
          if (comment.text === "\n") return null;
          // if (comment.text === "") alert("내용을 입력해주세요");
          return (
            <Comments
              key={idx}
              img={comment.img}
              nickname={comment.nickname}
              text={comment.text}
              initialTags={comment.tags}
              date={comment.date}
              commentId={idx}
              editable={comment.editable}
            ></Comments>
          );
        })}
      </CommentWrapper>
    </>
  );
}

// export default CommentTemplate;
export default React.memo(CommentTemplate);
