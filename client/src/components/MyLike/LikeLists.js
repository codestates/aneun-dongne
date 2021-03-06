import React from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useRecoilValue } from "recoil";

import { Styled } from "./style";

import { getAreaNames } from "../../modules/AreaCodetoName";
import { token, kToken } from "../../recoil/recoil";

import Empty from "../Empty/Empty";

const LikeLists = ({ postsInfo, renderMyLike }) => {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);

  const sigungu = getAreaNames(postsInfo.post_areacode, postsInfo.post_sigungucode);
  const history = useHistory();

  const handlecontentClick = () => {
    history.push(`/detailpage/${postsInfo.post_contentid}`);
  };

  const LikeHandler = async (e) => {
    e.stopPropagation();
    await axios
      .delete(`${process.env.REACT_APP_API_URL}/like/${postsInfo.post_contentid}`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then(() => {
        renderMyLike();
      });
  };

  return (
    <Styled.Lists>
      {!postsInfo.length === 0 ? (
        <Empty />
      ) : (
        <Styled.PlaceCard onClick={handlecontentClick}>
          <Styled.KeyWordBox>
            {!postsInfo.post_tags ? (
              ""
            ) : (
              <>
                {postsInfo.post_tags.split(",").map((tag, idx) => {
                  return <Styled.KeyWord key={idx}>#{tag}</Styled.KeyWord>;
                })}
              </>
            )}
          </Styled.KeyWordBox>
          <div className="place-cards">
            {!postsInfo.post_firstimage ? (
              <img className="not-img" src="/images/not-image-yet.png" />
            ) : (
              <img src={postsInfo.post_firstimage} />
            )}
          </div>
          <div className="place-cards-title">
            <div className="place-cards-title">
              <div className="user-area">
                [{sigungu.areaName} {sigungu.siggName}]
              </div>
              <div>{postsInfo.post_title}</div>
            </div>
            <Styled.LikeBtn onClick={LikeHandler}>
              <i className="fas fa-heart"></i>
              {postsInfo["Likes.likeCount"]}
            </Styled.LikeBtn>
          </div>
        </Styled.PlaceCard>
      )}
    </Styled.Lists>
  );
};

export default React.memo(LikeLists);
