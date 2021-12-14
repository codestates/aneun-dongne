import React, { useState, useEffect } from "react";
import axios from "axios";

import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

const Body = styled.div`
  margin-left: 400px;
`;

const MyReview = () => {
  const [comments, SetComments] = useState([]);
  const accessToken = useRecoilValue(token);

  const renderMyComments = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/commentlists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
      });
  };

  useEffect(() => {
    renderMyComments();
  }, []);

  return (
    <>
      <Body>
        <div>dddd</div>
      </Body>
    </>
  );
};

export default MyReview;
