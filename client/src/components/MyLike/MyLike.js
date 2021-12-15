import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import LikeLists from "./LikeLists.js";
import { useRecoilValue } from "recoil";
import { token } from "../../recoil/recoil";

import styled from "styled-components";

import { Icon } from "react-icons-kit";
import { heartO } from "react-icons-kit/fa/heartO";
import { getNames } from "../../AreaCodetoName";

// import { getNames } from "../../AreaCodetoName";
// const [like, setLike] = useState(0);

const MyLike = () => {
  const [postsInfo, setPostsInfo] = useState("");

  const accessToken = useRecoilValue(token);

  const history = useHistory();

  const Margin = styled.div`
    margin-left: 150px;
    font-size: 1.5rem;
    font-weight: bold;
  `;

  const renderMyLike = () =>
    axios
      .get(`${process.env.REACT_APP_API_URL}/mypage/likelists`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: "true",
      })
      .then((res) => {
        console.log("정보가 들어오면 확인하자", res.data.data);

        setPostsInfo(res.data.data);

        //res.data.post.post_firstimage
        // setImg(res.data.post_firstimage);
        // setAreacode(res.data.post_areacode);
        // setTitle(res.data.post.post_title);
        // setLikeCount(res.data["Like.likeCount"]);
        // setLike(res.data.isLiked);
      });

  useEffect(() => {
    // setPostsInfo(data);
    renderMyLike();
  }, []);

  console.log(postsInfo[0]);
  return (
    <Margin>
      <div className="list">
        {postsInfo.length === 0 ? (
          <div>Let's push the like button !!!</div>
        ) : (
          postsInfo.map((postsInfo) => {
            return <LikeLists postsInfo={postsInfo} key={postsInfo.id} />;
          })
        )}
      </div>
    </Margin>
  );
};

export default MyLike;
