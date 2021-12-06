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

export const userInfopage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;

export const userProfilePage = styled.div`
  width: 500px;
  height: 500px;
`;
export const ProfileImg = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  position: absolute;
  /* background-color: white; */
`;
export const ContentBox = styled.div`
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

export const MenuBar = styled.div`
  margin: 0px 50px 0 30px;
  background: white;
  box-shadow: rgb(180 180 180) -1px 1px 8px;
  border-radius: 20px;
  width: 320px;
  height: 650px;
  border-radius: 10px;
  position: absolute;
  padding: 20px;
  z-index: 9;

  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin-top: 20px;
    width: 30px;
    cursor: pointer;
  }
  > input {
    border: none;
  }
  .miniTitle {
    align-self: flex-start;

    > span {
      margin-left: 10px;
      margin-right: 20px;
      font-size: 0.8rem;
      font-weight: 600;
    }
  }
  #location {
    color: black;
    margin: 0px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 20px;
  }
`;
export const View = styled.div`
  float: right;
  width: 65%;
  height: 100vh;
  border-radius: 10px;
  position: relative;
`;

const SearchResults = styled.div`
  margin: 0px 0px 0 340px;

  border-radius: 10px;
  width: 200px;
  height: 600px;
  position: relative;
  padding: 30px;

  font-size: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
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
    // const token = JSON.parse(localStorage.getItem("token"));
    axios
      .put(
        {
          // email,
          // nickname,
          // users_image_path: {
          //   // email: inputUsername,
          //   nickname: userInfo.nikename,
          //   users_image_path: userInfo.users_image_path,
          //   password,
          //   new_password,
        },
        //내가 작성한 email

        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `token ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.clear();

        history.push("/");
      });
  };

  //유효성검사추가
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
      <MenuBar>
        여기에!
        <div>
          <img src={imgUrl} />
          <label className="input-file-btn" for="input-file">
            <div className="icon-text">수정</div>
          </label>
          <input type="file" id="input-file" accept="image/*" onChange={handleChangeFile} />
          <div>프로필수정</div>
          <div>좋아요 한 관광지</div>
          <div>내가 쓴 리뷰</div>
          <div>내가 가본 곳</div>
        </div>
      </MenuBar>

      <userInfopage>
        <View>
          <SearchResults>
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
              <input type="file" id="input-file" accept="image/*" onChange={handleChangeFile} />
              <input type="text" placeholder="name" value={inputUsername} onChange={handleInputUsername} />
              <input type="text" placeholder="email" value={inputEmail} onChange={handleInputEmail} />
              <input type="password" placeholder="password" value={InputPassword} onChange={handleInputPassword} />
              <button onClick={() => saveBtnHandler()}>저장</button>
            </ContentBox>
          </SearchResults>
        </View>
      </userInfopage>
    </Body>
  );
}
