import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const CommentWrapper = styled.div`
  width: 100%;
`;

function CommentCommon({ commentDummy }) {
  return (
    <>
      <CommentWrapper>
        {commentDummy.map((comment, idx) => {
          return <Comments key={idx} comment={comment}></Comments>;
        })}
      </CommentWrapper>
    </>
  );
}

export default CommentCommon;
