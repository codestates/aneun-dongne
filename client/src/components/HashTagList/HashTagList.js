import React from "react";
import styled from "styled-components";
import HashTagTemplate from "../HashTagTemplate/HashTagTemplate";

const Div = styled.div`
  display: flex;
  width: 500px;
  border-radius: 10px;
  border: 1px rgb(192, 251, 255) solid;
  height: 140px;
  margin-top: 10px;
`;

function HashTagList() {
  return (
    <>
      <Div>
        <div id="totalbox">
          <HashTagTemplate keywordDummy={keywordDummy} />
        </div>
      </Div>
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
