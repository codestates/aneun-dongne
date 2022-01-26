import styled from "styled-components";

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    @media (max-width: 1200px) {
      width: 600px;
    }
    @media (max-width: 750px) {
      width: 90%;
    }
    @media (max-width: 700px) {
      width: 90%;
    }
  `,

  CommentWrapper: styled.div`
    position: relative;
    width: 100%;
    height: auto;
    border-radius: 20px;
    margin-bottom: 5%;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.1s ease-in-out;
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.02);
    }
    &:hover:after {
      left: 0;
      width: auto;
    }
  `,

  Comment: styled.div`
    position: relative;
    display: grid;
    width: 100%;
    height: auto;
    grid-template-columns: 1fr 3fr 0.5fr;
    border-radius: 20px;
    @media (max-width: 500px) {
      grid-template-columns: 1fr 3fr 0.8fr;
    }
  `,

  Date: styled.div`
    position: absolute;
    bottom: 5%;
    right: 5%;
    color: gray;
    font-size: 0.8rem;
  `,

  ProfileBox: styled.form`
    position: relative;
    width: 70%;
    height: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20%;
    margin-bottom: auto;
    @media (max-width: 768px) {
      width: 70%;
      height: 50%;
    }
    @media (max-width: 640px) {
      width: 75%;
      height: 45%;
    }
    @media (max-width: 535px) {
      width: 80%;
      height: 40%;
    }
    @media (max-width: 470px) {
      width: 80%;
      height: 40%;
    }
    @media (max-width: 360px) {
      width: 80%;
      height: 40%;
    }
  `,

  Profile: styled.div`
    position: relative;
    display: grid;
    grid-template-rows: 1fr 1fr;
    margin-left: auto;
    margin-right: auto;
    height: auto;
  `,

  ProfileImgBox: styled.div`
    width: 50%;
    height: 0;
    padding-top: 50%;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    margin-top: auto;
    margin-bottom: auto;
  `,

  ProfileImg: styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
  `,

  NickName: styled.div`
    position: relative;
    font-size: 0.8rem;
    text-align: center;
  `,

  ContentBox: styled.form`
    position: relative;
    display: grid;
    grid-template-rows: auto auto;
    width: auto;
    height: auto;
    padding-top: 5%;
    padding-bottom: 10%;
    @media (max-width: 535px) {
      padding-bottom: 15%;
    }
  `,

  Content: styled.div`
    flex-wrap: wrap;
    position: relative;
    width: auto;
    height: auto;
    padding: 1%;
    font-size: 0.8rem;
    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
    @media (max-width: 640px) {
      font-size: 0.8rem;
    }
  `,

  ContentInput: styled.textarea`
    width: 100%;
    height: 80px;
    @media (max-width: 535px) {
      height: 50px;
    }
  `,

  ContentWrapper: styled.div`
    position: relative;
    width: auto;
    height: auto;
    cursor: pointer;
  `,

  UserLocationWrapper: styled.div`
    width: auto;
    height: auto;
    font-size: 0.8rem;
  `,

  HashTagWrapper: styled.div`
    width: 100%;
    height: auto;
    border-radius: 6px;
    // border: 1px gray solid;
  `,

  BtnBox: styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15%;
    margin-bottom: 15%;
    @media (max-width: 470px) {
      width: 60%;
    }
  `,

  BtnWrapper: styled.div`
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 150%;
    margin-left: auto;
    margin-right: auto;
    @media (max-width: 520px) {
      padding-top: 250%;
    }
  `,
  ContentInput: styled.textarea`
    width: 100%;

    height: 80px;
  `,
  BtnOne: styled.div`
    position: absolute;
    top: 0;
    height: 33.33%;
    width: 100%;
    .delete-button {
      cursor: pointer;
      color: gray;
    }
      @media (max-width: 600px) {
        font-size: 0.7rem;
      }
      @media (max-width: 520px) {
        font-size: 0.7rem;
        padding-right: 20%;
        padding-left: 20%;
        height: 120%;
      }
      @media (max-width: 360px) {
        font-size: 0.7rem;
        padding-right: 15%;
        padding-left: 15%;
        height: 120%;
      }
    }
  `,

  BtnTwo: styled.div`
    position: absolute;
    bottom: 0;
    height: 33.33%;
    width: 100%;
    margin-bottom: 40%;
    > button {
      cursor: pointer;
      font-size: 0.8rem;
      padding-top: 12%;
      padding-bottom: 12%;
      padding-right: 12%;
      padding-left: 12%;
      text-align: center;
      position: relative;
      color: #ffffff;
      height: 100%;
      width: 100%;
      border: none;
      border-radius: 20px;
      background-color: #3a6fb0;
      :hover {
        background-color: #2f4d6f;
        transition: all 0.5s ease;
        border-radius: 20px;
        // transform: scale(1.1);
      }
      :active {
        // transform: scale(1.1);
      }
      @media (max-width: 600px) {
        font-size: 0.7rem;
      }
      @media (max-width: 520px) {
        font-size: 0.7rem;
        padding-right: 20%;
        padding-left: 20%;
        height: 120%;
      }
      @media (max-width: 360px) {
        font-size: 0.7rem;
        padding-right: 15%;
        padding-left: 15%;
        height: 120%;
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

// Comment: styled.div`
// display: flex;
// border: 1px gray solid;
// border-radius: 10px;
// margin: 1% 1%;
// margin-right: auto;
// margin-left: auto;
// &:hover {
//   box-shadow: 1px 1px 3px black;
// }

// .user-container {
//   display: grid;
//   margin: 1% 0px;
// }

// .user-info-wrapper {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin: 6% 0px;
// }

// .user-image {
//   border-radius: 100%;
//   object-fit: cover;
// }

// .user-name {
//   margin-top: 3%;
// }

// .user-content-wrapper {
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   line-height: 26px;
// }

// .user-content {
//   cursor: pointer;
// }

// .user-hastag-wrapper {
//   padding: 1% 0%;
// }

// .user-hastag {
//   padding-right: 1%;
//   color: #162b71;
// }

// .user-location {
//   color: gray;
// }

// .user-place {
//   margin-left: 5px;
//   cursor: pointer;
// }

// .created-date {
//   color: gray;
// }

// .side {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin: 15px;
//   width: 35px;
//   height: 35px;
//   border-radius: 15px;
//   &:hover {
//     background-color: #eee;
//   }
// }

// .delete-button {
//   color: gray;
//   cursor: pointer;
// }

// @media screen and (min-width: 320px) {
//   max-width: 90%;
//   font-size: 0.8rem;

//   .user-container {
//     grid-template-columns: 1fr 3fr;
//   }

//   .user-image {
//     max-width: 55%;
//   }

//   .user-content-bottom {
//     display: flex;
//     flex-direction: column;
//   }

//   .user-content {
//     cursor: pointer;
//     min-width: 10rem;
//   }
// }

// @media screen and (min-width: 412px) {
//   font-size: 0.9rem;
// }

// @media screen and (min-width: 1024px) {
//   font-size: 1rem;
//   max-width: 80%;

//   .user-container {
//     grid-template-columns: 1fr 6fr;
//   }
// }
// `,

// ModalContainer: styled.div`
// position: relative;
// `,

// ModalBackdrop: styled.div`
// position: fixed;
// top: 0;
// left: 0;
// display: flex;
// justify-content: center;
// backdrop-filter: contrast(90%);
// align-items: center;
// width: 100vw;
// height: 100vh;
// z-index: 1000;
// `,
// ModalView: styled.div`
// position: fixed;
// background-color: white;
// width: 400px;
// height: 250px;
// z-index: 2;
// border: 1px solid white;
// border-radius: 20px;

// @media screen and (max-height: 900px) {
//   width: 350px;
//   height: 200px;
// }

// @media screen and (max-width: 500px) {
//   width: 350px;
//   height: 200px;
// }
// `,
