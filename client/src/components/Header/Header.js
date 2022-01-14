import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalSignup from "../ModalSignup/ModalSignup";
import { Styled } from "./style";
import {
  isSavepositionOpen,
  loginState,
  loginModal,
  visitedModal,
  saveOrNotModal,
  loginAgainModal,
  warningDeleteUserModal,
  searchPlaceModal,
} from "../../recoil/recoil";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import Cookies from "universal-cookie";

import WarningDeleteUserModal from "../ModalWarningDeleteUserInfo/WarningDeleteUserInfo";
import ModalSavePosition from "../ModalSavePosition/ModalSavePosition";
import SaveOrNotModal from "../ModalSaveOrNot/SaveOrNotModal";
import ModalLoginAgain from "../ModalLoginAgain/ModalLoginAgain";
import HomeRightbar from "../HomeSearchBar/Home-Rightbar-index";

const Header = ({ handleResponseSuccess }) => {
  const cookies = new Cookies();
  const history = useHistory();
  const [isLoginOpen, setIsLoginOpen] = useRecoilState(loginModal);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const [isSaveOrNotModal, setIsSaveOrNotModal] = useRecoilState(saveOrNotModal);
  const [isLoginAgainOpen, setIsLoginAgainOpen] = useRecoilState(loginAgainModal);
  const [isWarningModal, setWarningModal] = useRecoilState(warningDeleteUserModal);
  const [isOpenSearchPlaceModal, setIsOpenSearchPlaceModal] = useRecoilState(searchPlaceModal);

  const openLoginModalHandler = (e) => {
    if (isLoginOpen) {
      setIsLoginOpen(false);
    } else if (!isLoginOpen) {
      setIsLoginOpen(true);
    }
  };

  const closeLoginModalHandler = (e) => {
    if (isLoginOpen) {
      setIsLoginOpen(false);
    }
  };

  const closeLogoutModalHandler = (e) => {
    if (isSignupOpen) {
      setIsSignupOpen(false);
    }
  };

  const openSignupModalHandler = (e) => {
    if (isSignupOpen) {
      setIsSignupOpen(false);
    } else if (!isSignupOpen) {
      setIsSignupOpen(true);
    }
  };

  const closeSignupModalHandler = (e) => {
    if (isSignupOpen) {
      setIsSignupOpen(false);
    }
  };

  const closeSavePositionModalHandler = (e) => {
    setIsSavePositionOpen(false);
  };

  const closeSaveOrNotModalHandler = (e) => {
    setIsSaveOrNotModal(false);
  };

  const ToLoginModal = () => {
    if (isSignupOpen) {
      setIsSignupOpen(false);
      setIsLoginOpen(true);
    }
  };

  const ToSignupModal = () => {
    if (isLoginOpen) {
      setIsLoginOpen(false);
      setIsSignupOpen(true);
    }
  };
  const closeLoginAgainModalHandler = () => {
    setIsLoginAgainOpen(false);
  };
  const kakaologoutHandler = () => {
    window.location.assign(
      `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_API_URL}/signout`
    );
    setIsLogin(false);
    window.localStorage.removeItem("jwt"); //제거
  };

  const logoutHandler = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/signout`, {}, { withCredentials: true }).then((res) => {
      setIsLogin(false);
      window.localStorage.removeItem("jwt"); //제거
    });

    history.push("/");
  };

  const closeWarningModalHandler = () => {
    setWarningModal(false);
  };

  return (
    <>
      {/* // 로그인 모달 */}
      <Styled.ModalContainer>
        {isLoginOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeLoginModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalLogin
                  handleResponseSuccess={handleResponseSuccess}
                  ToSignupModal={ToSignupModal}
                  closeLoginModalHandler={closeLoginModalHandler}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      {/* // 회원가입 모달 */}
      <Styled.ModalContainer>
        {isSignupOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeSignupModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalSignup
                  handleResponseSuccess={handleResponseSuccess}
                  ToLoginModal={ToLoginModal}
                  closeLogoutModalHandler={closeLogoutModalHandler}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      {/* // HomeMap.js - 현재위치 저장 모달 */}
      <Styled.ModalContainer>
        {isSavePositionOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeSavePositionModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalSavePosition />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      {/* // profile.js - 회원탈퇴 경고모달창*/}
      <Styled.ModalContainer>
        {isWarningModal ? (
          <>
            <Styled.ModalBackdrop onClick={closeWarningModalHandler}>
              <Styled.ModalView height="300px" onClick={(e) => e.stopPropagation()}>
                <WarningDeleteUserModal />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>

      {/* 홈화면에서 내장소 저장 후 뜨는 saveOrNot 모달 */}
      <Styled.ModalContainer>
        {isSaveOrNotModal ? (
          <>
            <Styled.ModalBackdrop onClick={closeSaveOrNotModalHandler}>
              <Styled.ModalView height="300px" onClick={(e) => e.stopPropagation()}>
                <SaveOrNotModal />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      {/* 토큰만료되었을때 */}
      <Styled.ModalContainer>
        {isLoginAgainOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeLoginAgainModalHandler}>
              <Styled.ModalView height="300px" onClick={(e) => e.stopPropagation()}>
                <ModalLoginAgain />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      {/* 지역검색창 모달 */}
      <Styled.ModalContainer>
        {isOpenSearchPlaceModal ? (
          <>
            <HomeRightbar />
          </>
        ) : null}
      </Styled.ModalContainer>

      <Styled.HeaderContainer>
        <div className="header-wrapper">
          <Link to="/home">
            <img src="/images/logo.png" id="logo" alt="logo"></img>
          </Link>
          <div className="header-button-wrapper">
            {!isLogin ? (
              <>
                <div className="mainpage-button" onClick={openLoginModalHandler}>
                  login
                </div>
                <div className="mainpage-button" onClick={openSignupModalHandler}>
                  Sign Up
                </div>
              </>
            ) : (
              <>
                {window.localStorage.getItem("jwt") === "카카오로긴" ? (
                  <div className="kakao_mainpage-button mainpage-button" onClick={kakaologoutHandler}>
                    Log Out
                  </div>
                ) : (
                  <div className="mainpage-button" onClick={logoutHandler}>
                    Log Out
                  </div>
                )}

                <Styled.StyledLink to="/mypage/like">
                  <div className="mainpage-button">My Page</div>
                </Styled.StyledLink>
              </>
            )}
          </div>
        </div>
      </Styled.HeaderContainer>
    </>
  );
};

export default Header;
