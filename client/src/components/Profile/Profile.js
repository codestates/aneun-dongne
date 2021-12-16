import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { userInfo, loginState, loginModal, token, kToken } from "../../recoil/recoil";
import { Styled } from "./style";
import ProfileUpload from "../../components/UploadImage/ProfileUpload";

const UserInfopage = styled.div`
  top: 0;
  /* background: red; */
  margin-left: auto;
  margin-right: auto;
  /* width: 100%; */
  /* width: 100%; */
  /* height: 100%; */
  /* border: 1px gray solid; */

  /* background-color: yellowgreen; */
  display: flex;
  justify-content: center;
`;
const View = styled.div`
  margin-top: 40px;
  margin-left: 20px;

  width: 500px;

  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-self: center;

  /* background: yellow; */
`;

// export const ProfileImg = styled.img`
//   margin: 30px;
//   width: 170px;
//   height: 170px;
//   border-radius: 100%;
//   cursor: pointer;
// `;
const ContentBox = styled.div`
  /* margin: 40px 100px 0 0; */
  /* margin-left: 10%; */
  /* background: green; */
  width: 100%;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  /* flex-direction: column; */
  .alert-box {
    color: red;
  }
  > form {
    display: flex;
    flex-direction: column;
  }
  > form button {
    width: 80px;
    border: none;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }
  > form .userinfo-each-label {
    /* background: skyblue; */
    margin: 23px auto;

    position: relative;
  }
  > form .userinfo-each-label span {
    /* float: left; */
  }
  > form .userinfo-each-label input,
  form .userinfo-each-label div {
    /* background: yellow; */

    font-size: 1.2rem;
    width: 300px;
    border-left: none;
    border-right: none;
    border-top: none;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 20px;
    /* border: 1px gray solid; */
    /* position: absolute; */
    /* float: right; */
  }
  form .userinfo-button-label {
    /* background: blue; */
    display: flex;
    justify-content: center;
  }
  > form .userinfo-button-label .btn-edit {
    margin: 20px;
    width: 80px;
    border: 1px gray solid;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
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
  form .userinfo-button-label .btn-exit {
    margin: 20px;
    width: 80px;
    border: 1px gray solid;
    height: 40px;
    /* background-color: #8ea1da; */
    /* background: purple; */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    transition: all 0.5s ease;
    border-radius: 20px;
  }
  .btn-exit:hover {
    transform: scale(1.1);
  }
`;

const ImgDiv = styled.div`
  width: 200px;
  height: 200px;
  margin: 10px auto;
`;

//회원수정, 로그아웃시켜줘야힘.

