import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import dotenv from "dotenv";
import { userInfo, loginState, loginModal } from "../../recoil/recoil";
import hamtori from "../../img/hamtori.png";
import ProfileUpload from "../../components/UploadImage/ProfileUpload";
import Menubar from "./Menubar";
import UserInfoPage from "./UserInfoPage";
import Likelists from "./likelists";
import CommentLists from "./commentlists";
const Body = styled.div`
  /* position: relative; */
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;

  margin-top: 73px;
`;

const MyPage = () => {
  const [info, setInfo] = useRecoilState(userInfo);
  const [imgUrl, setImgUrl] = useState("");
  const [inputUsername, setInputUsername] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputNewPassword, setInputNewPassword] = useState("");
  const [inputCheckPassword, setInputCheckPassword] = useState("");
  const [confirmMessage, setConfirmMessage] = useState("");
  const [nickname, setNickname] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setIsLoginOpen = useSetRecoilState(loginModal);

  const history = useHistory();

  useEffect(() => {
    //! 우선 적음 나중에 지우게되도
    axios
      .get("https://localhost:80/user/info", { withCredentials: true })
      .then((res) => {
        console.log(res.data.data.userInfo);
        console.log(typeof res.data.data.userInfo.user_image_path);
        setInfo(res.data.data.userInfo);
        if (res.data.data.userInfo.user_image_path) {
          console.log(res.data.data.userInfo.user_image_path);
          setImgUrl(res.data.data.userInfo.user_image_path);
          setNickname(res.data.data.userInfo.nickname);
        }
      })
      .then();
  }, []);

  return (
    <Body>
      <Menubar imgUrl={imgUrl} setImgUrl={setImgUrl} nickname={nickname} />
      {/* !! 여기에 Router Switch 쓰려고 했는데, App.js에 Switch가 있어서 뭔가 안되는것같네요..
      그런데 App.js에서 라우터뜨면 전체페이지가 리렌더링될텐데 */}
      <UserInfoPage imgUrl={imgUrl} setImgUrl={setImgUrl} />
    </Body>
  );
};
export default MyPage;
