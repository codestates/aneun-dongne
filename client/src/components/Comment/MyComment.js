import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EditableHashTag from "../HashTag/EditableHashTag";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { defaultcomments, updatecomment, loginState, loginModal } from "../../recoil/recoil";
import axios from "axios";
const CommentWrapper = styled.div`
  width: 100%;
`;
const Comment = styled.div`
  position: relative;
  display: flex;
  /* border: 1px red solid; */
  /* height: 200px; */
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
`;
const Profile = styled.div`
  position: relative;
  /* background-color: red; */
  width: 80px;
  height: 140px;
  margin: 40px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  /* background-color: white; */
`;

const NickName = styled.span`
  /* background-color: yellowgreen; */
  position: absolute;
  bottom: 5px;
  text-align: center;
  width: 100%;
`;

const ContentBox = styled.form`
  margin-top: 30px;
  position: relative;
  width: 480px;
  /* height: 140px; */
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
  left: 10px;
  width: 370px;
  height: 70px;
  padding-left: 10px;
  padding-right: 10px;
`;

const HashTagWrapper = styled.div`
  /* display: flex; */
  /* position: absolute; */
  /* background-color: pink; */
  width: 370px;
  /* height: 60px; */
  top: 75px;
  margin-top: 75px;
  left: 10px;
  /* padding-left: 10px; */
  padding-right: 10px;

  white-space: nowrap;
  border: none;
  border: 1px gray solid;
`;
const Date = styled.div`
  position: absolute;
  bottom: 5px;
  right: 10px;
`;

function MyComment({ userinfo, contentId, defaultComment, setDefaultComment }) {
  const [pending, setPending] = useState(false);
  const [something, setSomething] = useState("");
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState([]);
  // const [defaultComment, setDefaultComment] = useRecoilState(defaultcomments);
  //로긴모달창,로긴상태
  const isLogin = useRecoilValue(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  const date = new window.Date();
  const writeSomething = (e) => {
    setSomething(e.target.value);
  };

  const registerMyComment = (e) => {
    e.preventDefault();
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
    if (something === "") {
      alert("내용을 입력해주세요");
      return;
    }
    //------------
    //이게 응답이라고 생각
    // const myComment = {
    //   img: "/people3.png", //유저 프로필
    //   nickname: "김코딩", //유저닉네임
    //   text: "",
    //   tags: [],
    //   date: "DB에서 날라오겠지", //현재날짜
    //   editable: true,
    // };
    let body = {
      commentContent: something,
      tagsArr: tags,
    };
    axios.post(`https://localhost:4000/comment/${contentId}`, body, { withCredentials: true }).then((res) => {
      console.log("가공전", res.data.data);
      let arr = res.data.data.map((el) => {
        // console.log(el.comments.comment_tags.split(","));
        console.log([{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }]);
        return [{ ...el.user, ...{ ...el.comments, comment_tags: el.comments.comment_tags.split(",") } }];
      });
      setDefaultComment(arr);
    });

    //------------
    // setDefaultComment(defaultComment.concat(body)); 왜 일케하면 memo되고 밑에꺼로하면 안됨

    // setDefaultComment([body].concat(defaultComment)); -> DB가 대신함
    // setPending(true);
    setTags([]);
    setSomething("");
  };

  return (
    <CommentWrapper>
      <Comment>
        <Profile>
          <ProfileImg src={userinfo.user_image_path}></ProfileImg>
          <NickName>{userinfo.nickname}</NickName>
        </Profile>
        <ContentBox>
          <Content
            type="text"
            value={something}
            placeholder="댓글을 입력하슈"
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
  );
}

export default MyComment;
