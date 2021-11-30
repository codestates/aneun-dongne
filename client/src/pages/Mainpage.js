import React, { useState } from "react";
import styled from "styled-components";

import ModalLogin from "../components/ModalLogin";
import ModalSignup from "../components/ModalSignup";

const MainpageContainer = styled.div`
  height: 3000px; // 나중에 높이 정해지면 지우기

  button {
    width: 100px;
    height: 100px;
    background-color: red;
  }
`;

export const ModalContainer = styled.div`
  position: relative;
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;

export const ModalView = styled.div`
  position: fixed;
  background-color: white;
  width: 500px;
  height: 500px;
  z-index: 2;
  border: 1px solid black;

  .cancel-button {
    width: 50px;
    height: 50px;
    background-color: red;
  }
`;

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
      <ModalContainer>
        {isLoginOpen ? (
          <>
            <ModalBackdrop>
              <ModalView>
                <div className="cancel-button" onClick={closeLoginModalHandler}>
                  취소
                </div>
                <ModalLogin
                  handleResponseSuccess={handleResponseSuccess}
                  ToSignupModal={ToSignupModal}
                />
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>
      <ModalContainer>
        {isSignupOpen ? (
          <>
            <ModalBackdrop>
              <ModalView>
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
              </ModalView>
            </ModalBackdrop>
          </>
        ) : null}
      </ModalContainer>

      <MainpageContainer>
        <button onClick={openLoginModalHandler}>login</button>
        <button onClick={openSignupModalHandler}>Sign Up</button>
      </MainpageContainer>
    </>
  );
};

export default Mainpage;
