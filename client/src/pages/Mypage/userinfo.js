import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import dotenv from "dotenv";
import { userInfo } from "../../recoil/recoil";

export const Body = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

const userInfopage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

const userProfilePage = styled.div`
  width: 500px;
  height: 500px;
`;
const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  /* background-color: white; */
`;
const ContentBox = styled.div`
  margin-top: 40px;
  position: relative;
  width: 480px;
  height: 140px;
  > button {
    position: absolute;
    right: 10px;
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

const LeftBar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: var(--c-text-tertiary);
  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    transition: 0.25s ease;

    * {
      transition: 0.25s ease;
    }

    i {
      margin-right: 0.75rem;
      font-size: 1.25em;
      flex-shrink: 0;
    }

    & + a {
      margin-top: 1.25rem;
    }

    &:hover,
    &:focus {
      transform: translateX(4px);
      color: var(--c-text-primary);
    }
  }
`;

dotenv.config();

export default function UserInfo() {
  const [infoEdit, setInfoEdit] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [InputPassword, setInputPassword] = useState("");
  const [userinfo, setUserInfo] = useRecoilState(userInfo);

  const history = useHistory();

  //정보를 바로 받아온다면...?

  // const EditWriteUserInfo = (e) => {
  //   setInfoEdit(e.target.value);
  // };

  // const confirmInfo = (word) => {
  //   setInfoEdit("");
  //   setUserInfo([...userInfo, [word]]);
  // };

  useEffect(() => {}, []);

  const saveBtnHandler = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .put(
        {
          useInfo: { email: userInfo.email, nickname: userInfo.nikename, users_image_path: userInfo.users_image_path },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.clear();

        history.push("/");
      });
  };

  //양식을 채울때

  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleChangeFile = (e) => {
    let reader = new FileReader();
    reader.onloadend = () => {
      const url = reader.result;
      if (url) {
        setImgUrl(url.toString());
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const handleEdit = () => {
    if (imgUrl === "" || inputUsername === "" || inputEmail === "" || InputPassword === "") {
      alert("빈칸이 있어요!");
      return;
    }
  };
  useEffect(() => {
    axios.post("http://localhost:3000/Upload").then((res) => {
      console.log(res);
    });
  }, []);

  //댓글 추가 창처럼 내용이 추가되는 것....
  return (
    <Body>
      <userInfopage>
        <ProfileImg src="/people3.png"></ProfileImg>
        <ContentBox>
          {/* <Content
          type="text"
          value={userinfo}
          onChange={(e) => EditWriteUserInfo(e)}
          onClick={(e) => {
            if (e.key === "Enter") confirmInfo(word);
          }}
        ></Content> */}
          <div>
            <img src={imgUrl} />
            <label className="input-file-btn" for="input-file">
              <div className="icon-text">수정</div>
            </label>
            <input type="file" id="input-file" accept="image/*" onChange={handleChangeFile} />
          </div>
          <input type="text" placeholder="name" value={inputUsername} onChange={handleInputUsername} />
          <input type="text" placeholder="email" value={inputEmail} onChange={handleInputEmail} />
          <input type="password" placeholder="password" value={InputPassword} onChange={handleInputPassword} />
          <button onClick={() => saveBtnHandler()}>저장</button>
          <div className="btn comfirm" onClick={handleEdit}>
            저장
          </div>
          <div className="btn comfirm" onClick={handleEdit}>
            회원탈퇴
          </div>
        </ContentBox>
      </userInfopage>
    </Body>
  );
}
