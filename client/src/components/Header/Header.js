import React, { useState } from "react";
import { useRecoilState } from "recoil";
import ModalLogin from "../ModalLogin/ModalLogin";
import ModalSignup from "../ModalSignup/ModalSignup";
import { Styled } from "./style";
import { isSavepositionOpen, loginState, loginModal, visitedModal } from "../../recoil/recoil";
import ModalSavePosition from "../ModalSavePosition/ModalSavePosition";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { StyledLink } from "../PlaceList";
import ModalVisited from "../ModalVisited/ModalVisited";
import Cookies from "universal-cookie";

const Header = ({ handleResponseSuccess }) => {
  const cookies = new Cookies();
  const history = useHistory();
  const [isLoginOpen, setIsLoginOpen] = useRecoilState(loginModal);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);
  const [isVisitedOpen, setIsVisitedOpen] = useRecoilState(visitedModal);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
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
  const closeVisitedModal = () => {
    if (isVisitedOpen) {
      setIsVisitedOpen(false);
    }
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

  const logoutHandler = () => {
    console.log("hi");
    axios.post(`${process.env.REACT_APP_API_URL}/signout`, {}, { withCredentials: true }).then((res) => {
      //로긴상태 해제
      // cookies.remove("jwt");
      setIsLogin(false);
    });

    history.push("/");
    // console.log(cookies);
  };
  console.log(isVisitedOpen);
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

      {/* // MyPage/visited 내가 가본 곳 모달 */}
      {/* <Styled.ModalContainer>
        {isVisitedOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeVisitedModal}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalVisited />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer> */}

      <Styled.HeaderContainer>
        <div className="header-wrapper">
          <Link to="/">
            {/* <div id="logo">아는동네</div> */}
            <img
              src="https://media.discordapp.net/attachments/912244672578089002/912920442157805678/E53C1906-3AF2-4061-AFD3-E6E7A131BDCE.jpeg"
              id="logo"
            ></img>
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
                <div className="mainpage-button" onClick={logoutHandler}>
                  Log Out
                </div>
                {/* 나중에 밑줄뜨는거 처리해야함*/}
                <StyledLink to="/mypage/profile">
                  <div className="mainpage-button">My Page</div>
                  {/* <div className="mainpage-button">My Page</div> */}
                </StyledLink>
              </>
            )}
          </div>
        </div>
      </Styled.HeaderContainer>
    </>
  );
};

export default Header;
