import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Empty from "../Empty/Empty";
import { getAreaNames } from "../../modules/AreaCodetoName";

const Lists = styled.div`
  padding: 0px 25px;
  @media screen and (max-width: 400px) {
    padding: 0px 5px;
  }
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
  margin-top: 5%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const LikeBtn = styled.div`
  border: 1px red solid;
  border-radius: 20px;

  width: 80px;
  height: 40px;
  margin: 20px auto;
  cursor: pointer;
  text-justify: center;
  flex-direction: row-reverse;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: all 0.1s ease-in-out;
  i {
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
  @media screen and (max-width: 400px) {
    width: 60px;
    height: 30px;
  }
`;

const LikeLists = ({ postsInfo }) => {
  const sigungu = getAreaNames(postsInfo.post_areacode, postsInfo.post_sigungucode);
  const history = useHistory();

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

            <div>{postsInfo.post_title}</div>
          </div>
          <LikeBtn>
            <div>
              <i className="fas fa-heart"></i>
              {postsInfo["Likes.likeCount"]}
            </div>
          </LikeBtn>
        </PlaceCard>
      )}
    </Lists>
  );
};

export default LikeLists;
