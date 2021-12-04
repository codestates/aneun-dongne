import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const CommentWrapper = styled.div`
  width: 100%;
`;

function CommentTemplate({ commentDummy }) {
  // console.log(commentDummy);
  return (
    <>
      <CommentWrapper>
        {commentDummy.map((comment, idx) => {
          return (
            <div key={idx}>
              <Comments commentId={idx} comment={comment}></Comments>
            </div>
          );
        })}
      </CommentWrapper>
    </>
  );
}

export default CommentTemplate;
