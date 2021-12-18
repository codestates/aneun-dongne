import React from "react";
import { Styled } from "./style";
import HashTagTemplate from "../HashTagTemplate/HashTagTemplate";

function HashTagList() {
  return (
    <>
      <Styled.Div>
        <div id="totalbox">
          <HashTagTemplate keywordDummy={keywordDummy} />
        </div>
      </Styled.Div>
    </>
  );
}

export default HashTagList;

const keywordDummy = [
  "#산책하기좋은",
  "#절",
  "#왕릉",
  "#공원",
  "#놀이공원",
  "#데이트",
  "#자전거코스",
  "#가을",
  "#미술관",
  "#박물관",
];
