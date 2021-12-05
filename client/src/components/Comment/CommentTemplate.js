import React from "react";
import styled from "styled-components";
import Comments from "./Comments";

const CommentWrapper = styled.div`
  width: 100%;
`;

function CommentTemplate({ commentDummy }) {
  console.log(commentDummy);
  return (
    <>
      <CommentWrapper>
        {commentDummy.map((comment, idx) => {
          return (
            <>
              {/* <div key={idx}> */}
              <Comments
                key={idx}
                img={comment.img}
                nickname={comment.nickname}
                text={comment.text}
                initialTags={comment.tags}
                date={comment.date}
                commentId={idx}
              ></Comments>
              {/* </div> */}
            </>
          );
        })}
      </CommentWrapper>
    </>
  );
}

// export default CommentTemplate;
export default React.memo(CommentTemplate);
