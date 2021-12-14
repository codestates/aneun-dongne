import React from "react";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
// const [like, setLike] = useState(0);

const MyLike = () => {
  const [userInfo, setUserInfo] = useState({});
  const [img, setImg] = useState(""); //post_firstimage -> 관광지 사진
  const [areacode, setAreacode] = useState(""); // post_areacode: 1  ->위치표기 함수 있음.
  const [title, setTitle] = useState(""); // post_title -> 올림픽공원

  const [likeCount, setLikeCount] = useState(false);

  const [like, setLike] = useState(0); //DetailPage에서 일단 가져옴
  const [likeOrNot, setLikeOrNot] = useState(false); //DetailPage에서 일단 가져옴
  const [placeLocation, setPlaceLocation] = useState({ lon: 0, lat: 0 }); //위치 정보

  const history = useHistory();
  //포스트 정보가 들어오는 곳
  // const handleLikePage = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
  //       withCredentials: "true",
  //     })
  //     .then((res) => {
  //       console.log("정보가 들어오면 확인하자", res.data);
  //       setImg(res.data.post.post_firstimage);
  //       setAreacode(res.data.post_areacode);
  //       setTitle(res.data.post.post_title);
  //       setLikeCount(res.data.Like.likeCount);
  //     });
  //   // .then((res) => {});
  // };

  // //좋아요 버튼을 해지
  // useEffect(() => {
  //   axios
  //     .delete(`${process.env.REACT_APP_API_URL}/like/${contentId}`, {
  //       withCredentials: "true",
  //     })
  //     .then((res) => {
  //       const like = { likeOrNot: res.data.data.isLiked, likeCount: res.data.data.likeCount };
  //       console.log("정보가 들어오면 확인하자", res.data);
  //       setLike(like.likeCount);
  //       setLikeOrNot(like.likeOrNot);
  //     });
  // }, []);

  // useEffect(() => {
  //   handleLikePage();
  // }, []);

  return (
    <div id="like-list">
      {/* {!userInfo === false ? ( //userinfo like가 없는경우에
        <div id="like-list-text">좋아요 한 게시글이 없습니다.</div>
      ) : (
        <MyLikelist
          id="content-like-list"
           onClick={() => history.push(`${process.env.REACT_APP_API_URL}/mypage/likelists/${like_post_contentid.id}`)}
        ></MyLikelist>
      )} */}
    </div>
  );
};

export default MyLike;
