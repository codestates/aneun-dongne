import React from "react";
import styled from "styled-components";
const KeyWordBox = styled.div`
  display: flex;
  justify-content: center;
  /* background-color: red; */
  flex-wrap: wrap;
  /* padding: 20px; */
  height: 100%;
  /* justify-content: space-evenly; */
  /* background-color: pink; */

  /* background-color: white; */
`;
const KeyWord = styled.span`
  margin-top: auto;
  margin-bottom: auto;

  text-align: center;
  clear: both;
  float: left;
  /* max-width: 130px; */
  /* max-height: 25px; */
  margin-left: 6px;
  margin-right: 6px;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  padding: 5px;
  border-radius: 20px;
  border: 1px solid rgb(192, 251, 255);
  background-color: rgba(192, 251, 255, 0.8);
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );

  color: black;
  cursor: pointer;

  &:hover {
    color: black;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

function HashTagTemplate({ keywordDummy, totalWidth, totalHeight }) {
  return (
    <>
      <KeyWordBox>
        {keywordDummy.map((keyword, idx) => {
          return <KeyWord key={idx}>{keyword}</KeyWord>;
        })}
      </KeyWordBox>
    </>
  );
}
// export default HashTagTemplate;
export default React.memo(HashTagTemplate);
