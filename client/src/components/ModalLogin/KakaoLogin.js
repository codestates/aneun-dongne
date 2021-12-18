import React from "react";

function KakaoLogin() {
  // const client_id = process.env.KAKAO_REST_API_KEY;
  // const redirect_uri = process.env.CALLBACK_URL;
  // const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=6d44f5b3a39f09658ad4d72515a788d4&redirect_uri=https://localhost:3000&response_type=code`;
  // const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.KAKAO_REST_API_KEY}&redirect_uri=${process.env.CALLBACK_URL}&response_type=code`;
  // const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?client_id=408efd35e5665efd5887c51c419dfb85&redirect_uri=https://localhost:4000/user/kakao/callback&response_type=code`;
  const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_KAKAO_REST_API_KEY}&redirect_uri=${process.env.REACT_APP_CALLBACK_URL}&response_type=code`;

  function requestKakaoAssign() {
    window.location.assign(kakaoURL);
  }
  return (
    <div>
      <button type="submit" className="kakao-login-button" onClick={requestKakaoAssign}>
        카카오톡 로그인
      </button>
    </div>
  );
}

export default KakaoLogin;
