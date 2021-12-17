import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { Styled } from "./style";

import { useRecoilValue, useRecoilState } from "recoil";
import { token, kToken, loginState } from "../../recoil/recoil";

import axios from "axios";

import { Profile, MyLike, MyReview, MyVisited } from ".";

import LikeLoading from "../../components/Loading/LikeLoading";

const MyPage = ({ match }) => {
  const [imgUrl, setImgUrl] = useState("images/men.png");
  const [prevImg, setPrevImg] = useState("images/men.png");
  const [nickname, setNickname] = useState("");
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);

  const activeStyle = {
    color: "#172a71",
  };

  async function getUserInfo() {
    const result = await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);

        setNickname(res.data.data.userInfo.nickname);
        if (res.data.data.userInfo.user_image_path && res.data.data.userInfo.user_thumbnail_path) {
          setImgUrl(res.data.data.userInfo.user_thumbnail_path);
          setPrevImg(res.data.data.userInfo.user_image_path);
        }
        setLoading(false);
      });
    return result;
  }
  useEffect(async () => {
    //! 우선 적음 나중에 지우게되도
    await setLoading(true);
    getUserInfo();

    await setLoading(false);
    console.log("되나요");
  }, []);

  return (
    <>
      <Styled.Body>
        <nav className="menu-bar">
          <div className="profile">
            {/* <div className="profile-image">{loading ? <LikeLoading /> : <img src={prevImg} />}</div> */}
            <div className="profile-image">
              <img src={prevImg} />
            </div>
            <div className="profile-name">{nickname}</div>
          </div>
          <ul className="link-container">
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/like`} activeStyle={activeStyle}>
                <i class="fas fa-heart fa-1x"></i> 좋아요 표시한 장소
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.path}/visited`} activeStyle={activeStyle}>
                <i class="fas fa-map-marker-alt"></i> <span className="">내가 저장한 장소</span>
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/comments`} activeStyle={activeStyle}>
                <i class="fas fa-pen"></i> 내 리뷰
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/profile`} activeStyle={activeStyle}>
                <i class="fas fa-cog"></i> 프로필 수정
              </Styled.NavLink>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Switch>
            <Route exact path={match.url} component={MyLike} />
            <Route exact path={`${match.url}/like`} component={MyLike} />
            <Route exact path={`${match.url}/visited`} component={MyVisited} />
            <Route exact path={`${match.url}/comments`} component={MyReview} />
            <Route exact path={`${match.url}/profile`}>
              <Profile
                imgUrl={imgUrl}
                setImgUrl={setImgUrl}
                prevImg={prevImg}
                setPrevImg={setPrevImg}
                setNickname={setNickname}
              />
            </Route>
          </Switch>
        </div>

        <div>{/* justify-content:space-between을 위한 빈 태그 */}</div>
      </Styled.Body>
    </>
  );
};

export default MyPage;
