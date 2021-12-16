import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import notImageYet from "../img/not-image-yet.png";
import HashTagTemplate from "./HashTag/HashTagTemplate";
import { token, kToken } from "../recoil/recoil";
import { useRecoilValue } from "recoil";
const PlaceCard = styled.div`
  margin: auto;
  margin-top: 40px;
  border: 3px rgb(107, 217, 224) solid;

  border-radius: 20px;
  width: 300px;
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

function PlaceCards({ title, img, addr1, onClick, contentId }) {
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [tags, setTags] = useState([]);
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
    getHashTag();
  }, []);
  // console.log(addr1)
  return (
    <PlaceCard onClick={onClick}>
      <div className="place-cards">
        <HashTagTemplate keywordDummy={tags || []} />
        {img ? <img src={img} /> : <img src={notImageYet} />}
        <div className="place-cards-title">
          <div>{`[${addr1}] `}</div>
          <span>{title}</span>
        </div>
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

const keywordDummy = ["#산책하기좋은", "#절"];
