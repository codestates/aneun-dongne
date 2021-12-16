import styled from "styled-components";

export const Styled = {
  UserInfopage: styled.div`
  top: 0,
  /* background: red, */
  margin-left: auto,
  margin-right: auto,
  /* width: 100%, */
  /* width: 100%, */
  /* height: 100%, */
  /* border: 1px gray solid, */

  /* background-color: yellowgreen, */
  display: flex,
  justify-content: center,
`,
  View: styled.div`
  margin-top: 40px,
  margin-left: 20px,

  width: 500px,

  border-radius: 10px,
  display: flex,
  flex-direction: column,
  align-self: center,

  /* background: yellow, */
`,

  // export  ProfileImg : styled.img`
  //   margin: 30px,
  //   width: 170px,
  //   height: 170px,
  //   border-radius: 100%,
  //   cursor: pointer,
  // `,
  ContentBox: styled.div`
  /* margin: 40px 100px 0 0, */
  /* margin-left: 10%, */
  /* background: red, */
  width: 100%,
  margin-top: 30px,
  /* display: flex, */
  /* flex-direction: column, */

  > form {
    display: flex,
    flex-direction: column,
  }
  > form button {
    width: 80px,
    border: none,
    height: 40px,
    /* background-color: #8ea1da, */
    /* background: purple, */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    ),
    transition: all 0.5s ease,
    border-radius: 20px,
  }
  > form .userinfo-each-label {
    /* background: skyblue, */
    margin: 23px auto,

    position: relative,
  }
  > form .userinfo-each-label span {
    /* float: left, */
  }
  > form .userinfo-each-label input,
  form .userinfo-each-label div {
    /* background: yellow, */

    font-size: 1.2rem,
    width: 300px,
    border-left: none,
    border-right: none,
    border-top: none,
    padding-left: 10px,
    padding-right: 10px,
    border-radius: 20px,
    /* border: 1px gray solid, */
    /* position: absolute, */
    /* float: right, */
  }
  form .userinfo-button-label {
    /* background: blue, */
    display: flex,
    justify-content: center,
  }
  > form .userinfo-button-label .btn-edit {
    margin: 20px,
    width: 80px,
    border: 1px gray solid,
    height: 40px,
    /* background-color: #8ea1da, */
    /* background: purple, */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    ),
    transition: all 0.5s ease,
    border-radius: 20px,
  }

  button:hover {
    transform: scale(1.1),
  }

  button:active {
    transform: scale(1.1),
  }
  form .userinfo-button-label .btn-exit {
    margin: 20px,
    width: 80px,
    border: 1px gray solid,
    height: 40px,
    /* background-color: #8ea1da, */
    /* background: purple, */
    background-image: linear-gradient(
      to right bottom,
      rgba(255, 255, 255, 0.9) 0,
      rgba(0, 0, 0, 0) 60%,
      rgba(0, 0, 0, 0) 100%
    ),
    transition: all 0.5s ease,
    border-radius: 20px,
  }
  .btn-exit:hover {
    transform: scale(1.1),
  }
`,

  ImgDiv: styled.div`
  width: 200px,
  height: 200px,
  margin: 10px auto,
`,
};
