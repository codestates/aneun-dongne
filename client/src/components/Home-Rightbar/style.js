import styled from "styled-components";

export const Styled = {
  // 지역검색창
  SearchLocation: styled.select`
    margin-bottom: 5px;
    margin-right: 5px;
    margin-left: 5px;
    width: 80%;
    height: 100%;
    background-color: white;
    /* border:gray 1px solid; */
    border: none;

    //중앙선 더 오른쪽으로 옮기고 싶은데 잘안된다..
    border-right: ${(props) => (props.first ? "1px gray solid" : "none")};
  `,
  SearchKeyWord: styled.input`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 80%;
    height: 100%;
    background-color: white;
    border: gray 1px solid;
    border-radius: 10px;
    padding: 5px;
  `,

  SearchPlace: styled.input`
    border: 1px gray solid;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    width: 80%;
    height: 100%;
    background-color: white;
    border: gray 1px solid;
    border-radius: 10px;
    padding: 5px;
  `,
  SearchBtn: styled.button`
    margin-top: 160px;
    margin-bottom: 15px;
    margin-left: 5px;
    width: 80%;
    height: 100%;
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
  SearchBar: styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    display: flex;
    padding: 5px;
    width: 80%;
    height: 40px;
    border-radius: 5px;
    border: 1px gray solid;
  `,
  MapRightBar: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px rgb(192, 251, 255) solid;
    border-radius: 10px;
    margin-left: 2rem;
    bottom: 20px;
    width: 14rem;
    padding-left: 1rem;
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
    > p {
      margin-top: 10px;
    }
  `,
  //오른쪽 버튼
  //   RightBtn: styled.button`
  //     border-radius: 5px;
  //     position: relative;
  //     left: -10px;
  //     background-color: rgb(192, 251, 255);
  //     background-image: linear-gradient(
  //       to right,
  //       rgba(255, 255, 255, 0.9) 0,
  //       rgba(0, 0, 0, 0) 60%,
  //       rgba(0, 0, 0, 0) 100%
  //     );
  //     height: 40px;
  //     width: 100px;
  //     margin-top: 30px;
  //     border: none;

  //   `,
  //   RightBtnBox: styled.div`
  //     display: flex;
  //     flex-direction: column;
  //     padding-left: 0;
  //   `,
};
