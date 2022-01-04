import React from "react";
import axios from "axios";
import { Styled } from "./style";
import { loginAgainModal, loginState, token, kToken } from "../../recoil/recoil";
import { useSetRecoilState, useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import Cookies from "universal-cookie";
function ModalLoginAgain() {
  const cookies = new Cookies();
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setIsLoginAgainModal = useSetRecoilState(loginAgainModal);
  const history = useHistory();

  const kakaologoutHandler = () => {
    window.location.assign(
      `https://kauth.kakao.com/oauth/logout?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&logout_redirect_uri=${process.env.REACT_APP_API_URL}/signout`
    );
    setIsLogin(false);
    window.localStorage.removeItem("jwt");
  };

  const logoutHandler = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/signout`, {}, { withCredentials: true }).then((res) => {
      //로긴상태 해제
      setIsLogin(false);
      window.localStorage.removeItem("jwt");
    });

    history.push("/");
  };
  const yesFunc = () => {
    if (cookies.get("kakao-jwt")) {
      kakaologoutHandler();
    } else {
      logoutHandler();
    }
    setIsLoginAgainModal(false);
  };
  return (
    <div>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsLoginAgainModal(false)}>
          <i className="fas fa-times"></i>
        </Styled.CloseBtn>
        <h2>
          토큰을 얻을 수 없습니다. <br /> 다시 로그인해주세요.
        </h2>
        <div className="button-wrapper">
          <button onClick={() => yesFunc()}>예</button>
        </div>
      </Styled.FormContainer>
    </div>
  );
}

export default ModalLoginAgain;
