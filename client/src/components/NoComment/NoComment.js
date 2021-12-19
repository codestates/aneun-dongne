import React from "react";
import { Styled } from "./style";

import OnlyReadHashTag from "../OnlyReadHashTag/OnlyReadHashTag";

function NoComment() {
  return (
    <Styled.CommentWrapper>
      <Styled.Comment>
        <Styled.ProfileBox>
          <Styled.Profile>
            <Styled.ProfileImgBox>
              <Styled.ProfileImg
                src={`https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png`}
              ></Styled.ProfileImg>
            </Styled.ProfileImgBox>
            <Styled.NickName>아는동네</Styled.NickName>
          </Styled.Profile>
        </Styled.ProfileBox>
        <Styled.ContentBox>
          <Styled.ContentWrapper>
            <Styled.Content>여러분의 첫 댓글을 기다리고 있어요!</Styled.Content>
            <Styled.HashTagWrapper>
              <OnlyReadHashTag initialTags={["해시태그도", "남겨주세요!"]} />
            </Styled.HashTagWrapper>
          </Styled.ContentWrapper>
        </Styled.ContentBox>
      </Styled.Comment>
    </Styled.CommentWrapper>
  );
}
function PropsEqual(prev, next) {
  return prev.text === next.text;
}
export default NoComment;
