import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 100vh;
  //! 동그라미 로딩
  /* loading */
  .loadingBox {
    /* position: relative; */
    /* bottom: 0; */

    /* margin: 300px auto; */
  }
  .loadingBox h1 {
    text-align: center;
    /* margin-top: 100px; */
  }
  .loadingBox .circle {
    margin-left: auto;
    margin-right: auto;
    width: 40px;
    height: 40px;
    border: 10px solid #fff;
    border-top: 10px solid rgb(176, 233, 168);
    border-radius: 50em;
    transition: all 0.2s;
    animation-name: spinCircle;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @keyframes spinCircle {
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  //! 발자국로딩
  display: flex;
  flex-direction: column;

  justify-content: center;
  /* background-color: red; */
  margin: 300px 300px 300px 300px;
  p {
    /* background-color: blue; */
    font-size: 2rem;
    width: 100%;
    margin: 30px 0;
    /* background-color: red; */
    text-align: center;
    animation: move 1s ease-in-out infinite alternate;
    @keyframes move {
      0% {
        margin-left: 10px;
      }
      100% {
        margin-left: 0px;
      }
    }
  }
  img {
    margin: 50px;
    width: 100px;
    height: 100px;
  }
  #footer-logo-img1 {
    animation: blink 4s ease-in-out infinite;
    /* animation-delay: 1.7s; */
    @keyframes blink {
      0% {
        opacity: 1;
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
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
  #footer-logo-img2 {
    /* margin-left: 200px; */
    margin-bottom: 100px;
    animation: blink2 4s ease-in-out infinite;
    /* animation-delay: 2s; */
    @keyframes blink2 {
      0% {
        opacity: 0;
        /* margin-left: 0; */
      }
      35% {
        /* margin-left: 100px; */
        /* margin-bottom: 100px; */
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
    margin-bottom: 100px;
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
      <div className="loadingBox">
        <div className="circle"></div>
      </div>

      <p>잠시만 기다려주세요</p>

      <hr />
      <hr />
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
        <p>잠시만 기다려주세요</p>
      </div>
    </Div>
  );
}

export default Loading;
