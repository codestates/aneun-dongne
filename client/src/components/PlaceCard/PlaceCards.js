import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import HashTagTemplate from "../HashTagTemplate/HashTagTemplate";
import { token, kToken, loginState, loginModal, pickpoint, placelist } from "../../recoil/recoil";
import { useRecoilValue, useSetRecoilState } from "recoil";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 1px #3a6fb0 solid;

  justify-content: center;
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
  }
  .place-cards-title {
    margin-left: 10px;
    margin-top: 6px;
  }
  @media (max-width: 1023px) {
    width: 300px;
  }
  @media (max-width: 660px) {
    width: 80%;
    /* height: 300px; */
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
  }
  &:hover:after {
    left: 0;
    width: 100%;
  }
`;

function PlaceCards({ title, img, addr1, onClick, contentId }) {
  const placeList = useRecoilValue(placelist);
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [tags, setTags] = useState([]);
  const [like, setLike] = useState(0); //나중에 서버로부터 받아오게 된다.
  const [likeOrNot, setLikeOrNot] = useState(false); //이것도 서버에서 받아와야함
  const [likeLoading, setLikeLoading] = useState(false);
  //로긴상태,로긴모달
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
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
    setLikeLoading(true);
    getHashTag();
    getLike();
    setLikeLoading(false);
  }, [placeList, like, likeOrNot]);
  const LikeHandler = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
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
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setIsLoginOpen(true);
          }
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
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setIsLoginOpen(true);
          }
        });
    }
    setLikeLoading(false);
  };
  // console.log(addr1)
  return (
    <PlaceCard onClick={onClick}>
      <div className="place-cards">
        {/* <HashTagTemplate keywordDummy={tags || []} /> */}
        {img ? <img src={img} /> : <img src="./images/not-image-yet.png" />}
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
