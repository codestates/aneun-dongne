import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Visited({ handleSaveResponseSuccess }) {
  const handleVisited = () => {
    axios
      .post("https://localhost:3000/visited", {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
      .then((res) => {
        handleSaveResponseSuccess();
      })
      .catch((err) => {
        alert(err);
      });

    // TODO : 서버에 로그인을 요청하고, props로 전달된 callback을 호출합니다.
    // TODO : 이메일 및 비밀번호를 입력하지 않았을 경우 에러를 표시해야 합니다.
  };
  return (
    <div>
      <center>
        <button className="btn btn-visited" type="submit" onClick={handleVisited}>
          위치 저장!
        </button>
      </center>
    </div>
  );
}
