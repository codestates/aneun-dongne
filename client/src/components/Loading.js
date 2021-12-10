import React from "react";
import styled from "styled-components";
// import "../App.css";

const Div = styled.div`
  /* loading */
  .loadingBox {
    position: relative;
    bottom: 0;

    margin: 300px auto;
  }
  .loadingBox h1 {
    text-align: center;
    margin-top: 100px;
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
`;
function Loading() {
  return (
    <Div>
      <div className="loadingBox">
        <div className="circle"></div>
        <h1>로딩중입니다. </h1>
      </div>
    </Div>
  );
}

export default Loading;
