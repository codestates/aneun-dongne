import React, { useEffect, useRef } from "react";
import { Route, Switch } from "react-router-dom";
import { Styled } from "./style";
import { useLocation } from "react-router-dom";

import Profile from "../../components/Profile/Profile";
import MyLike from "../../components/MyLike/MyLike";
import MyReview from "../../components/MyReview/MyReview";
import MyVisited from "../../components/MyVisited/MyVisited";

// TODO SPA에서 새로고침을 하면 흰 화면이 뜬다. 해결하기!

const MyPage = () => {
  const { pathname } = useLocation();

  const navMenu = useRef();

  useEffect(() => {
    navEffectHandler();
  });

  const navEffectHandler = () => {
    for (let i = 0; i < navMenu.current.childNodes.length; i++) {
      navMenu.current.childNodes[i].childNodes[0].classList.remove("focused");
    }
    switch (pathname) {
      case "/mypage":
        navMenu.current.childNodes[0].childNodes[0].classList.add("focused");
        break;
      case "/mypage/comments":
        navMenu.current.childNodes[1].childNodes[0].classList.add("focused");
        break;
      case "/mypage/like":
        navMenu.current.childNodes[2].childNodes[0].classList.add("focused");
        break;
      case "/mypage/visited":
        navMenu.current.childNodes[3].childNodes[0].classList.add("focused");
        break;
      default:
        return;
    }
  };

  return (
    <>
      <Styled.Body>
        <nav className="menu-bar">
          <div className="profile">
            <div className="profile-image">
              <img src="/snowman.png" alt="스노우맨" />
            </div>
            <div className="profile-name">guest33</div>
          </div>
          <ul className="link-container" ref={navMenu}>
            <li className="link-wrapper">
              <Styled.Link to="/mypage">프로필 수정</Styled.Link>
            </li>
            <li className="link-wrapper">
              <Styled.Link to="/mypage/comments">좋아요 한 관광지</Styled.Link>
            </li>
            <li className="link-wrapper">
              <Styled.Link to="/mypage/like">내가 쓴 리뷰</Styled.Link>
            </li>
            <li className="link-wrapper">
              <Styled.Link to="/mypage/visited">내가 가본 곳</Styled.Link>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Switch>
            <Route exact path="/mypage">
              <Profile />
            </Route>
            <Route exact path="/mypage/comments">
              <MyLike />
            </Route>
            <Route exact path="/mypage/like">
              <MyReview />
            </Route>
            <Route exact path="/mypage/visited">
              <MyVisited />
            </Route>
          </Switch>
        </div>
      </Styled.Body>
    </>
  );
};

export default MyPage;
