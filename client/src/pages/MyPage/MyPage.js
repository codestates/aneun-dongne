import React, { useState, useEffect, useMemo } from "react";
import { Route, Switch } from "react-router-dom";
import { Styled } from "./style";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { token, kToken, loginState, loginAgainModal } from "../../recoil/recoil";
import styled from "styled-components";
import Cookies from "universal-cookie";
import axios from "axios";
import { Icon } from "react-icons-kit";
import { angleUp } from "react-icons-kit/fa/angleUp";
import { Profile, MyLike, MyReview, MyVisited } from ".";

const MoveToTopBtn = styled.button`
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  width: 60px;
  height: 60px;
  z-index: 100;
  border-radius: 100%;
  background-color: #b2e0f4;
  color: white;
  transition: all 0.3s;
  border: 0.5px solid white;
  display: ${(props) => (props.BtnStatus ? "flex" : "none")};
  :hover {
    background-color: #9cb1e0;
    transition: all 0.3s;
    border: 0.5px solid white;
  }
`;

const MyPage = ({ match }) => {
  const cookies = new Cookies();
  const [imgUrl, setImgUrl] = useState("images/men.png");
  const [prevImg, setPrevImg] = useState("images/men.png");
  const [nickname, setNickname] = useState("");
  const accessToken = useRecoilValue(token);
  const kakaoToken = useRecoilValue(kToken);
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const setIsLoginAgainOpen = useSetRecoilState(loginAgainModal);
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false);
  const activeStyle = {
    color: "#172a71",
  };

  async function getUserInfo() {
    const result = await axios
      .get(`${process.env.REACT_APP_API_URL}/user/info`, {
        headers: {
          Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
          // Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((res) => {
        setNickname(res.data.data.userInfo.nickname);
        if (res.data.data.userInfo.user_image_path && res.data.data.userInfo.user_thumbnail_path) {
          setImgUrl(res.data.data.userInfo.user_thumbnail_path || res.data.data.userInfo.user_image_path);
          setPrevImg(res.data.data.userInfo.user_thumbnail_path || res.data.data.userInfo.user_image_path);
        }
        setLoading(false);
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 401) {
            //1. 토큰없는데 어떻게 마이페이지에 들어와져있을때가 있음.
            setIsLoginAgainOpen(true);
            // console.log(err.response);
          }
        }
      });
    return result;
  }

  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 300) {
      // 300 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 300 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  function topBtn() {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  }

  function btnToFalse() {
    setBtnStatus(false);
  }

  function scrollyToZero() {
    setScrollY(0);
  }

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch(); // addEventListener 함수를 실행
    return () => {
      window.removeEventListener("scroll", handleFollow); // addEventListener 함수를 삭제
    };
  });

  return (
    <>
      <Styled.Body>
        <nav className="menu-bar">
          <div className="profile">
            <div className="profile-image">
              <img src={prevImg} />
            </div>
            <div className="profile-name">{nickname}</div>
          </div>
          <ul className="link-container">
            <li className="link-wrapper">
              <Styled.NavLink
                to={`${match.url}/like`}
                activeStyle={activeStyle}
                onClick={() => {
                  btnToFalse();
                  scrollyToZero();
                }}
              >
                <i className="fas fa-heart fa-1x"></i> <span className="link-text">좋아요 표시한 장소</span>
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink
                to={`${match.path}/visited`}
                activeStyle={activeStyle}
                onClick={() => {
                  btnToFalse();
                  scrollyToZero();
                }}
              >
                <i className="fas fa-map-marker-alt"></i> <span className="link-text">내가 저장한 장소</span>
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink
                to={`${match.url}/comments`}
                activeStyle={activeStyle}
                onClick={() => {
                  btnToFalse();
                  scrollyToZero();
                }}
              >
                <i className="fas fa-pen"></i> <span className="link-text">내 리뷰</span>
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink
                to={`${match.url}/profile`}
                activeStyle={activeStyle}
                onClick={() => {
                  btnToFalse();
                  scrollyToZero();
                }}
              >
                <i className="fas fa-cog"></i> <span className="link-text">프로필 수정</span>
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
          <MoveToTopBtn BtnStatus={BtnStatus} onClick={topBtn}>
            <Icon size={"60"} icon={angleUp} />
          </MoveToTopBtn>
        </div>

        <div>{/* justify-content:space-between을 위한 빈 태그 */}</div>
      </Styled.Body>
    </>
  );
};

export default MyPage;
