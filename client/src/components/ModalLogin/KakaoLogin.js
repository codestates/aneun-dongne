import React from "react";
import axios from "axios";

function KakaoLogin() {
  const client_id = process.env.REACT_APP_REST_API || "6d44f5b3a39f09658ad4d72515a788d4";
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI || "https://localhost:3000";
const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=https://localhost:3000&response_type=code`;

  function requestAssign() {
    window.location.assign(KAKAO_LOGIN_URL);
  }
  return (
    <div>
      <button type="submit" className="kakao-login-button" onClick={requestAssign}>
        카카오톡 로그인
      </button>
    </div>
  );
}

export default KakaoLogin;
