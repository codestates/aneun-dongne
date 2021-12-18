import React, { useState } from "react";
import styled from "styled-components";
import EditableHashTag from "../EditableHashTag/EditableHashTag";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, kToken, loginState, loginModal } from "../../recoil/recoil";
import axios from "axios";
import CommentLoading from "../Loading/CommentLoading";

const CommentWrapper = styled.div`
  width: 100%;
`;
const Comment = styled.div`
  position: relative;
  display: flex;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 40px;
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
  @media (max-width: 768px) {
    width: 80%;
    margin-left: 40px;
    margin-right: auto;
  }
  @media (max-width: 612px) {
    width: 450px;
    margin-left: 20px;
    margin-right: auto;
  }
`;
const Profile = styled.div`
  position: relative;
  width: 80px;
  height: 140px;
  margin: 40px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
`;

const NickName = styled.span`
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
`;

const ContentBox = styled.form`
  margin-top: 30px;
  position: relative;
  width: 480px;
  > button {
    position: absolute;
    right: -10px;
    top: 20px;
    width: 80px;
    border: none;
    height: 40px;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }

  button:hover {
    transform: scale(1.1);
  }

  button:active {
    transform: scale(1.1);
  }
`;

const Content = styled.textarea`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  top: 0;
  width: 370px;
  height: 70px;
  padding: 10px;
`;

const HashTagWrapper = styled.div`
  width: 370px;
  top: 75px;
  margin-top: 75px;
  left: 10px;
  padding-right: 10px;
  white-space: nowrap;
  border: none;
  border: 1px gray solid;
`;

function MyComment({ userinfo, contentId, setDefaultComment }) {
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
    <>
      <div>
        <CommentWrapper>
          <Comment>
            <Profile>
              <ProfileImg src={userinfo.user_image_path} />
              <NickName>{userinfo.nickname}</NickName>
            </Profile>
            <ContentBox>
              <Content
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
              ></Content>
              <HashTagWrapper>
                <EditableHashTag tags={tags} setTags={setTags} />
              </HashTagWrapper>

              <button onClick={registerMyComment}>작성하기</button>
            </ContentBox>
          </Comment>
        </CommentWrapper>
      </div>
    </>
  );
}
export default React.memo(MyComment);
