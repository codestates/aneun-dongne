import React from "react";

function KakaoLogin() {
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
