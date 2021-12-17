import styled from "styled-components";

export const Styled = {
  //전체 박스
  MapRightBar: styled.div`
    display: flex;
    flex-direction: column;
    border: 1px rgb(192, 251, 255) solid;

    border-radius: 10px;
    margin-left: 10px;
    margin-top: 10px;

    width: 600px;
    animation: color-change1 2s infinite;
    @keyframes color-change1 {
      0% {
        border: #c1ff6b 3px solid;

        border: #c1ff6b 3px solid;
      }
      50% {
        border: #fab4b4 3px solid;

        border: #fab4b4 3px solid;
      }
      100% {
        border: #46ffff 3px solid;

        border: #46ffff 3px solid;
      }
    }
    /* height: 130px; */

    /* &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    } */

    > p {
      margin: 2% auto;

      text-align: center;
    }
  `,
  SearchWrapper: styled.div`
    height: 40px;
    width: 550px;
    margin: auto;
    display: flex;
    /* justify-content: space-around; */
    height: 50px;
  `,
  // 도|시군구
  SearchLocation: styled.select`
    margin-right: 5px;
    margin-left: 5px;
    width: 50%;
    height: 100%;
    background-color: white;
    /* background-color: red; */
    border: none;
    /* border: 1px pink solid; */
    //중앙선 더 오른쪽으로 옮기고 싶은데 잘안된다..
    border-right: ${(props) => (props.first ? "1px gray solid" : "none")};
  `,
  //도|시군구를 감싸고있는 div
  SearchBar: styled.div`
    margin: 5px 2% 5px 2%;
    /* margin-right: 5%; */
    display: flex;
    padding: 5px;
    width: 300px;
    height: 40px;
    border-radius: 5px;
    border: 1px gray solid;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  `,
  //키워드 검색
  SearchKeyWord: styled.select`
    /* margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px; */
    margin: 5px 2% 5px 2%;
    width: 130px;
    height: 40px;
    background-color: white;
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    border: gray 1px solid;
    border-radius: 10px;
    padding: 5px;
    transition: all 0.5s ease-in-out;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 40px;
      top: 0;
      right: 0;
      z-index: -1;
      background-color: rgb(192, 251, 255);
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 5px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    &:hover {
      color: black;
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
    &:active {
      //
    }
  `,
  //장소검색
  SearchPlace: styled.input`
    border: 1px gray solid;
    /* margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px; */
    margin: 5px 2% 5px 2%;
    width: 180px;
    height: 40px;
    background-color: white;
    border: gray 1px solid;
    border-radius: 5px;
    padding: 5px;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  `,
  //검색버튼
  SearchBtn: styled.button`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 80px;
    height: 40px;
    background-color: rgb(192, 251, 255);
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    );
    border: white;
    border-radius: 10px;
    padding: 5px;
    cursor: pointer;
    cursor: pointer;
    perspective: 230px;
    transition: all 0.5s ease-in-out;
    &:after {
      position: absolute;
      content: "";
      width: 0;
      height: 100%;
      top: 0;
      right: 0;
      z-index: -1;
      background-color: rgb(192, 251, 255);
      background-image: linear-gradient(
        to left top,
        rgba(255, 255, 255, 0.9) 0,
        rgba(0, 0, 0, 0) 60%,
        rgba(0, 0, 0, 0) 100%
      );
      border-radius: 5px;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  `,
};
