import styled from "styled-components";

export const Styled = {
  Comment: styled.div`
    display: flex;
    border: 1px gray solid;
    border-radius: 10px;
    margin: 1% 1%;
    margin-right: auto;
    margin-left: auto;
    &:hover {
      box-shadow: 1px 1px 3px black;
    }

    .user-container {
      display: grid;
      margin: 1% 0px;
    }

    .user-info-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 6% 0px;
    }

    .user-image {
      border-radius: 100%;
      object-fit: cover;
    }

    .user-name {
      margin-top: 3%;
    }

    .user-content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      line-height: 26px;
    }

    .user-content {
      cursor: pointer;
    }

    .user-hastag-wrapper {
      padding: 1% 0%;
    }

    .user-hastag {
      padding-right: 1%;
      color: #162b71;
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
      width: 35px;
      height: 35px;
      border-radius: 15px;
      &:hover {
        background-color: #eee;
      }
    }

    .delete-button {
      color: gray;
      cursor: pointer;
    }

    @media screen and (min-width: 320px) {
      max-width: 90%;
      font-size: 0.8rem;

      .user-container {
        grid-template-columns: 1fr 3fr;
      }

      .user-image {
        max-width: 55%;
      }

      .user-content-bottom {
        display: flex;
        flex-direction: column;
      }

      .user-content {
        cursor: pointer;
        min-width: 10rem;
      }
    }

    @media screen and (min-width: 412px) {
      font-size: 0.9rem;
    }

    @media screen and (min-width: 1024px) {
      font-size: 1rem;
      max-width: 80%;

      .user-container {
        grid-template-columns: 1fr 6fr;
      }
    }
  `,

  ModalContainer: styled.div`
    position: relative;
  `,

  ModalBackdrop: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    backdrop-filter: contrast(90%);
    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  `,
  ModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 400px;
    height: 250px;
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;

    @media screen and (max-height: 900px) {
      width: 350px;
      height: 200px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
      height: 200px;
    }
  `,
};
