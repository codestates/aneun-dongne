import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Mylike from "./MyLike";
import { getNames, getAreaNames } from "../../AreaCodetoName";

const Lists = styled.div`
  /* height: 100vh; */

  @media (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 1360px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1730px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 40px;
  text-decoration-line: none;
  margin-left: 30px;
`;
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 1px rgb(107, 217, 224) solid;

  border-radius: 20px;
  width: 450px;
  /* height: 275px; */
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: box-shadow 0.1s, transform 0.1s;
  text-decoration: inherit;
  animation: color-change 2s infinite;
  @keyframes color-change {
    0% {
      border-left: #c1ff6b 1px solid;

      border-top: #c1ff6b 1px solid;
    }
    50% {
      border-left: #fab4b4 1px solid;

      border-top: #fab4b4 1px solid;
    }
    100% {
      border-left: #46ffff 1px solid;

      border-top: #46ffff 1px solid;
    }
  }
  &:hover {
    transform: scale(1.1);
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  img {
    width: 100%;
  }
  .place-cards {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    width: 100%;
  }
  .place-cards > img {
    width: 80%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;

    border-radius: 20px;

    /* object-fit: scale-down; */
  }
  .place-cards-title {
    margin-left: 10px;
    margin-top: 6px;
  }
`;

const KeyWord = styled.span`
  margin-top: auto;
  margin-bottom: 5%;

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
const LikeBtn = styled.div`
  position: absolute;
  border: 1px red solid;
  border-radius: 20px;
  /* background: white; */
  width: 60px;
  height: 30px;
  margin: 20px auto;
  cursor: pointer;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: all 0.1s ease-in-out;

  &:hover {
    color: black;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.1);
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }

  &:active {
    transform: scale(1.3);
  }
`;
export default function LikeLists({ postsInfo }) {
  // const sliceWords = () => {
  //   for (let i = 0; i < post_tagsArr.length; i++) {
  //     if (post_tagsArr === ",") {
  //       post_tagsArr === "";
  //     }
  //   }
  // };

  const history = useHistory();

  const handlecontentClick = () => {
    history.push(`/detailpage/${postsInfo.post_contentid}`);
  };
  return (
    <Lists onClick={handlecontentClick}>
      <PlaceCard>
        <img src={postsInfo.post_firstimage} />
        <div className="place-cards-title">
          <div>
            [{getNames(postsInfo.post_areacode)}][{postsInfo.post_addr1}]
          </div>
          {/* <div>{postsInfo.post_sigungucode}</div> */}

          <div></div>
          <div>{postsInfo.post_title}</div>
          {/* <div>{postsInfo.isLiked}</div> */}
        </div>
        <LikeBtn>
          <div>{postsInfo["Likes.likeCount"]}</div>
        </LikeBtn>
        <KeyWordBox>{!postsInfo.post_tags ? "" : <KeyWord>{postsInfo.post_tags}</KeyWord>}</KeyWordBox>
        <div>{postsInfo.likeCount}</div>
      </PlaceCard>
    </Lists>
  );
}
//post_tags: "데이트,공원"
// ,를 #으로 바꿔주는 함수를 넣어야할 것 같음.
//서울특별시 !구
