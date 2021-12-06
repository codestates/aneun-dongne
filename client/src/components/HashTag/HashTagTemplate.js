import React from "react";
import styled from "styled-components";
const KeyWordBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  height: 100%;
  justify-content: space-evenly;
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
  padding: 3px;
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
  // console.log(totalWidth, totalHeight);
  // if (totalHeight !== 0 && totalHeight !== 0) {
  //   let images = document.querySelectorAll(".ootdImageBox");
  //   let colWidth = 0;
  //   if (images[0]) {
  //     colWidth = images[0].offsetWidth;
  //     console.log(images[0].children[0].scrollWidth);
  //     console.log(colWidth);
  //   }

  //   let imgStack = new Array(5).fill(0);
  //   let sum = 0;
  //   for (let i = 0; i < images.length; i++) {
  //     console.log(images[i].offsetWidth);
  //     const width = images[i].offsetWidth;
  //     if (i == 0) {
  //       sum += width;
  //       continue;
  //     }
  //     if (sum >= totalWidth) {
  //       let num = (totalWidth - sum) / (i + 1);
  //       // let arr =
  //       images[i].slice(0, i).forEach((el) => {
  //         el.style.margin = `${num}px`;
  //       });
  //     }

  // images[i].childNodes[0].style.margin = `10px`;

  // if (i === images.length - 1) {
  //   document.querySelector(".ootdList").style.height = `${Math.max.apply(0, imgStack)}px;`;
  // }
  // }
  // }
  // console.log(imgStack);
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
