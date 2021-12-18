import React from "react";
import { Styled } from "./style";

import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";

function NoComment() {
  return (
    <>
      <Styled.Comment>
        <Styled.Profile>
          <Styled.ProfileImg
            src={`https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png`}
          ></Styled.ProfileImg>
          <Styled.NickName>아는동네</Styled.NickName>
        </Styled.Profile>

        <Styled.ContentBox>
          <div>여러분의 첫 댓글을 기다리고 있어요!</div>
          <Styled.HashTagWrapper>
            <OnlyReadHashTag initialTags={["해시태그도", "남겨주세요!"]} />
          </Styled.HashTagWrapper>
        </Styled.ContentBox>
      </Styled.Comment>
    </>
  );
}
function PropsEqual(prev, next) {
  console.log(prev.text === next.text);
  return prev.text === next.text;
}
export default NoComment;
// export default Comments;
