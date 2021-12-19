import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getAreaNames } from "../../modules/AreaCodetoName";
import Icon from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";

import Empty from "../Empty/Empty";
import { Styled } from "./style";

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
              <img src="/images/not-image-yet.png" />
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
            <Styled.LikeBtn>
              <i className="fas fa-heart"></i>
              {postsInfo["Likes.likeCount"]}
            </Styled.LikeBtn>
          </div>
        </Styled.PlaceCard>
      )}
      <Styled.TopButton onClick={ToScrollTop}>
        <Icon size={"60"} icon={angleUp} />
      </Styled.TopButton>
    </Styled.Lists>
  );
};

export default React.memo(LikeLists);
