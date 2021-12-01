import React, { useState } from "react";

import ModalLogin from "../../components/ModalLogin";
import ModalSignup from "../../components/ModalSignup";

import { Styled } from "./style";

const Mainpage = ({ handleResponseSuccess }) => {
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
            <Styled.ModalBackdrop>
              <Styled.ModalView>
                <div className="cancel-button" onClick={closeLoginModalHandler}>
                  취소
                </div>
                <ModalLogin
                  handleResponseSuccess={handleResponseSuccess}
                  ToSignupModal={ToSignupModal}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>
      <Styled.ModalContainer>
        {isSignupOpen ? (
          <>
            <Styled.ModalBackdrop>
              <Styled.ModalView>
                <div
                  className="cancel-button"
                  onClick={closeSignupModalHandler}
                >
                  취소
                </div>
                <ModalSignup
                  handleResponseSuccess={handleResponseSuccess}
                  ToLoginModal={ToLoginModal}
                />
              </Styled.ModalView>
            </Styled.ModalBackdrop>
          </>
        ) : null}
      </Styled.ModalContainer>

      <Styled.MainpageContainer>
        <button onClick={openLoginModalHandler}>login</button>
        <button onClick={openSignupModalHandler}>Sign Up</button>
      </Styled.MainpageContainer>
    </>
  );
};

export default Mainpage;
