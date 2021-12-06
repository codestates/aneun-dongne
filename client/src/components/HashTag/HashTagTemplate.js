import React from "react";
import styled from "styled-components";
const KeyWordBox = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr 1fr 1fr;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  padding: 30px;
  height: 100%;

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
  border-radius: 5px;
  border: 1px solid rgb(192, 251, 255);
  background-color: rgba(192, 251, 255, 0.8);
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

function HashTagTemplate({ keywordDummy }) {
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

export default HashTagTemplate;
