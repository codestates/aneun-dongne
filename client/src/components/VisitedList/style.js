import styled from "styled-components";

export const Styled = {
  PlaceCard: styled.div`
    margin: auto;
    margin-top: 40px;
    border: 1px rgb(107, 217, 224) solid;
    display: flex;
    flex-direction: row;
    border-radius: 20px;
    width: 250px;
    min-height: 200px;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;

    .place-cards {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      border-radius: 20px;
      width: 100%;
      margin: 10px;
    }
    .place-cards > img {
      width: 90%;
      height: 100px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 10px;

      border-radius: 20px;
    }
    .place-cards-title {
      margin-left: 10px;
      margin-top: 6px;
      .place-cards-memo {
        width: 90%;
        padding: 0 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    @media (max-width: 1000px) {
      margin: 0px;
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
    backdrop-filter: contrast(50%);
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

    @media screen and (max-height: 900px) {
      width: 350px;
      height: 520px;
    }

    @media screen and (max-width: 500px) {
      width: 350px;
      height: 520px;
    }
  `,

  Body: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 40px;
    text-decoration-line: none;
    margin-left: 30px;
    > .visited-cards-list {
      margin: 15px;
    }

    @media (max-width: 1000px) {
      margin: 0px;
      grid-column-gap: 0px;
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1025px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1360px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1730px) {
      grid-template-columns: repeat(4, 1fr);
    }
  `,
};
