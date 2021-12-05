import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default function UserInfo() {
  const history = useHistory();
  const { isLogin } = useSelector((state) => state);
  if (!url) {
    url = "https://localhost:3000/user";
  }

  const logoutBtnHandler = (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    axios
      .post(
        { data: null },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `token ${token}`,
          },
          withCredentials: true,
        }
      )
      .then((res) => {
        localStorage.clear();

        history.push("/");
      });
  };
}
