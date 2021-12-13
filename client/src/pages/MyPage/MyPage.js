import React from "react";
import { Route } from "react-router-dom";
import { Styled } from "./style";

import { Profile, MyLike, MyReview, MyVisited } from ".";

const MyPage = ({ match }) => {
  const activeStyle = {
    color: "#172a71",
  };

  return (
    <>
      <Styled.Body>
        <nav className="menu-bar">
          <div className="profile">
            <div className="profile-image">
              <img src="/snowman.png" />
            </div>
            <div className="profile-name">김코딩</div>
          </div>
          <ul className="link-container">
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/like`} activeStyle={activeStyle}>
                좋아요 한 관광지
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/visited`} activeStyle={activeStyle}>
                내가 가본 곳
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/comments`} activeStyle={activeStyle}>
                내가 쓴 리뷰
              </Styled.NavLink>
            </li>
            <li className="link-wrapper">
              <Styled.NavLink to={`${match.url}/profile`} activeStyle={activeStyle}>
                프로필 수정
              </Styled.NavLink>
            </li>
          </ul>
        </nav>

        <div className="page-container">
          <Route exact path={match.url} component={MyLike} />
          <Route exact path={`${match.url}/like`} component={MyLike} />
          <Route exact path={`${match.url}/visited`} component={MyVisited} />
          <Route exact path={`${match.url}/comments`} component={MyReview} />
          <Route exact path={`${match.url}/profile`} component={Profile} />
        </div>
      </Styled.Body>
    </>
  );
};

export default MyPage;
