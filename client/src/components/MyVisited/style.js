import styled from "styled-components";

export const Styled = {
  Body: styled.div``,

  Div: styled.div`
    /* background: red; */
    margin-left: 20px;
    position: relative;
    width: 500px;
    margin-top: 30px;
    margin-bottom: 50px;
    margin-left: auto;
    margin-right: auto;
    padding: 10px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    border: 1px rgb(192, 251, 255) solid;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
  `,
  Map: styled.div`
    width: 480px;
    height: 300px;
    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;
    /* margin: auto; */
    margin-bottom: 1rem;
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
    backdrop-filter: contrast(50%);
    /* backdrop-filter: brightness(50%); */

    align-items: center;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
  `,
  ModalView: styled.div`
    position: fixed;
    background-color: white;
    width: 450px;
    height: 650px;
    z-index: 2;
    border: 1px solid white;
    border-radius: 20px;
  `,
};
