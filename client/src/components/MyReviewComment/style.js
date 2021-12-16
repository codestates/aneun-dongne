import styled from "styled-components";

export const Styled = {
  Body: styled.div`
    display: flex;
    width: 700px;
    border: 1px gray solid;
    border-radius: 10px;
    margin: 20px 0px;
    &:hover {
      box-shadow: 1px 1px 3px black;
    }

    .user-container {
      display: flex;
      margin: 10px 0px 0px 20px;
    }

    .user-image {
      width: 80px;
      height: 80px;
      border-radius: 100%;
      object-fit: cover;
    }

    .user-name {
      text-align: center;
    }

    .user-content-wrapper {
      margin-left: 30px;
      margin-top: 5px;
      line-height: 30px;
      width: 500px;
    }

    .user-content {
      cursor: pointer;
      width: 500px;
    }

    .user-hastag-wrapper {
      width: 500px;
    }

    .user-hastag {
      padding: 0px 4px;
      color: #162b71;
    }

    .user-content-bottom {
      display: flex;
      justify-content: space-between;
      width: 550px;
    }

    .user-location {
      color: gray;
    }

    .user-place {
      margin-left: 5px;
      cursor: pointer;
    }

    .created-date {
      color: gray;
    }

    .cancel-button {
      color: gray;
      cursor: pointer;
    }

    .side-delete {
      width: 200px;
      height: 120px;
      background-color: red;
    }
  `,
  Side: styled.div`
    width: 30px;
    height: 30px;
    background-color: red;
  `,
};
