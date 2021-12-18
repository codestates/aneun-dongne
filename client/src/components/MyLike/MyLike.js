import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LikeLists from "./LikeLists.js";
import { useRecoilValue } from "recoil";
import { token, kToken } from "../../recoil/recoil";

import styled from "styled-components";

import LikeLoading from "../Loading/LikeLoading";
import Empty from "../Empty/Empty.js";

// import { getNames } from "../../AreaCodetoName";
// const [like, setLike] = useState(0);

const Body = styled.div`
  .list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 1600px) {
    .list {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;

const MyLike = () => {
  const accessToken = useRecoilValue(token);
  const [postsInfo, setPostsInfo] = useState("");
  const [isLoing, setIsloading] = useState(true);
  const kakaoToken = useRecoilValue(kToken);

  const history = useHistory();

  const Margin = styled.div`
    margin-left: 150px;
    font-size: 1.5rem;
    font-weight: bold;
  `;

  const renderMyLike = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/likelists`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: "true",
      })
      .then((res) => {
        setIsloading(true);
        setPostsInfo(res.data.data);

        console.log("정보가 들어오면 확인하자", res.data.data);
      })
      .then(() => {
        setIsloading(false);
      });
  };

  useEffect(() => {
    renderMyLike();
  }, []);

  return (
    <>
      <div className="like-list">
        {isLoing ? (
          <div>
            <LikeLoading />
          </div>
        ) : (
          <div className="list">
            {postsInfo.length === 0 ? (
              <Empty />
            ) : (
              postsInfo.map((postsInfo) => {
                return <LikeLists postsInfo={postsInfo} key={postsInfo.id} />;
              })
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default MyLike;
