import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import HashTagTemplate from "../HashTagTemplate/HashTagTemplate";
import { token, kToken } from "../../recoil/recoil";
import { useRecoilValue } from "recoil";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 3px rgb(107, 217, 224) solid;

  justify-content: center;
  border-radius: 20px;
  width: 300px;
  /* height: 275px; */
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: box-shadow 0.1s, transform 0.1s;
  text-decoration: inherit;
  animation: color-change3 2s infinite;
  @keyframes color-change3 {
    0% {
      /* border-left: #c1ff6b 3px solid; */

      /* border-top: #c1ff6b 3px solid; */
      border: #c1ff6b 3px solid;
    }
    50% {
      /* border-left: #fab4b4 3px solid; */

      /* border-top: #fab4b4 3px solid; */
      border: #fab4b4 3px solid;
    }
    100% {
      /* border-left: #46ffff 3px solid; */

      /* border-top: #46ffff 3px solid; */
      border: #46ffff 3px solid;
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
const LikeBtn = styled.button`
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

function PlaceCards({ title, img, addr1, onClick, contentId }) {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [tags, setTags] = useState([]);
  const [like, setLike] = useState(0); //나중에 서버로부터 받아오게 된다.
  const [likeOrNot, setLikeOrNot] = useState(false); //이것도 서버에서 받아와야함
  const [likeLoading, setLikeLoading] = useState(false);
  useEffect(() => {
    const getHashTag = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
          headers: {
            Authorization: `Bearer ${accessToken || kakaoToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        // console.log(response.data.post.post_tags);
        if (response.data.post.post_tags) setTags(response.data.post.post_tags.split(","));
      } catch (e) {
        console.log(e);
      }
    };
    const getLike = async () => {
      try {
        setLikeLoading(true);
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/like/${contentId}`, {
          headers: {
            Authorization: `Bearer ${accessToken || kakaoToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        const like = { likeOrNot: response.data.data.isLiked, likeCount: response.data.data.likeCount };
        setLike(like.likeCount);
        setLikeOrNot(like.likeOrNot);
        setLikeLoading(false);
      } catch (e) {
        console.log(e);
        setLikeLoading(false);
      }
    };
    getHashTag();
    getLike();
  }, []);
  const LikeHandler = async (e) => {
    e.preventDefault();
    setLikeLoading(true);
    if (!likeOrNot) {
      e.preventDefault();
      axios
        .post(
          `${process.env.REACT_APP_API_URL}/like/${contentId}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${accessToken || kakaoToken}`,
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        )
        .then((res) => {
          const like = { likeOrNot: res.data.data.isLiked, likeCount: res.data.data.likeCount };
          console.log(like);
          setLike(like.likeCount);

          setLikeOrNot(like.likeOrNot);
        });
    } else {
      e.preventDefault();
      axios
        .delete(`${process.env.REACT_APP_API_URL}/like/${contentId}`, {
          headers: {
            Authorization: `Bearer ${accessToken || kakaoToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((res) => {
          const like = { likeOrNot: res.data.data.isLiked, likeCount: res.data.data.likeCount };

          setLike(like.likeCount);
          setLikeOrNot(like.likeOrNot);
        });
    }
    setLikeLoading(false);
  };
  // console.log(addr1)
  return (
    <PlaceCard onClick={onClick}>
      <div className="place-cards">
        <HashTagTemplate keywordDummy={tags || []} />
        {img ? <img src={img} /> : <img src="./image/notImageYet.png" />}
        <div className="place-cards-title">
          <div>{`[${addr1}] `}</div>
          <span>{title}</span>
        </div>
        {likeLoading ? (
          <LikeBtn onClick={(e) => e.preventDefault()}>
            <i className={likeOrNot ? "fas fa-heart" : "hide"}>
              <span>?</span>
            </i>
          </LikeBtn>
        ) : (
          <LikeBtn onClick={(e) => LikeHandler(e)}>
            <i className={likeOrNot ? "fas fa-heart" : "hide"}>
              <span>{like}</span>
            </i>

            <i className={likeOrNot ? "hide" : "far fa-heart"}>
              <span>{like}</span>
            </i>
          </LikeBtn>
        )}
      </div>
    </PlaceCard>
  );
}

function PropsEqual(prev, next) {
  // console.log(prev.img === next.img);
  return prev.img === next.img;
}
// console.log(React.memo(PlaceCards, PropsEqual));
export const MemoCards = React.memo(PlaceCards, PropsEqual);
// export default React.memo(PlaceCards, PropsEqual);
