import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { loginAgainModal, token, kToken, warningDeleteUserModal } from "../../recoil/recoil";
import { Styled } from "./style";
import { message } from "../../modules/message";
import ProfileUpload from "../../components/UploadImage/ProfileUpload";
import Cookies from "universal-cookie";

function Profile({ imgUrl, setImgUrl, setPrevImg, setNickname }) {
  const setIsLoginAgainOpen = useSetRecoilState(loginAgainModal);
  //   "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png"
  // ); //DB에만 영향을 받는다.
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const [inputCheckPassword, setInputCheckPassword] = useState("");
  const cookies = new Cookies();

  const [accessToken, setAccessToken] = useRecoilState(token);
  const kakaoToken = useRecoilValue(kToken);
  const [errorMessage, setErrorMessage] = useState("");
  const setWarningModal = useSetRecoilState(warningDeleteUserModal);
  useEffect(() => {
    if (window.localStorage.getItem("jwt") === "카카오로긴") setErrorMessage(message.kakaoState);
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .then((res) => {
        setInputEmail(res.data.data.userInfo.email);
        if (res.data.data.userInfo.user_image_path) {
          setImgUrl(res.data.data.userInfo.user_image_path);
          setNickname(res.data.data.userInfo.nickname);
        }
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            //1. 토큰없는데 어떻게 마이페이지에 들어와져있을때가 있음.
            setIsLoginAgainOpen(true);
          }
        }
      });
  }, []);
  const editInfo = async (e) => {
    e.preventDefault();

    if (!window.localStorage.getItem("jwt")) {
      //서버 유효성검사 필요해요
      setIsLoginAgainOpen(true);
      return;
    }

    let formData = new FormData();

    if (inputCheckPassword !== inputNewPassword || inputPassword.length < 8 || inputNewPassword.length < 8) {
      setErrorMessage(message.checkAgain);
      return;
    }

    if (imgUrl) {
      formData.append("image", imgUrl);
    }
    formData.append("nickname", inputUsername);
    formData.append("email", inputEmail);
    formData.append("password", inputPassword);
    formData.append("checkPassword", inputCheckPassword);
    formData.append("newPassword", inputNewPassword);

    axios
      .patch(`${process.env.REACT_APP_API_URL}/user/info`, formData, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setImgUrl(res.data.data.user_image_path);
        setPrevImg(res.data.data.user_image_path);
        setNickname(res.data.data.nickname);
        setInputEmail(res.data.data.email);
        setErrorMessage(message.changedProfile);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            //1. 토큰없는데 어떻게 마이페이지에 들어와져있을때
            setIsLoginAgainOpen(true);
          } else if (err.response.status === 400) {
            //2. DB에서 확인 안될때 or 수정비번이랑 수정비번확인이 틀릴때
            setErrorMessage(message.checkAgain);
          } else if (err.response.status === 403) {
            //3. 카톡로긴일땐 정보변경을 허용하지 않음
            //403번: 유저가 누구인진 알지만 허용하지 않을때
            setErrorMessage(message.kakaoState);

            //현재비번 잘못썼을때else if()
            //닉넴잘못적었을때
          }
        }
      });
  };
  //닉네임변경
  const handleInputUsername = (e) => {
    setInputUsername(e.target.value);
  };

  //비밀번호변경
  const handleInputPassword = (e) => {
    setInputPassword(e.target.value);
  };

  const handleInputNewPassword = (e) => {
    setInputNewPassword(e.target.value);
  };
  const handleInputCheckPassword = (e) => {
    setInputCheckPassword(e.target.value);
  };

  //회원탈퇴모달 오픈 (회원탈퇴로직 ModalWarningDeleteUserInfo/WaringDeleteUserInfo.js)
  const openWarningModalHandler = () => {
    if (inputPassword.length < 8) {
      setErrorMessage(message.checkAgain);
      return;
    }
    //서버에서 비번 검사해서 안맞으면 404같은거보내주세요
    //404뜨면 비번다시입력하라고 하게
    setWarningModal(true);
  };

  return (
    <>
      <Styled.UserInfopage>
        <Styled.View>
          <form onSubmit={editInfo} className="image-container">
            <div className="image-wrapper">
              <ProfileUpload imgUrl={imgUrl} setImgUrl={setImgUrl} />
            </div>
            <button className="btn-image-edit" type="submit">
              적용
            </button>
          </form>

          <Styled.ContentBox>
            <form onSubmit={editInfo}>
              <div className="userinfo-each-label">
                <input type="text" value={inputEmail} readOnly />
              </div>
              <div className="userinfo-each-label">
                <input type="text" name="nickname" placeholder="새 닉네임" onChange={handleInputUsername} />
                <button className="btn-edit" type="submit">
                  변경
                </button>
              </div>

              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  placeholder="현재 비밀번호"
                  value={inputPassword}
                  onChange={(e) => handleInputPassword(e)}
                />
              </div>

              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  placeholder="새 비밀번호"
                  value={inputNewPassword}
                  onChange={(e) => handleInputNewPassword(e)}
                />
              </div>
              <div className="userinfo-each-label">
                <input
                  type="password"
                  name="password"
                  placeholder="새 비밀번호 재확인"
                  value={inputCheckPassword}
                  onChange={(e) => handleInputCheckPassword(e)}
                />
                <button className="btn-edit" type="submit">
                  변경
                </button>
              </div>
              <div className="alert-box">{errorMessage}</div>
              <div className="userinfo-button-label">
                <button className="btn-exit" type="button" onClick={openWarningModalHandler}>
                  회원탈퇴
                </button>
              </div>
            </form>
          </Styled.ContentBox>
        </Styled.View>
      </Styled.UserInfopage>
    </>
  );
}

export default Profile;
