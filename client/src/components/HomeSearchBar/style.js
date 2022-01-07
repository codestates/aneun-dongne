import styled from "styled-components";

export const Styled = {
  CloseBtn: styled.button`
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    /* background-color: white; */
    background-color: #3a6fb0;
    color: white;
    border-radius: 10px;
    z-index: 999;
    padding: 7px;
    margin-left: auto;
    border: none;
  `,
  MapRightBar: styled.div`
    animation: modal-show 1s;
    @keyframes modal-show {
      from {
        margin-top: 50px;
      }
      to {
        margin-top: 0;
      }
    }
    position: fixed;
    top: 120px;
    left: 20px;
    background: rgba(255, 255, 255, 0.3);
    z-index: 999;
    display: flex;
    align-content: center;
    width: 600px;
    border: 1px #3a6fb0 solid;
    border-radius: 10px;
    flex-direction: column;
    @media (max-width: 1023px) {
      margin: 2% auto;
    }
    @media (max-width: 700px) {
      width: 500px;

      margin: 2% auto;
    }
    @media (max-width: 600px) {
      width: 400px;

      margin: 2% auto;
    }
    @media (max-width: 400px) {
      margin: 2% auto;

      width: 300px;
    }
    @media (min-width: 1024px) {
      margin-left: 10px;
      margin-top: 10px;
    }
  `,

  //지역선택 wrapper
  SearchWrapper: styled.div`
    @media (max-width: 1023px) {
      margin: 0 auto;
      display: flex;
      flex-direction: column;

      width: 550px;
    }
    @media (max-width: 700px) {
      width: 300px;
      margin: 5px auto;
    }
    @media (max-width: 700px) {
      width: 300px;
      margin: 5px auto;
      /* border: 1px red solid; */
    }
    @media (min-width: 1024px) {
      height: 20px;
      width: 550px;
      margin: auto 0;
      display: flex;

      height: 50px;
    }
  `,
  //도|시군구를 감싸고있는 div
  SearchBar: styled.div`
    margin: 5px 2% 5px 2%;
    display: flex;
    padding: 5px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    /* border: 1px gray solid; */

    @media (max-width: 1023px) {
      width: 80%;
      height: 30px;
      margin: 5px auto;

      border-radius: 5px;
    }
    @media (max-width: 600px) {
      width: 200px;
      height: 30px;
      margin: 5px auto;
      border-radius: 5px;
    }
  `,
  // 도|시군구
  SearchLocation: styled.select`
    margin-right: 5px;
    margin-left: 5px;
    width: 50%;
    height: 100%;
    background-color: white;
    border: none;
    border-right: ${(props) => (props.first ? "1px gray solid" : "none")};
    @media (max-width: 1023px) {
      width: 500px;
      border-radius: 5px;
    }
    @media (max-width: 700px) {
      width: 300px;
    }
  `,

  SearchPlace: styled.input`
    border: none;
    @media (max-width: 1023px) {
      /* border: 1px gray solid; */
      padding: 10px;
      width: 80%;
      height: 30px;
      margin: 5px auto;
      border-radius: 5px;
    }
    @media (max-width: 600px) {
      width: 200px;
      margin: 5px auto;
    }
    @media (min-width: 1024px) {
      /* border: 1px gray solid; */
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 5px;
      margin: 5px 2%;
      width: 120px;
      height: 40px;
      background-color: white;
      /* border: gray 1px solid; */
      border-radius: 5px;
      padding: 5px;
    }
  `,
  //검색버튼
  SearchBtn: styled.button`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 80px;
    height: 40px;
    background-color: #3a6fb0;
    border: white;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    perspective: 230px;
    color: white;
    &:hover {
      background-color: #2f4d6f;
    }

    @media (max-width: 1023px) {
      border-radius: 5px;
      width: 80%;
      height: 30px;
      margin: 5px auto;
      border-radius: 5px;
    }
    @media (max-width: 600px) {
      margin: 5px auto;
      width: 200px;
      height: 30px;
      background-color: #3a6fb0;
    }
    @media (min-width: 1024px) {
      margin-top: 5px;
      margin-bottom: 5px;
      margin-left: 5px;
      width: 80px;
      height: 40px;
      background-color: #3a6fb0;
    }
  `,
};
