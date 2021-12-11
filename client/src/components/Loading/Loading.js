import React from "react";
import styled from "styled-components";

const Div = styled.div`
  //! 동그라미 로딩
  //! 발자국로딩
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 600px;
  justify-content: center;
  /* background-color: red; */

  p {
    font-size: 2rem;
    width: 500px;
    margin: 60px auto;
    /* background-color: blue; */
    text-align: center;
    transition: all 0.5s ease-in-out;
    animation: move 1s linear infinite alternate;

    @keyframes move {
      0% {
        padding-left: 30px;
        /* margin-left:10px */
        /* margin-left: 0; */
      }
      100% {
        padding-right: 30px;
        /* margin-left: 20px; */
      }
    }
  }
  div {
    margin: 10px auto;
    width: 60%;
    /* background: purple; */
    display: flex;
  }
  img {
    padding: 30px;
    margin: 50px auto;
    width: 500px;
    height: 150px;
  }
  #footer-logo-img1 {
    animation: blink 4s ease-in-out infinite;
    /* animation-delay: 1.7s; */
    margin-top: 10px;

    @keyframes blink {
      10% {
        opacity: 1;
      }
      25% {
        opacity: 0;
        /* margin-left: 20px; */
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
  #footer-logo-img2 {
    animation: blink2 4s ease-in-out infinite;
    /* animation-delay: 2s; */
    @keyframes blink2 {
      0% {
        opacity: 0;
        /* margin-left: 0; */
      }
      25% {
        opacity: 1;
        /* margin-left: 20px; */
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
  #footer-logo-img3 {
    animation: blink3 4s ease-in-out infinite;
    /* animation-delay: 2s; */
    margin-top: 10px;
    @keyframes blink3 {
      0% {
        opacity: 0;
        /* margin-left: 0; */
      }
      25% {
        opacity: 0;
        /* margin-left: 20px; */
      }
      50% {
        opacity: 1;
      }

      75% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
  #footer-logo-img4 {
    animation: blink4 4s ease-in-out infinite;
    /* animation-delay: 2s; */

    @keyframes blink4 {
      0% {
        opacity: 0;
        /* margin-left: 0; */
      }
      25% {
        opacity: 0;
        /* margin-left: 20px; */
      }
      50% {
        opacity: 0;
      }
      75% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
`;
function Loading() {
  return (
    <Div>
      <p>잠시만 기다려주세요</p>
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
    </Div>
  );
}

export default Loading;
