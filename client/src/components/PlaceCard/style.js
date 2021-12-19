import styled from "styled-components";

export const Styled = {
  PlaceCard: styled.div`
    margin: auto;
    margin-top: 40px;
    border: 3px #3a6fb0 solid;

    justify-content: center;
    border-radius: 20px;
    width: 300px;

    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;

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
      width: 100%;
    }
    .place-cards > img {
      width: 80%;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      margin-top: 20px;
      margin-bottom: 10px;

      border-radius: 20px;

      /* object-fit: scale-down; */
    }
    .place-cards-title {
      margin-left: 10px;
      margin-top: 6px;
    }
    @media (max-width: 1023px) {
      width: 300px;
    }
    @media (max-width: 660px) {
      width: 80%;
      /* height: 300px; */
    }
  `,
  LikeBtn: styled.button`
    border: 1px red solid;
    border-radius: 20px;
    /* background: white; */
    width: 60px;
    height: 30px;
    margin: 20px auto;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.1s ease-in-out;

    &:hover {
      color: black;
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transform: scale(1.1);
    }
    &:hover:after {
      left: 0;
      width: 100%;
    }

    &:active {
      transform: scale(1.5);
    }
    .fa-heart {
      color: red;
    }
  `,

  Tags: styled.div`
    display: flex;
    // flex: 1;
    max-width: 400px;
    font-size: 1rem;
    color: #3a6fb0;
    margin-left: 40px;
    margin-top: 10px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,

  Tag: styled.div`
    // display: flex;
    // flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-right: 10px;
    overflow: hidden;
  `,
};
