import React, { useState } from "react";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, kToken, loginState, loginModal } from "../../recoil/recoil";
import axios from "axios";
import CommentLoading from "../Loading/CommentLoading";
import { Styled } from "./style";

function MyComment({ userinfo, contentId, setDefaultComment }) {
  const kakaoToken = useRecoilValue(kToken);
  // const [pending, setPending] = useState(false);
  const [something, setSomething] = useState("");
  // const [text, setText] = useState("");
  // const [count, setCount] = useState(0);
  const [tags, setTags] = useState([]);
  const accessToken = useRecoilValue(token);
  // const [defaultComment, setDefaultComment] = useRecoilState(defaultcomments);
  // const [commentLoading, setCommentLoading] = useRecoilState(commentloading);
  const [commentLoading, setCommentLoading] = useState(false);
  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  const date = new window.Date();
  const writeSomething = (e) => {
    setSomething(e.target.value);
  };

  const registerMyComment = async (e) => {
    e.preventDefault();
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
    if (something === "") {
      alert("내용을 입력해주세요");
      return;
    }
    try {
      let body = {
        commentContent: something,
        tagsArr: tags,
      };

      setCommentLoading(true);
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/comment/${contentId}`, body, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      let arr = await result.data.data.map((el) => {
        console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
        return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
      });
      setDefaultComment(arr);
      setTags([]);
      setSomething("");

      setIsLoginOpen(false);
      // .then((res) => {
    } catch (err) {
      console.log(err.response.status);
      if (err.response.status === 401) {
        setIsLoginOpen(true);
      }
    }
    setCommentLoading(false);
  };

  if (commentLoading) {
    console.log(commentLoading);

    return <CommentLoading userinfo={userinfo} />;
  }
  return (
    <>
      <div>
        <Styled.CommentWrapper>
          <Styled.Comment>
            <Styled.Profile>
              <Styled.ProfileImg src={userinfo.user_image_path} />
              <Styled.NickName>{userinfo.nickname}</Styled.NickName>
            </Styled.Profile>
            <Styled.ContentBox>
              <Styled.Content
                type="text"
                value={something}
                placeholder="여러분의 소중한 댓글을 입력해주세요"
                onChange={(e) => writeSomething(e)}
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    registerMyComment(e);
                    e.target.value = "";
                  }
                }}
              ></Styled.Content>
              <Styled.HashTagWrapper>
                <EditableHashTag tags={tags} setTags={setTags} />
              </Styled.HashTagWrapper>

              <button onClick={registerMyComment}>작성하기</button>
            </Styled.ContentBox>
          </Styled.Comment>
        </Styled.CommentWrapper>
      </div>
    </>
  );
}
// export default MyComment;
export default React.memo(MyComment);
