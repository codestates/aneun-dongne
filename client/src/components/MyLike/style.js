import styled from "styled-components";

export const Styled = {
  Lists: styled.div`
    padding: 0px 10px;
  `,

  PlaceCard: styled.div`
    margin-top: 40px;
    border: 3px #3a6fb0 solid;
    border-radius: 20px;
    width: 300px;

    &:hover {
      transform: scale(1.1);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .place-cards {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      background-color: white;
      border-radius: 20px;
    }

    .place-cards > img {
      width: 80%;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
    }

    .place-cards-title {
      margin-left: 10px;
      margin-top: 6px;
    }

    @media screen and (max-width: 1400px) {
      width: 250px;
      height: 330px;
      .place-cards > img {
        height: 150px;
      }
    }

    @media screen and (max-width: 710px) {
      width: 220px;
      height: 320px;
      .place-cards > img {
        height: 150px;
      }
    }

    @media screen and (max-width: 560px) {
      width: 190px;
      height: 290px;
      .place-cards > img {
        height: 120px;
      }
    }

    @media screen and (max-width: 400px) {
      font-size: 0.7rem;
      width: 150px;
      height: 240px;
      .place-cards > img {
        height: 100px;
      }
    }
  `,

  KeyWordBox: styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 5px 0px;
  `,

  KeyWord: styled.span`
    width: 120px;
    color: #3a6fb0;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      color: #2f4d6f;
    }
  `,

  LikeBtn: styled.div`
    border: 1px red solid;
    border-radius: 20px;
    color: red;
    font-weight: bolder;
    width: 80px;
    height: 40px;
    margin: 20px auto;
    cursor: pointer;
    text-justify: center;
    flex-direction: row-reverse;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.1s ease-in-out;
    i {
      color: red;

      justify-content: center;
      margin-left: 25px;
      margin-right: 3px;
      margin-top: 10px;
    }
    &:hover {
      color: red;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }

    &:active {
      transform: scale(1.3);
    }

    @media screen and (max-width: 400px) {
      width: 70px;
      height: 30px;
    }
  `,

  TopButton: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 40px;
    right: 40px;
    cursor: pointer;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background-color: #b2e0f4;
    color: white;
    transition: all 0.3s;

    :hover {
      background-color: #9cb1e0;
      transition: all 0.3s;
    }
  `,
};
