import React, { useState } from "react";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, kToken, loginState, loginModal } from "../../recoil/recoil";
import axios from "axios";
import CommentLoading from "../Loading/CommentLoading";

import { Styled } from "./style";
import { toast } from "react-toastify";

function MyComment({ userinfo, contentId, defaultComment, setDefaultComment }) {
  const kakaoToken = useRecoilValue(kToken);
  const [something, setSomething] = useState("");
  const [tags, setTags] = useState([]);
  const accessToken = useRecoilValue(token);
  const [commentLoading, setCommentLoading] = useState(false);
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
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
      toast.error("댓글을 입력해주세요", {
        position: toast.POSITION.TOP_CENTER,
      });
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
        return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
      });
      setDefaultComment(arr);
      setTags([]);
      setSomething("");

      setIsLoginOpen(false);
    } catch (err) {
      if (err.response.status === 401) {
        setIsLoginOpen(true);
      }
    }
    setCommentLoading(false);
  };

  if (commentLoading) {
    return <CommentLoading userinfo={userinfo} />;
  }
  return (
    <div>
      <Styled.CommentWrapper>
        <Styled.Comment>
          <Styled.ProfileBox>
            <Styled.Profile>
              <Styled.ProfileImgBox>
                <Styled.ProfileImg src={userinfo.user_image_path} />
              </Styled.ProfileImgBox>
              <Styled.NickName>{userinfo.nickname}</Styled.NickName>
            </Styled.Profile>
          </Styled.ProfileBox>
          <Styled.ContentBox>
            <Styled.ContentWrapper>
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
              />
            </Styled.ContentWrapper>
            <Styled.HashTagWrapper>
              <EditableHashTag tags={tags} setTags={setTags} />
            </Styled.HashTagWrapper>
          </Styled.ContentBox>
          <Styled.BtnBox>
            <Styled.BtnWrapper>
              <Styled.Btn onClick={registerMyComment}>
                <Styled.BtnContent>작성하기</Styled.BtnContent>
              </Styled.Btn>
            </Styled.BtnWrapper>
          </Styled.BtnBox>
        </Styled.Comment>
      </Styled.CommentWrapper>
    </div>
  );
}

export default React.memo(MyComment, (prev, next) => {
  return prev.userinfo.nickname === next.userinfo.nickname;
});
