import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    position: relative;
    .map-experiment {
      z-index: 9;
      position: absolute;
      left: 1px;
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.6);
    }
    @media (min-width: 1024px) {
      z-index: -8;
      position: fixed;
      left: 0;
      display: flex;
      flex-direction: column;
      background-color: white;
      padding-left: 45px;
      padding-bottom: 30px;
      border-right: none;
      width: 100%;
      height: 80%;

      > span {
        z-index: -8;
      }
    }

    @media (max-width: 1023px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 80%;
      .map-experiment {
        margin-left: 30px;

        @media (max-width: 1023px) {
          max-width: 600px;
          text-align: center;
          margin: 5px auto;
        }
      }
    }
  `,
  Map: styled.div`
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 10px;
    top: 0;

    @media (min-width: 1024px) {
      width: 600px;
      height: 600px;
    }
    @media (max-width: 1023px) {
      width: 600px;
      margin: 5px auto;
      margin-top: 0;
      height: 300px;
    }
    @media (max-width: 800px) {
      margin: 5px auto;
      margin-top: 0;
      width: 600px;
      height: 200px;
    }
    @media (max-width: 700px) {
      margin: 5px auto;
      margin-top: 0;
      width: 500px;
      height: 200px;
    }
    @media (max-width: 600px) {
      margin: 5px auto;
      margin-top: 0;
      width: 400px;
      height: 200px;
    }
    @media (max-width: 400px) {
      /* min-width: 500px; */
      margin: 5px auto;
      /* margin-left: 30px; */
      /* margin-right: 30px; */

      margin-top: 0;
      width: 300px;
      height: 200px;
    }
  `,
  MapBox: styled.div`
    width: auto;
  `,
};
