import React, { useEffect, useState } from "react";
import axios from "axios";
import MapInRoom from "../../components/MapInRoom/MapInRoom";
import Cookies from "universal-cookie";
import { Styled } from "./style";
import HashTagTemplate from "../../components/HashTagTemplate/HashTagTemplate";
import CommentTemplate from "../../components/CommentTemplate/CommentTemplate";
import MyComment from "../../components/MyComment/MyComment";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  loginState,
  token,
  kToken,
  loginModal,
  deleteCommentmode,
  defaultcomments,
  commentloading,
} from "../../recoil/recoil";

import LikeLoading from "../../components/Loading/LikeLoading";
import NoComment from "../../components/NoComment/NoComment";
function DetailPage({ match }) {
  const { id } = match.params;
  const contentId = parseInt(id, 10);

  const [userinfo, setUserinfo] = useState({});
  const [overview, setOverview] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [placeAddr, setPlaceAddr] = useState("");
  const [title, setTitle] = useState("");
  const [placeLocation, setPlaceLocation] = useState({ lon: 0, lat: 0 });
  const [navi, setNavi] = useState("");
  const [tags, setTags] = useState([]);
  const [readMore, setReadMore] = useState(false);

  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  //기존댓글
  const cookies = new Cookies();
  const [defaultComment, setDefaultComment] = useRecoilState(defaultcomments);
  const [like, setLike] = useState(0); //나중에 서버로부터 받아오게 된다.
  const [likeOrNot, setLikeOrNot] = useState(false); //이것도 서버에서 받아와야함
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  //댓글지웠는지?
  const [deleteOrNot, setDeleteOrNot] = useRecoilState(deleteCommentmode);
  //로딩창
  const [likeLoading, setLikeLoading] = useState(false);
  const [commentLoading, setCommentLoading] = useState(commentloading);
  useEffect(() => {
    window.scrollTo(0, 0);
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const { post_mapx, post_mapy } = res.data.post;

        setPlaceLocation({ lat: post_mapy, lon: post_mapx });
        setImgURL(res.data.post.post_firstimage);
        setTitle(res.data.post.post_title);
        if (res.data.post.post_tags) setTags(res.data.post.post_tags.split(",").map((el) => "#" + el));
        setPlaceAddr(res.data.post.post_addr1);
        if (res.data.post.post_homepage_path) {
          if (res.data.post.post_homepage_path.split('<a href="')[1]) {
            setPageURL(res.data.post.post_homepage_path.split('<a href="')[1].split(`"`)[0]);
          }
        }
        setNavi(`https://map.kakao.com/link/to/${res.data.post.post_title},${post_mapy},${post_mapx}`);
        if (res.data.post.post_content) setOverview(res.data.post.post_content);
      });
  }, []);

  useEffect(() => {
    //! 태그 추가될때만 실행 -> 태그 상위2개가 바뀌면 업데이트됨 -> 상위 2개 바뀌었을때만 줄 수 있을까요..
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.post.post_tags) setTags(res.data.post.post_tags.split(",").map((el) => "#" + el));
      });
  }, [defaultComment]);

  useEffect(async () => {
    setCommentLoading(true);
    await axios
      .get(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          // Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        let arr = res.data.data.map((el) => {
          return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
        });

        setDefaultComment(arr);
        setUserinfo(res.data.userinfo);
      });
    setCommentLoading(false);

    // setDeleteOrNot(false);
  }, [, deleteOrNot]);

  useEffect(() => {
    setLikeLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/like/${contentId}`, {
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
      .then((res) => {
        setLikeLoading(false);
      });
  }, []);

  const overView = overview.replace(/(<([^>]+)>)/gi, "");
  let FirstOverView = overView.slice(0, 130);
  let SecondOverView = overView.slice(130);

  const readMoreHandler = () => {
    //readMore=true일때는 더보기, false일때는 간략히 버튼이 보이게 함
    setReadMore(!readMore);
  };

  //! 이 글에 내가 좋아요를 눌렀는지 싫었는지도 DB에 저장해야할듯
  //! 초기화 안되게
  const LikeHandler = async () => {
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
    setLikeLoading(true);
    if (!likeOrNot) {
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
          setLike(like.likeCount);
          setLikeOrNot(like.likeOrNot);
        })
        .catch((err) => {
          if (err.response.status === 401) {
            setIsLoginOpen(true);
          }
        });
    } else {
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

  return (
    <>
      <Styled.Div>
        <Styled.Title>{title}</Styled.Title>
        {pageURL ? (
          <Styled.PageURL href={pageURL} target="_blank" title={`새창 : ${title} 홈페이지`}>
            홈페이지로 이동
          </Styled.PageURL>
        ) : null}
        {/* 여기도 사진 넘기기기능 넣자. */}
        {imgURL ? <Styled.Img src={imgURL} /> : <Styled.Img src="/images/not-image-yet.png" />}
        {overView ? (
          // !이거 css로 할수있대 나중에 ㄱ
          <Styled.Overview>
            <span className="first-overview">{FirstOverView}</span>
            <Styled.ReadMoreBtn className={!readMore ? null : "hide"} onClick={readMoreHandler}>
              ...더보기
            </Styled.ReadMoreBtn>
            <span className={readMore ? null : "hide"}>{SecondOverView}</span>
            <Styled.CutDownBtn className={readMore ? null : "hide"} onClick={readMoreHandler}>
              간략히
            </Styled.CutDownBtn>
          </Styled.Overview>
        ) : null}

        <MapInRoom placeLocation={placeLocation} placeAddress={placeAddr} title={title} navi={navi} />
        <Styled.Wrapper>
          <HashTagTemplate keywordDummy={tags} />
          {likeLoading ? (
            <LikeLoading />
          ) : (
            <Styled.LikeBtn onClick={LikeHandler}>
              <i className={likeOrNot ? "fas fa-heart" : "hide"}>
                <span>{like}</span>
              </i>

              <i className={likeOrNot ? "hide" : "far fa-heart"}>
                <span>{like}</span>
              </i>
            </Styled.LikeBtn>
          )}
          <MyComment
            userinfo={userinfo}
            contentId={contentId}
            defaultComment={defaultComment}
            setDefaultComment={setDefaultComment}
          ></MyComment>

          {defaultComment.length === 0 ? (
            <NoComment />
          ) : (
            <CommentTemplate commentDummy={defaultComment} contentId={contentId}></CommentTemplate>
          )}
        </Styled.Wrapper>
        {/* 새로고침할때마다 get으로 전체댓글 얻으면 수정되든 삭제되든 괜찮음, defaultComment에 넣기만 하면 된다. */}
      </Styled.Div>
    </>
  );
}

export default DetailPage;
