import React, { useState } from "react";

import ModalLogin from "../ModalLogin";
import ModalSignup from "../ModalSignup";

import { Styled } from "./style";

const Header = ({ handleResponseSuccess }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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

  return (
    <>
      <Styled.ModalContainer>
        {isLoginOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeLoginModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalLogin handleResponseSuccess={handleResponseSuccess} ToSignupModal={ToSignupModal} />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Styled.ModalContainer>
        {isSignupOpen ? (
          <>
            <Styled.ModalBackdrop onClick={closeSignupModalHandler}>
              <Styled.ModalView onClick={(e) => e.stopPropagation()}>
                <ModalSignup handleResponseSuccess={handleResponseSuccess} ToLoginModal={ToLoginModal} />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>

      <Styled.HeaderContainer>
        <div className="header-wrapper">
          <div id="logo">아는 동네</div>
          <div className="header-button">
            <div className="mainpage-button" onClick={openLoginModalHandler}>
              login
            </div>
            <div className="mainpage-button" onClick={openSignupModalHandler}>
              Sign Up
            </div>
          </div>
        </div>
      </Styled.HeaderContainer>
    </>
  );
};

export default Header;
