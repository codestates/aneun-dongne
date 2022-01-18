import styled from "styled-components";

export const Styled = {
  Lists: styled.div`
    display: flex;
    justify-content: center;
  `,

  PlaceCard: styled.div`
    margin-top: 40px;
    border: 3px #3a6fb0 solid;
    border-radius: 20px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease;
    }

    .place-cards {
      display: flex;
      background-color: white;
    }

    .place-cards > img {
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
    }

    .place-cards-title {
      margin-left: 10px;
      margin-top: 6px;
    }

    @media screen and (min-width: 320px) {
      font-size: 0.8rem;
      max-width: 80%;
      max-height: 100%;

      .place-cards > img {
        max-width: 80%;
        max-height: 80%;
      }

      .place-cards > .not-img {
        max-width: 53%;
        max-height: 80%;
      }
    }

    @media screen and (min-width: 412px) {
      font-size: 1rem;
    }

    @media screen and (min-width: 1400px) {
      max-height: 70%;
      max-width: 80%;
    }

    @media screen and (min-width: 1600px) {
      max-height: 80%;
      max-width: 80%;
    }
  `,

  KeyWordBox: styled.div`
    display: flex;
    justify-content: center;
    height: 30px;
    margin-left: 2rem;
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
    display: flex;
    justify-content: center;
    border: 2px red solid;
    border-radius: 20px;
    color: red;
    font-weight: bold;
    cursor: pointer;
    transition: transform 0.1s ease-in-out;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
    margin-top: 10px;

    @media screen and (min-width: 320px) {
      max-width: 20%;
      max-height: 40%;
    }

    @media screen and (min-width: 520px) {
      max-width: 30%;
    }

    @media screen and (min-width: 820px) {
      max-width: 20%;
    }

    @media screen and (min-width: 1024px) {
      max-width: 30%;
    }

    @media screen and (min-width: 1450px) {
      max-width: 26%;
    }

    i {
      color: red;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 2px;
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
