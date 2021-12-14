import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LikeLists from "./LikeLists.js";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

import styled from "styled-components";
// const [like, setLike] = useState(0);
const data = [
  {
    id: 6925,
    post_addr1: "서울특별시 송파구 올림픽로 424",
    post_addr2: "(방이동)",
    post_areacode: 1,
    post_contentid: 126508,
    post_contenttypeid: 12,
    post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/39/2650439_image2_1.jpg",
    post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/39/2650439_image3_1.jpg",
    post_mapx: "127.12244258270000000000",
    post_mapy: "37.51944563860000000000",
    post_sigungucode: 18,
    post_title: "올림픽공원",
    post_wtmx: "210824.233575990740000000000000000000",
    post_wtmy: "446669.384806420650000000000000000000",
    post_tags: null,
    distance: 0,
    "Likes.likeCount": 2,
    isLiked: true,
  },
  {
    id: 4817,
    post_addr1: "서울특별시 송파구 올림픽로 424",
    post_addr2: null,
    post_areacode: 1,
    post_contentid: 126508,
    post_contenttypeid: 12,
    post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/14/1567814_image2_1.jpg",
    post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/14/1567814_image3_1.jpg",
    post_mapx: "127.12297582370000000000",
    post_mapy: "37.52098713620000000000",
    post_sigungucode: 18,
    post_title: "서울 몽촌토성",
    post_wtmx: "210871.149799955540000000000000000000",
    post_wtmy: "446840.533233923840000000000000000000",
    post_tags: null,
    distance: 177.46243632929102,
    "Likes.likeCount": 0,
    isLiked: true,
  },
  {
    id: 6927,
    post_addr1: "서울특별시 송파구 올림픽로 424",
    post_addr2: "(방이동)",
    post_areacode: 1,
    post_contentid: 126508,
    post_contenttypeid: 12,
    post_firstimage: "http://tong.visitkorea.or.kr/cms/resource/88/2770088_image2_1.jpg",
    post_firstimage2: "http://tong.visitkorea.or.kr/cms/resource/88/2770088_image3_1.jpg",
    post_mapx: "127.12297582370000000000",
    post_mapy: "37.52098713620000000000",
    post_sigungucode: 18,
    post_title: "올림픽공원들꽃마루",
    post_wtmx: "210871.149799955540000000000000000000",
    post_wtmy: "446840.533233923840000000000000000000",
    post_tags: null,
    distance: 177.46243632929102,
    "Likes.likeCount": 0,
    isLiked: true,
  },
];
const MyLike = () => {
  const [userInfo, setUserInfo] = useState({});

  const [img, setImg] = useState(""); //post_firstimage -> 관광지 사진
  const [areacode, setAreacode] = useState(""); // post_areacode: 1  ->위치표기 함수 있음.
  const [title, setTitle] = useState(""); // post_title -> 올림픽공원
  const [likeCount, setLikeCount] = useState(""); //Likes.likeCount
  const [hashtag, setHashtag] = useState(""); //해시태그
  const [like, setLike] = useState(false); //DetailPage에서 일단 가져옴

  const [placeLocation, setPlaceLocation] = useState({ lon: 0, lat: 0 }); //위치 정보
  const [postsInfo, setPostsInfo] = useState(data);

  const accessToken = useRecoilValue(token);

  const history = useHistory();

  const Margin = styled.div`
    margin-left: 500px;
    font-size: 100px;
  `;

  const renderMyLike = () =>
    axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/likelists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: "true",
      })
      .then(() => {
        console.log("정보가 들어오면 확인하자", data);

        setPostsInfo(data);
        //res.data.post.post_firstimage
        setImg(data.post_firstimage);
        setAreacode(data.post_areacode);
        setTitle(data.post.post_title);
        setLikeCount(data["Like.likeCount"]);
        setLike(data.isLiked);
      })
      .then(() => {
        console.log("&&", postsInfo);
        alert(postsInfo);
      });

  useEffect(() => {
    // setPostsInfo(data);
    renderMyLike();
  }, []);

  const handlecontentClick = () => {
    history.push(`/detailpage/${postsInfo.post_contentid}`);
  };

  return (
    <Margin>
      <div className="list">
        {postsInfo.length === 0
          ? "좋아요 한 곳이 없습니다"
          : postsInfo.map((postsInfo) => {
              return <LikeLists postsInfo={postsInfo} key={postsInfo.id} handlecontentClick={handlecontentClick} />;
            })}
      </div>
    </Margin>
  );
};

export default MyLike;
