import React from "react";
import { useHistory } from "react-router-dom";
const [like, setLike] = useState(0);
const [likeOrNot, setLikeOrNot] = useState(false);

//로그인 된 상태에서
//좋아요 게시글 불러오기 (홈에서 state를 변경했음)
//게시글을 누르면 onClick={() => history.push(/mypage/likelists/${like_post_contentid.id})}
//세부정보 페이지에서 좋아요 한 게시물을 가져오기
//좋아요 리스트가 없다면 -> 좋아요 한 게시글이 없습니다.

// useEffect(() => {
//   axios
//     .get(`${process.env.REACT_APP_API_URL}/like/${contentId}`, { withCredentials: "true" })
//     .then((res) => {
//       const like = { likeOrNot: res.data.data.isLiked, likeCount: res.data.data.likeCount };
//       setLike(like.likeCount);
//       setLikeOrNot(like.likeOrNot);
//     })
//     .then((res) => {
//       setLikeLoading(false);
//     });
// }, []);

const MyLike = () => {
  const history = useHistory();

  return (
    <div id="like-list">
      {!setLike === 0 ? (
        <div id="like-list-text">좋아요 한 게시글이 없습니다.</div>
      ) : (
        <div
          id="content-like-list"
          onClick={() => history.push(`${process.env.REACT_APP_API_URL}/mypage/likelists/${like_post_contentid.id}`)}
        >
          {setLike.map((ele) => {
            return <LikeList Likelist={ele.Likelist} />;
          })}
        </div>
      )}
    </div>
  );
};

export default MyLike;
