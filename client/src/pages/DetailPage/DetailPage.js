import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import MapInRoom from "../../components/MapInRoom/MapInRoom";
import Cookies from "universal-cookie";
import { Styled } from "./style";
import HashTagTemplate from "../../components/HashTagTemplate/HashTagTemplate";
import CommentTemplate from "../../components/CommentTemplate/CommentTemplate";
import MyComment from "../../components/MyComment/MyComment";
import { selector, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { loginState, token, kToken, loginModal, loginAgainModal } from "../../recoil/recoil";
import { contentid, defaultcomments, hashTagSelector } from "../../recoil/detailpage";

import LikeLoading from "../../components/Loading/LikeLoading";
import NoComment from "../../components/NoComment/NoComment";

function DetailPage({ match }) {
  const contentId = parseInt(match.params.id, 10);
  const [userinfo, setUserinfo] = useState({});
  const [overview, setOverview] = useState("");
  const [pageURL, setPageURL] = useState("");
  const [imgURL, setImgURL] = useState("");
  const [placeAddr, setPlaceAddr] = useState("");
  const [title, setTitle] = useState("");
  const [placeLocation, setPlaceLocation] = useState({ lon: 0, lat: 0 });
  const [navi, setNavi] = useState("");
  const [tags, setTags] = useState([]);
  // const tags = useRecoilValueLoadable(hashTagSelector);
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
  //비로그인 아닌데 토큰만료되면 로그아웃유도
  const setIsLoginAgainOpen = useSetRecoilState(loginAgainModal);
  //로딩창
  const [likeLoading, setLikeLoading] = useState(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        const { post_mapx, post_mapy } = res.data.post;

        setPlaceLocation({ lat: post_mapy, lon: post_mapx });
        setImgURL(res.data.post.post_firstimage);
        setTitle(res.data.post.post_title);
        setPlaceAddr(res.data.post.post_addr1);
        if (res.data.post.post_homepage_path) {
          if (res.data.post.post_homepage_path.split('<a href="')[1]) {
            setPageURL(res.data.post.post_homepage_path.split('<a href="')[1].split(`"`)[0]);
          }
        }
        setNavi(`https://map.kakao.com/link/to/${res.data.post.post_title},${post_mapy},${post_mapx}`);
        if (res.data.post.post_content) setOverview(res.data.post.post_content);
      });
  }, [contentId]);

  useEffect(() => {
    //! 태그 추가될때만 실행 -> 태그 상위2개가 바뀌면 업데이트됨 -> 상위 2개 바뀌었을때만 줄 수 있을까요..
    axios
      .get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.data.post.post_tags) setTags(res.data.post.post_tags.split(",").map((el) => "#" + el));
      });
  }, [defaultComment]);

  useEffect(async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, {
        headers: {
          // Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
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
        //비로그인이 아닌데 토큰을 얻을 수 없다면 다시로그인시킨다.
        if (res.data.userinfo.nickname === "김코딩" && isLogin) {
          setIsLoginAgainOpen(true);
        }
        setUserinfo(res.data.userinfo);
      });
  }, []);

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

  //해시태그는 매번렌더링되지 않고 상위 2개의 값이 바뀌었을때만 재할당하도록 최적화
  //값에 변화가 없다면 이전값을 다시 사용한다.
  const memoTags = useMemo(() => tags, [tags[0], tags[1]]);

  return (
    <>
      <Styled.Div>
        <Styled.Wrapper>
          <Styled.Title>{title}</Styled.Title>
          {pageURL ? (
            <Styled.PageURL href={pageURL} target="_blank" title={`새창 : ${title} 홈페이지`}>
              홈페이지로 이동
            </Styled.PageURL>
          ) : null}
          {imgURL ? <Styled.Img src={imgURL} /> : <Styled.Img src="/images/not-image-yet.png" />}
          {overView ? (
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
          <HashTagTemplate keywordDummy={memoTags} />
          {likeLoading ? (
            <LikeLoading />
          ) : (
            <LikeComponent like={like} likeOrNot={likeOrNot} LikeHandler={LikeHandler} />
          )}
          {/* //! 토큰만료되면 버그생김 */}
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

export const LikeComponent = React.memo(
  ({ like, likeOrNot, LikeHandler }) => {
    return (
      <Styled.LikeBtn onClick={LikeHandler}>
        <i className={likeOrNot ? "fas fa-heart" : "hide"}>
          <span>{like}</span>
        </i>

        <i className={likeOrNot ? "hide" : "far fa-heart"}>
          <span>{like}</span>
        </i>
      </Styled.LikeBtn>
    );
  },
  (prev, next) => {
    //이전렌더링과 다음렌더링의 좋아요 상태가 다를때만 렌더링한다.
    return prev.likeOrNot === next.likeOrNot;
  }
);