function Profile({ imgUrl, setImgUrl, prevImg, setPrevImg, nickname, setNickname }) {
  const [info, setInfo] = useRecoilState(userInfo);
  const history = useHistory();
  //   const [imgUrl, setImgUrl] = useState("");
  // const [prevImg, setPrevImg] = useState(
  //   "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png"
  // ); //DB에만 영향을 받는다.
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const [inputCheckPassword, setInputCheckPassword] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");

  const [isDelete, setIsDelete] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);
  // const accessToken = useRecoilValue(token);
  const [accessToken, setAccessToken] = useRecoilState(token);
  const kakaoToken = useRecoilValue(kToken);
  const [errorMessage, setErrorMessage] = useState("");

  // console.log(info);
  useEffect(() => {
    //! 우선 적음 나중에 지우게되도
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data.userInfo);
        console.log(typeof res.data.data.userInfo.user_image_path);
        setInputEmail(res.data.data.userInfo.email);
        if (res.data.data.userInfo.user_image_path) {
          console.log(res.data.data.userInfo.user_image_path);
          setImgUrl(res.data.data.userInfo.user_image_path);
          setNickname(res.data.data.userInfo.nickname);
        }
      });
  }, []);
  // console.log(imgUrl);
  const editInfo = async (e) => {
    e.preventDefault();
    // 토큰만료시 컷
    if (!isLogin) {
      setIsLoginOpen(true);
      return;
    }
    let a = null;
    let formData = new FormData();
    // if(!imgUrl){
    //   formData.append("image", imgUrl);
    // }
    const validPW = validPassword();
    if (inputCheckPassword !== inputNewPassword || !inputCheckPassword || !inputNewPassword) {
      console.log("hi");
      setErrorMessage("입력하신 정보를 다시 한번 확인해주세요");
      return;
    }
    if (imgUrl) {
      formData.append("image", imgUrl);
      console.log(imgUrl);
    }
    formData.append("nickname", inputUsername);
    formData.append("email", inputEmail);
    formData.append("password", inputPassword);
    formData.append("checkPassword", inputCheckPassword);
    formData.append("newPassword", inputNewPassword);
    // formData.append("")
    console.log(formData.get("image"));

    axios
      .patch(`${process.env.REACT_APP_API_URL}/user/info`, formData, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        if (res.status === 400) {
          alert("비번과 비번확인 불일치"); //지금만 alert으로 함
          return;
        } else {
          console.log(res.data);
          setImgUrl(res.data.data.user_image_path);
          setPrevImg(res.data.data.user_image_path);
          setNickname(res.data.data.nickname);
          setInputEmail(res.data.data.email);
          setErrorMessage("프로필이 변경되었습니다.");
        }
      })
      .catch((err) => console.log(err));
  };

  //닉네임변경
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };
  //이메일변경불가
  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  //비밀번호변경//유효성검사추가해야함
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNewPassword = (e) => {
    setInputNewPassword(e.target.value);
  };
  const handleInputCheckPassword = (e) => {
    setInputCheckPassword(e.target.value);
  };

  //유효성검사
  const validPassword = (inputCheckPassword, inputNewPassword) => {
    if (inputCheckPassword !== inputNewPassword) {
      setErrorMessage({ ...errorMessage, ...{ checkPasswordErr: "비밀번호가 일치하지 않습니다." } });
      return false;
    }
  };

  //빈칸이 있는지 확인
  const handleEdit = () => {
    if (imgUrl === "" || inputUsername === "" || inputEmail === "" || inputPassword === "") {
      alert("빈칸이 있어요!");
      return;
    }
  };

  //회원탈퇴
  const deleteHandler = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log("탈퇴가 될지...", res);
        // isLogout();
        setIsDelete(true);
        setIsLogin(false);
        setTimeout(() => {
          history.push("/");
        }, 1000);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <UserInfopage>
        <View>
          <ImgDiv>
            <ProfileUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
          </ImgDiv>

          <ContentBox>
            <form onSubmit={editInfo}>
              <div className="userinfo-each-label">
                <input type="text" name="nickname" placeholder="새로운 닉네임" onChange={handleInputUsername} />
              </div>
              <div className="userinfo-each-label">
                <input type="text" value={inputEmail} readOnly />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  // defaultValue=""
                  placeholder="현재 비밀번호"
                  value={inputPassword}
                  onChange={(e) => handleInputPassword(e)}
                />
              </div>

              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  // defaultValue=""
                  placeholder="새로운 비밀번호"
                  value={inputNewPassword}
                  onChange={(e) => handleInputNewPassword(e)}
                />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  placeholder="새로운 비밀번호 확인"
                  // defaultValue=""
                  value={inputCheckPassword}
                  onChange={(e) => handleInputCheckPassword(e)}
                />
              </div>
              <div className="alert-box">{errorMessage}</div>
              <div className="userinfo-button-label">
                <button className="btn-edit" type="submit">
                  저장
                </button>

                <button className="btn-exit" onClick={() => deleteHandler()}>
                  회원탈퇴
                </button>
              </div>
            </form>
          </ContentBox>
        </View>
      </UserInfopage>
    </div>
  );
}

export default Profile;
