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
  margin: 5px;

  /* display: grid;
  grid-template-columns: repeat(5, 1fr); */
  text-align: center;
  clear: both;
  float: left;

  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  padding: 5px;
  border-radius: 5px;
  /* border: 1px solid rgb(192, 251, 255); */
  background-color: rgb(192, 251, 255);

  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  color: black;
  cursor: pointer;
  &:after {
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    border-radius: 5px;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  &:hover {
    color: black;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
    transition: all 0.3s ease;
  }
`;

function HashTagTemplate({ keywordDummy, totalWidth, totalHeight }) {
  return (
    <>
      <KeyWordBox id="total-box">
        {keywordDummy.map((keyword, idx) => {
          return (
            <div key={idx} className="ootdImageBox">
              {/* <span className="each-tag">{keyword}</span> */}
              <KeyWord>{keyword}</KeyWord>
            </div>
          );
        })}
      </KeyWordBox>
    </>
  );
}

export default HashTagTemplate;
