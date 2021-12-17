import styled from "styled-components";

export const Styled = {
  Comment: styled.div`
    display: flex;
    width: 700px;
    border: 1px gray solid;
    border-radius: 10px;
    margin: 20px 20px;
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

    .side {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 15px;
      width: 40px;
      height: 40px;
      border-radius: 100%;
      &:hover {
        background-color: #eee;
      }
    }

    .delete-button {
      color: gray;
      cursor: pointer;
    }

    @media screen and (max-width: 1150px) {
      width: 600px;

      .user-content-wrapper {
        width: 400px;
      }

      .user-content {
        width: 400px;
      }

      .user-hastag-wrapper {
        width: 400px;
      }

      .user-content-bottom {
        width: 450px;
      }
    }

    @media screen and (max-width: 650px) {
      width: 450px;

      .user-content-wrapper {
        width: 250px;
      }

      .user-content {
        width: 250px;
      }

      .user-hastag-wrapper {
        width: 250px;
      }

      .user-content-bottom {
        width: 300px;
      }

      .user-location-wrapper {
        display: flex;
        flex-direction: column;
      }

      .user-location {
        margin-left: 5px;
      }
    }

    @media screen and (max-width: 480px) {
      width: 300px;
      font-size: 0.7rem;

      .user-image {
        width: 45px;
        height: 45px;
      }

      .user-content-wrapper {
        width: 150px;
      }

      .user-content {
        width: 140px;
      }

      .user-hastag-wrapper {
        width: 140px;
      }

      .user-content-bottom {
        width: 190px;
      }
    }
  `,
};
