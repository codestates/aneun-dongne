import React, { useState } from "react";

import EditableHashTag from "../EditableHashTag/EditableHashTag";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { token, kToken, loginState, loginModal } from "../../recoil/recoil";
import axios from "axios";
import CommentLoading from "../Loading/CommentLoading";
import { Styled } from "./style";
import styled from "styled-components";

const CommentWrapper = styled.div`
  width: 100%;
`;
const Comment = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: auto;
  grid-template-columns: 1fr 3fr 1fr;
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
    width: auto;
  }
`;

const ProfileBox = styled.form`
  position: relative;
  width: 95%;
  height: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  // width: 480px;
  /* height: 140px; */
  // @media (max-width: 768px) {
  //   width: 400px;
  // }
  // @media (max-width: 415px) {
  //   width: 300px;
  // }
  // @media (max-width: 380px) {
  //   width: 360px;
  // }
  // @media (max-width: 325px) {
  //   width: 320px;
  // }
`;

const Profile = styled.div`
  position: relative;
  // top: 0;
  /* background-color: red; */
  display: flex;
  // grid-template-rows: 3fr 1fr;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;

  // height: 40%;
  // margin: 40px;
  // @media (max-width: 768px) {
  //   width: 80px;
  //   height: 140px;
  //   margin: 30px;
  // }
  // @media (max-width: 414px) {
  //   width: 80px;
  //   height: 140px;
  //   margin: 25px;
  // }
  // @media (max-width: 375px) {
  //   width: 40px;
  //   height: 80px;
  //   margin: 10px;
  // }
  // @media (max-width: 320px) {
  //   width: 30px;
  //   height: 60px;
  //   margin: 10px;
  // }
`;

const ProfileImgBox = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr;
  width: 50%;
  height: 0;
  padding-top: 50%;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 30;
  /* background-color: white; */
  // @media (max-width: 768px) {
  //   width: 80px;
  //   height: 80px;
  // }
  // @media (max-width: 375px) {
  //   width: 40px;
  //   height: 40px;
  // }
  // @media (max-width: 320px) {
  //   width: 30px;
  //   height: 30px;
  // }
`;

const NickName = styled.div`
  /* background-color: yellowgreen; */
  position: relative;
  // bottom: 5px;
  text-align: center;
  // width: 80px;
  // @media (max-width: 768px) {
  //   width: 80px;
  // }
  // @media (max-width: 415px) {
  //   width: 80px;
  // }
  // @media (max-width: 380px) {
  //   width: 40px;
  // }
  // @media (max-width: 325px) {
  //   width: 30px;
  // }
`;

const ContentBox = styled.form`
  margin-top: 25px;
  margin-bottom: 20px;
  margin-right: 5px;
  margin-left: 5px;
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  width: auto;
  height: auto;
  // @media (max-width: 768px) {
  //   width: 400px;
  // }
  // @media (max-width: 415px) {
  //   width: 300px;
  // }
  // @media (max-width: 380px) {
  //   width: 360px;
  // }
  // @media (max-width: 325px) {
  //   width: 320px;
  // }
`;

const Content = styled.textarea`
  // display: flex;
  flex-wrap: wrap;
  position: relative;
  bottom: 10px;
  width: 100%;
  height: auto;
  padding: 10px;
  // @media (max-width: 768px) {
  //   width: 300px;
  // }
  // @media (max-width: 415px) {
  //   width: 300px;
  // }
  // @media (max-width: 380px) {
  //   width: 280px;
  // }
  // @media (max-width: 325px) {
  //   width: 200px;
  // }
`;

const ContentWrapper = styled.div`
  /* display: flex; */
  /* position: absolute; */
  /* background-color: pink; */
  // width: 370px;
  /* height: 60px; */
  // top: 75px;
  // margin-top: 75px;
  // left: 10px;
  // /* padding-left: 10px; */
  // padding-right: 10px;

  // white-space: nowrap;
  // border: none;
  // border: 1px gray solid;
`;

const HashTagWrapper = styled.div`
  width: 100%;
  height: auto;
  border-radius: 6px;
  border: 1px gray solid;
`;

const BtnBox = styled.div`
  position: relative;
  width: 70%;
  height: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
`;

const BtnWrapper = styled.div`
  position: relative;
  height: 0;
  top: 0;
  width: 100%;
  padding-top: 40%;
  margin-left: auto;
  margin-right: auto;
`;

const Btn = styled.div`
  position: absolute;
  top: 0;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10%;
  padding-bottom: 10%;
  padding-right: 10%;
  padding-left: 10%;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: rgb(192, 251, 255);
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  :hover {
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
    transform: scale(1.1);
  }
  :active {
    transform: scale(1.1);
  }
`;

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
            <ProfileBox>
              <Profile>
                <ProfileImgBox>
                  <ProfileImg src={userinfo.user_image_path} />
                  <NickName>{userinfo.nickname}</NickName>
                </ProfileImgBox>
              </Profile>
            </ProfileBox>
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
            </ContentBox>
            <BtnBox>
              <BtnWrapper>
                <Btn onClick={registerMyComment}>작성하기</Btn>
              </BtnWrapper>
            </BtnBox>
          </Comment>
        </CommentWrapper>
      </div>
    </>
  );
}
export default React.memo(MyComment);
