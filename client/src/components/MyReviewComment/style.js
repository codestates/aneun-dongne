import styled from "styled-components";

export const Styled = {
  Comment: styled.div`
    display: flex;
    border: 1px gray solid;
    border-radius: 10px;
    margin: 20px 20px;
    margin-right: auto;
    margin-left: auto;
    &:hover {
      box-shadow: 1px 1px 3px black;
    }

    .user-container {
      display: flex;
      margin: 10px 0px 0px 15px;
    }

    .user-image {
      border-radius: 100%;
      object-fit: cover;
    }

    .user-content-wrapper {
      /* margin-left: 30px; */
      /* margin-bottom: -100px; */
      line-height: 26px;
      /* width: 500px; */
    }

    .user-content {
      cursor: pointer;
      /* width: 500px; */
    }

    .user-hastag-wrapper {
      /* width: 500px; */
    }

    .user-hastag {
      /* padding: 0px 4px; */
      color: #162b71;
    }

    .user-content-bottom {
      /* justify-content: space-between; */
      /* width: 550px; */
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

      .user-image {
        max-width: 55%;
        /* max-height: 55%; */
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
