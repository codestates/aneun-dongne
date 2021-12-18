import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Empty from "../Empty/Empty";
import { getAreaNames } from "../../modules/AreaCodetoName";
import Icon from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";
// const Body = styled.div`
//   grid-template-columns: repeat(3, 1fr);
//   grid-auto-rows: 50px;
// `;

const Lists = styled.div`
  @media (min-width: 1040px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1360px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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
  border: 1px #3a6fb0 solid;
  border-radius: 20px;
  width: 300px;

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

  .place-cards {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    background-color: white;
    border-radius: 20px;
    /* width: 100%; */
  }

  .place-cards > img {
    width: 80%;
    height: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    margin-bottom: 10px;
    border-radius: 20px;
  }

  .place-cards-title {
    margin-left: 10px;
    margin-top: 6px;
  }

  @media screen and (max-width: 710px) {
    width: 220px;
    height: 350px;
    .place-cards > img {
      height: 150px;
    }
  }

  @media screen and (max-width: 560px) {
    width: 140px;
    height: 310px;
    .place-cards > img {
      height: 120px;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 0.7rem;
    width: 130px;
    height: 260px;
    .place-cards > img {
      height: 100px;
    }
  }
`;

const KeyWord = styled.span`
  margin-top: auto;
  margin-bottom: 5%;

  text-align: center;
  clear: both;
  float: left;
  margin-left: 6px;
  margin-right: 6px;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  padding: 5px;
  border-radius: 20px;
  border: 1px solid #3a6fb0;
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
  margin-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const LikeBtn = styled.div`
  border: 1px red solid;
  border-radius: 20px;
  color: red;
  font-weight: bolder;
  width: 80px;
  height: 40px;
  margin: 20px auto;
  cursor: pointer;
  text-justify: center;
  flex-direction: row-reverse;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: all 0.1s ease-in-out;
  i {
    color: red;

    justify-content: center;
    margin-left: 25px;
    margin-right: 3px;
    margin-top: 10px;
  }
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

export const TopButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: #b2e0f4;
  color: white;
  transition: all 0.3s;

  :hover {
    background-color: #9cb1e0;
    transition: all 0.3s;
  }
`;

const LikeLists = ({ postsInfo }) => {
  const sigungu = getAreaNames(postsInfo.post_areacode, postsInfo.post_sigungucode);
  const history = useHistory();
  const ToScrollTop = (e) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handlecontentClick = () => {
    history.push(`/detailpage/${postsInfo.post_contentid}`);
  };
  return (
    <Lists>
      {!postsInfo.length === 0 ? (
        <Empty />
      ) : (
        <PlaceCard onClick={handlecontentClick}>
          <KeyWordBox>
            {!postsInfo.post_tags ? (
              ""
            ) : (
              <>
                {postsInfo.post_tags.split(",").map((tag) => {
                  return <KeyWord>{tag}</KeyWord>;
                })}
              </>
            )}
          </KeyWordBox>
          <div className="place-cards">
            {!postsInfo.post_firstimage ? (
              <img src="/images/not-image-yet.png" />
            ) : (
              <img src={postsInfo.post_firstimage} />
            )}
          </div>
          <div className="place-cards-title">
            <div className="user-area">
              [{sigungu.areaName} {sigungu.siggName}]
            </div>
            <div className="place-cards-title">
              <div className="user-area">
                [{sigungu.areaName} {sigungu.siggName}]
              </div>
              <div>{postsInfo.post_title}</div>
            </div>
            <LikeBtn>
              <div>
                <i class="fas fa-heart"></i>
                {postsInfo["Likes.likeCount"]}
              </div>
            </LikeBtn>
          </div>
        </PlaceCard>
      )}
      <TopButton onClick={ToScrollTop}>
        <Icon size={"60"} icon={angleUp} />
      </TopButton>
    </Lists>
  );
};

export default LikeLists;
