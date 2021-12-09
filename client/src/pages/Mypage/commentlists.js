import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { userInfo } from "../../recoil/recoil";
import { useRecoilState } from "recoil";

const Body = styled.div`
  top: 0;
  margin-left: 300px;
  /* width: 100%; */
  /* height: 100%; */
  /* border: 1px gray solid; */

  /* background-color: yellowgreen; */
  display: flex;
  justify-content: center;
`;

function Commentlists() {
  const [userinfo, setUserInfo] = useRecoilState(userInfo); //유저 정보 확인
  const [seletedLike, setSeletedLike] = useState(""); //댓글 쓴 게시글 담기

  const history = useHistory();

  const [inputPostId, setInputPostId] = useState(""); // 선택한 게시글의 id
  const [show, setShow] = useState([]); // 전체 게시글

  const ClickCommentList = () => {
    axios
      .get(
        `http://localhost:3000/mypage/commentlist`,
        // { data: { landmark, HashTag, likeCount } },
        { "content-type": "application/json", withCredentials: true }
      )
      .then((res) => console.log(res));
    // setSeletedLike(e.target.value);
    // setInputPostId(e.target.value);
  };
  useEffect(() => {
    ClickCommentList();
  }, []);

  return (
    <>
      <Body>
        <div>좋아요 한 목록</div>
        <div
          classname="list"
          onClick={() => {
            ClickCommentList();
          }}
        />
      </Body>
    </>
  );
}
export default Commentlists;
