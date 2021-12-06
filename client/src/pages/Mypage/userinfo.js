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
  margin-top: 80px;
`;
export const MenuBar = styled.div`
  margin: 0px 50px 0 30px;
  background: white;
  box-shadow: rgb(180 180 180) -1px 1px 8px;
  border-radius: 20px;
  width: 400px;
  height: 660px;
  border-radius: 10px;
  position: absolute;
  padding: 100px;
  z-index: 9;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #8ea1da;

  > img {
    margin: 30px;
    width: 170px;
    height: 170px;
    border-radius: 100%;
    cursor: pointer;
  }
  > input {
    border: none;
    align-items: center;
  }

  > button {
    font-size: 1.5em;
    font-weight: 600;
    margin-top: 20px;
    background-color: #8ea1da;
  }
`;

export const userInfopage = styled.div`
  position: fixed;
  top: 10%;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
`;
export const View = styled.div`
  float: right;
  width: 80%;
  height: 80vh;
  border-radius: 10px;
  position: relative;
  background-color: #ebecef;
`;
const Viewcontent = styled.div`
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

export const userProfilePage = styled.div`
  width: 500px;
  height: 500px;
`;
export const ProfileImg = styled.img`
  margin: 30px;
  width: 170px;
  height: 170px;
  border-radius: 100%;
  cursor: pointer;
`;
export const ContentBox = styled.div`
  margin-top: 40px;
  position: relative;

  > button {
    position: absolute;
    right: -100px;
    top: 20px;
    width: 80px;
    border: none;
    height: 40px;
    background-color: #8ea1da;
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

dotenv.config();

//회원수정, 로그아웃시켜줘야힘.

const UserInfo = ({ accessToken, isLogout, props }) => {
  const [userinfo, setUserInfo] = useRecoilState(userInfo);

  const [imgUrl, setImgUrl] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [InputPassword, setInputPassword] = useState("");
  const [InputNewPassword, setInputNewPassword] = useState("");
  const [ConfirmMessage, setConfirmMessage] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  // const [PasswordErr, setPasswordErr] = useState("");
  // const [passwordError, setPasswordError] = useState("");
  // const [passwordCheckError, setPasswordCheckError] = useState("");

  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://localhost:3000/user/info", { withCredentials: true })

      .then((res) => {
        if (!res.data) {
          alert("로그인모달창으로 갑니다");
        } else {
          const { imgUrl, inputUsername, inputEmail } = res.data.data.userInfo;

          setImgUrl(imgUrl);
          setInputUsername(inputUsername);
          setInputEmail(inputEmail);
          props.accessToken(res.data.Info);
        }
      });
  }, [accessToken]);

  //정보를 바로 받아온다면...?

  //app.js에서 login인인 상태에서 mypage로 들어온다.
  //아닐 경우에는 로그인 모달창이 뜨게 함.

  //로그인 상태를 recoil에서 true로 가져온다.

  // const accessTokenRequest = () => {

  //파일변경
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

  //닉네임변경
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };
  //이메일변경불가
  // const handleInputEmail = (e) => {
  //   setInputEmail(e.target.value);
  // };

  //비밀번호변경//유효성검사추가해야함
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNewPassword = (e) => {
    setInputNewPassword(e.target.value);
  };

  //유효성검사
  const validePassword = (InputPassword, InputNewPassword) => {
    if (InputPassword !== InputNewPassword) {
      alert("동일한 비밀번호를 입력하세요!");
      return false;
    }
  };

  //빈칸이 있는지 확인
  const handleEdit = () => {
    if (imgUrl === "" || inputUsername === "" || inputEmail === "" || InputPassword === "") {
      alert("빈칸이 있어요!");
      return;
    }
  };

  useEffect(() => {
    axios.post("http://localhost:3000/mypage").then((res) => {
      console.log(res);
    });
  }, []);

  const saveBtnHandler = () => {
    if (!validePassword || !handleEdit) {
      // const token = JSON.parse(localStorage.getItem("token"));
      axios
        .put(
          "https://localhost:3000/mypage",
          {
            // email: inputUsername,
            nickname: userInfo.nikename,
            users_image_path: userInfo.users_image_path,
            password: userInfo.password,
            new_password: userInfo.new_password, //새로운 비밀번호 추가됨.
          },
          {
            "Content-Type": "application/json",
            withCredentials: true,
            // Authorization: `token ${token}`,
          }
        )
        .then((res) => {
          setConfirmMessage("변경된 내용이 저장되었습니다!");
          // localStorage.clear();
          history.push("/mypage");
        })
        .catch((err) => console.log(err));
    }
  };

  //회원탈퇴
  const deleteHandler = () => {
    axios
      .delete(`http://localhost:4000/user/mypage`, {
        headers: {
          authorization: accessToken,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("탈퇴가 될지...", res);
        isLogout();
        setIsDelete(true);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Body>
      <MenuBar>
        {/* <img src={imgUrl} /> */}
        <img src="./people3.png" />
        <input type="file" id="input-file" onChange={handleChangeFile} />
        <button>프로필수정</button>
        <button>좋아요 한 관광지</button>
        <button>내가 쓴 리뷰</button>
        <button>내가 가본 곳</button>
      </MenuBar>

      <userInfopage>
        <View>
          <Viewcontent>
            {/* <ProfileImg src={imgUrl}></ProfileImg> */}
            <ProfileImg src="./korea03.jpg"></ProfileImg>
            <input type="file" id="input-file" onChange={handleChangeFile} />
            <ContentBox>
              {/* <Content
          type="text"
          value={userinfo}
          onChange={(e) => EditWriteUserInfo(e)}
          onClick={(e) => {
            if (e.key === "Enter") confirmInfo(word);
          }}
        ></Content> */}

              <div type="text" placeholder={inputEmail} value={inputEmail}>
                여기 이메일 고정
              </div>
              <div>닉네임</div>
              <input type="text" placeholder={inputUsername} value={inputUsername} onChange={handleInputUsername} />
              {/* <input type="text" placeholder="email" value={inputEmail} onChange={handleInputEmail} /> */}
              <div>비밀번호</div>
              <input type="password" placeholder="password" value={InputPassword} onChange={handleInputPassword} />
              <div>비밀번호 확인</div>
              <input
                type="password"
                placeholder="password confirm"
                value={InputNewPassword}
                onChange={handleInputNewPassword}
              />
              <button className="btn edit" onClick={saveBtnHandler()}>
                저장
              </button>
            </ContentBox>
            <button className="btn exit" onClick={() => deleteHandler()}>
              회원탈퇴
            </button>
          </Viewcontent>
        </View>
      </userInfopage>
    </Body>
  );
};
export default UserInfo;
