import styled from "styled-components";

export const Styled = {
  PlaceCard: styled.div`
    position: relative;

    /* min-height: 250px; */
    margin: 10px;
    padding: 10px;
    width: 200px;
    border: 1px #3a6fb0 solid;
    border-radius: 20px;

    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;

    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }

    .place-cards {
      /* height: 100%; */
      display: flex;
      position: relative;
      flex-direction: column;
      @media screen and (max-width: 880px) {
        font-size: 0.8rem;
      }
    }
    .place-cards > img {
      height: 150px;
      border-radius: 10px;
      @media screen and (max-width: 880px) {
        height: 100px;
      }
    }
    .place-cards-title {
      /* position: absolute; */
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      bottom: 10px;
      background: rgba(255, 255, 255, 0.7);
      &:hover {
        white-space: nowrap;

        text-overflow: ellipsis;
      }
    }
  `,
  LikeBtn: styled.button`
    /* position: absolute; */
    bottom: 10px;

    right: 10px;
    border: 1px red solid;
    border-radius: 20px;
    width: 50px;

    padding: 5px;
    /* background: white; */

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
    position: absolute;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 10px;
    max-width: 400px;
    font-size: 1rem;
    color: #3a6fb0;
    /* margin-left: 40px; */
    /* margin-top: 10px; */
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  `,

  Tag: styled.div`
    // display: flex;
    // flex: 1;
    white-space: nowrap;
    text-overflow: ellipsis;
    /* margin-right: 10px; */
    overflow: hidden;
  `,
};
