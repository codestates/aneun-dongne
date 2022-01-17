import styled from "styled-components";

export const Styled = {
  Lists: styled.div`
    padding: 0px 15px;
  `,

  PlaceCard: styled.div`
    margin-top: 40px;
    border: 3px #3a6fb0 solid;
    border-radius: 20px;
    width: 100%;
    height: auto;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.1);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
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
      width: 90%;
      height: auto;
      margin-left: auto;
      margin-right: auto;
      border-radius: 20px;
    }

    .place-cards-title {
      margin-left: 10px;
      margin-top: 6px;
    }
  `,

  KeyWordBox: styled.div`
    height: 30px;
    display: flex;
    justify-content: center;
    margin: 5px 0px;
  `,

  KeyWord: styled.span`
    width: 70%;
    color: #3a6fb0;
    cursor: pointer;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 25px;

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
    margin: 5px auto;
    cursor: pointer;
    text-justify: center;
    flex-direction: row-reverse;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: transform 0.1s ease-in-out;
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
