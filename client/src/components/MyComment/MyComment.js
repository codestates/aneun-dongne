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
  margin-bottom: 5%;
  box-shadow: 4px 4px 4px rgb(85, 85, 85);
  transition: all 0.1s ease-in-out;
  &:hover {
    color: black;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
      4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transform: scale(1.02);
  }
  &:hover:after {
    left: 0;
    width: auto;
  }
  @media (max-width: 768px) {
  }
  // @media (max-width: 415px) {
  //   width: 300px;
  // }
  @media (max-width: 380px) {
  }
  // @media (max-width: 325px) {
  //   width: 320px;
  // }
`;

const ProfileBox = styled.form`
  position: relative;
  width: 70%;
  height: 50%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20%;
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
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-left: auto;
  margin-right: auto;
  height: auto;
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
  // display: grid;
  // grid-template-rows: 3fr 2fr;
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
  top: 0;
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
  font-size: 14px;
  // bottom: 5px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
  @media (max-width: 535px) {
    font-size: 7px;
  }
  // @media (max-width: 325px) {
  //   width: 320px;
  // }
`;

const ContentBox = styled.form`
  // margin-right: 3%;
  // margin-left: 3%;
  position: relative;
  display: grid;
  grid-template-rows: auto auto;
  width: auto;
  height: auto;
  padding-top: 5%;
  padding-bottom: 5%;
  // @media (max-width: 768px) {
  // }
  // @media (max-width: 415px) {
  // }
  // @media (max-width: 380px) {
  // }
  // @media (max-width: 325px) {
  // }
`;

const Content = styled.textarea`
  // display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
  height: auto;
  padding: 1%;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
  @media (max-width: 535px) {
    padding: 2%;
    font-size: 7px;
  }
  // @media (max-width: 325px) {
  //   width: 320px;
  // }
`;

const ContentWrapper = styled.div`
  position: relative;
  width: auto;
  height: auto;
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
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15%;
  margin-bottom: auto;
  @media (max-width: 470px) {
    width: 60%;
  }
`;

const BtnWrapper = styled.div`
  position: relative;
  height: 0;
  width: 100%;
  padding-top: 50%;
  margin-left: auto;
  margin-right: auto;
  @media (max-width: 470px) {
    padding-top: 100%;
  }
`;

const Btn = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

const BtnContent = styled.div`
  cursor: pointer;
  font-size: 14px;
  padding-top: 12%;
  padding-bottom: 12%;
  padding-right: 12%;
  padding-left: 12%;
  text-align: center;
  position: relative;
  color: #ffffff;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 20px;
  background-color: #3a6fb0;
  background-image: linear-gradient(
    to right bottom,
    rgba(255, 255, 255, 0.9) 0,
    rgba(0, 0, 0, 0) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  :hover {
    background-color: #2f4d6f;
    background-image: linear-gradient(
      to left top,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
    // transform: scale(1.1);
  }
  :active {
    // transform: scale(1.1);
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 640px) {
    font-size: 10px;
  }
  @media (max-width: 535px) {
    font-size: 7px;
  }
  @media (max-width: 470px) {
    font-size: 5px;
    padding-right: 25%;
    padding-left: 25%;
  }
  @media (max-width: 360px) {
    font-size: 5px;
    padding-right: 15%;
    padding-left: 15%;
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
export default React.memo(MyComment);
