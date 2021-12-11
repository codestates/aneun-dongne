import React from "react";
import { Styled } from "./styled";

function Footer() {
  return (
    <>
      <Styled.Body>
        <Styled.Side>
          <div className="footer-logo-text">아는 동네</div>

          <div className="footer-logo"></div>
          <div className="side-col">
            <div className="info-icon">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                  Repository
                </a>
              </span>
            </div>
            <div className="info-icon">
              <i className="far fa-comment-alt"></i>
              <span>
                <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                  Wiki
                </a>
              </span>
            </div>
          </div>
        </Styled.Side>
        <Styled.User>
          <div className="user-info">
            <div className="user-name-job-wrapper">
              <div className="user-name">윤해용</div>
              <div className="user-job">Full Stack</div>
            </div>
            <div className="info-icon">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/haeyong9701" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </span>
            </div>
            <div className="info-icon">
              <i className="far fa-envelope"></i>
              <span>
                <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </span>
            </div>
          </div>
          <div className="user-info">
            <div className="user-name-job-wrapper">
              <div className="user-name">남경화</div>
              <div className="user-job">Front End</div>
            </div>
            <div className="info-icon">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/hwa7879" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </span>
            </div>
            <div className="info-icon">
              <i className="far fa-envelope"></i>
              <span>
                <a href="hwahwa7879@gmail.com" target="_blank" rel="noopener noreferrer">
                  hwahwa7879@gmail.com
                </a>
              </span>
            </div>
          </div>
          <div className="user-info">
            <div className="user-name-job-wrapper">
              <div className="user-name">류준열</div>
              <div className="user-job">Front End</div>
            </div>
            <div className="info-icon">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/ryu9663" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </span>
            </div>
            <div className="info-icon">
              <i className="far fa-envelope"></i>
              <span>
                <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </span>
            </div>
          </div>
          <div className="user-info">
            <div className="user-name-job-wrapper">
              <div className="user-name">손승이</div>
              <div className="user-job">Back End</div>
            </div>
            <div className="info-icon">
              <i className="fab fa-github"></i>
              <span>
                <a href="https://github.com/tmddl0807" target="_blank" rel="noopener noreferrer">
                  Github
                </a>
              </span>
            </div>
            <div className="info-icon">
              <i className="far fa-envelope"></i>
              <span>
                <a href="https://github.com/codestates/aneun-dongne" target="_blank" rel="noopener noreferrer">
                  Email
                </a>
              </span>
            </div>
          </div>
        </Styled.User>
      </Styled.Body>

      <Styled.TeamName>
        <h2>Team : TenTen</h2>
        <div>
          <img
            className="footer-logo-img"
            id="footer-logo-img1"
            alt="icon"
            src="https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png"
          />
          <img
            className="footer-logo-img"
            id="footer-logo-img2"
            alt="icon"
            src="https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png"
          />

          <img
            className="footer-logo-img"
            id="footer-logo-img3"
            alt="icon"
            src="https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png"
          />
          <img
            className="footer-logo-img"
            id="footer-logo-img4"
            alt="icon"
            src="https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/footer.png"
          />
        </div>
      </Styled.TeamName>
    </>
  );
}

export default Footer;
