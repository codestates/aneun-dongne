import styled from "styled-components";

export const Styled = {
  Div: styled.div`
<<<<<<< HEAD
    /* position: fixed; */
    /* top: 200px; */
=======
    z-index: -8;
    /* border: 1px gray solid; */
    position: fixed;
    left: 0;
>>>>>>> 3578960e3d76426118ac25c61c6f9cfa6846370a
    display: flex;
    flex-direction: column;
    background-color: white;

    padding-left: 45px;

    padding-bottom: 30px;
<<<<<<< HEAD

    width: 750px;

    border-bottom: 1px rgb(192, 251, 255) solid;
=======
    border-right: none;
    width: 100%;
    height: 80%;

    border-bottom: 1px skyblue solid;
    animation: color-change 6s infinite;
    @keyframes color-change {
      0% {
        border: #fafabe 1px solid;
        border-right: none;
      }
      50% {
        border: #96ffff 1px solid;
        border-right: none;
      }
      100% {
        border: #ebffeb 1px solid;
        border-right: none;
      }
    }
>>>>>>> 3578960e3d76426118ac25c61c6f9cfa6846370a
  `,
  Map: styled.div`
    margin-left: 10px;
    margin-top: 20px;
    border-radius: 10px;
<<<<<<< HEAD
    width: 700px;
    height: 400px;
=======
    width: 600px;
    height: 100%;
>>>>>>> 3578960e3d76426118ac25c61c6f9cfa6846370a
    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.05);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }
  `,
};
