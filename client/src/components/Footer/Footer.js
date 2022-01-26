import React from "react";
import { Styled } from "./styled";

function Footer() {
  return (
    <>
      <footer>
        <Styled.Body>
          <Styled.Side>
            <div className="footer-logo-text">아는 동네</div>

            <div className="footer-logo"></div>
            <div className="side-col">
              <div className="info-icon">
                <div className="github-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>
                  <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                    Repository
                  </a>
                </span>
              </div>
            </div>
          </Styled.Side>
          <Styled.User>
            <div className="user-info">
              <div className="user-name-job-wrapper">
                <div className="user-name">윤해용</div>
              </div>
              <div className="info-icon">
                <div className="github-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>
                  <a href="https://github.com/haeyong9701" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </span>
              </div>
            </div>
            <div className="user-info">
              <div className="user-name-job-wrapper">
                <div className="user-name">남경화</div>
              </div>
              <div className="info-icon">
                <div className="github-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>
                  <a href="https://github.com/hwa7879" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </span>
              </div>
            </div>
            <div className="user-info">
              <div className="user-name-job-wrapper">
                <div className="user-name">류준열</div>
              </div>
              <div className="info-icon">
                <div className="github-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>
                  <a href="https://github.com/ryu9663" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </span>
              </div>
            </div>
            <div className="user-info">
              <div className="user-name-job-wrapper">
                <div className="user-name">손승이</div>
              </div>
              <div className="info-icon">
                <div className="github-icon">
                  <i className="fab fa-github"></i>
                </div>
                <span>
                  <a href="https://github.com/tmddl0807" target="_blank" rel="noopener noreferrer">
                    Github
                  </a>
                </span>
              </div>
            </div>
          </Styled.User>
        </Styled.Body>

        <Styled.TeamName>
          <h2>Copyright © 2021.TenTen.All Rights Reserved.</h2>
        </Styled.TeamName>
      </footer>
    </>
  );
}

export default Footer;
