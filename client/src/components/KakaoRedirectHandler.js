import React, { useState, useEffect } from "react";

import { useSetRecoilState } from "recoil";
import { token } from "../recoil/recoil";
import Loading from "./Loading/Loading";
import { useHistory } from "react-router-dom";
import axios from "axios";

// const KakaoLogin = (code) => {};

const KakaoRedirectHandler = () => {
  // 인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  const setAccessToken = useSetRecoilState(token);
  const history = useHistory();

  useEffect(async () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/user/kakao/callback?code=${code}`, {
        "Content-Type": "application/json",
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data.accessToken); // 토큰이 넘어올 것임
        setAccessToken(res.data.data.accessToken);
      })
      .then(() => {
        history.push("/"); // 토큰 받았고 로그인됐으니 화면 전환시켜줌(메인으로)
      })
      .catch((err) => {
        console.log("소셜로그인 에러", err);
        history.push("/"); // 로그인 실패하면 돌려보냄
      });
  }, []);

  return <Loading />;
};

export default KakaoRedirectHandler;
