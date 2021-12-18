import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    width: auto;
    // margin-left: auto;
    // margin-right: auto;
    > .hide {
      display: none;
    }
  `,
  Img: styled.img`
    /* border: 1px red solid; */
    width: 100%;
    height: auto;
    margin-left: auto;
    // margin-right: auto;
    margin-bottom: 5%;
    border-radius: 10px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    // text-decoration: inherit;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    // @media (max-width: 768px) {
    //   width: 80%;
    //   height: 406px;
    //   margin-left: 40px;
    //   margin-right: auto;
    //   /* margin-left: 10px; */
    // }
    // @media (max-width: 612px) {
    //   width: 450px;
    //   margin-left: 20px;
    //   margin-right: auto;
    //   /* margin-left: 10px; */
    // }
  `,

  Title: styled.h2`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10%;
    margin-top: 10%;
    padding: 10px;
    color: skyblue;
  `,
  PageURL: styled.a`
    margin-left: auto;
    margin-right: 10px;
    margin-bottom: 3%;
    text-decoration: none;
    color: black;
    cursor: pointer;
    /* border: 1px gray solid; */
    /* box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s; */
    padding: 10px;
    text-decoration: inherit;
  `,

  Overview: styled.span`
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 5%;
    line-height: 30px;
    border: 1px #3a6fb0 solid;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: box-shadow 0.1s, transform 0.1s;
    text-decoration: inherit;
    &:hover {
      transform: scale(1.05);
      box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
        4px 4px 5px 0px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
    }
    > .hide {
      display: none;
    }
    // @media (max-width: 768px) {
    //   width: 80%;
    //   /* height: 406px; */
    //   margin-left: 40px;
    //   margin-right: auto;
    //   /* margin-left: 10px; */
    // }
    // @media (max-width: 612px) {
    //   width: 450px;
    //   margin-left: 20px;
    //   margin-right: auto;
    //   /* margin-left: 10px; */
    // }
  `,
  ReadMoreBtn: styled.button`
    border: none;
    background: transparent;
    width: 50px;
    margin-bottom: 1rem;
    cursor: pointer;
  `,
  CutDownBtn: styled.button`
    border: none;
    background: transparent;
    width: 50px;
    margin-bottom: 1rem;
    cursor: pointer;
  `,
  LikeBtn: styled.button`
    border: 1px red solid;
    border-radius: 20px;
    width: 60px;
    height: 30px;
    margin: 40px auto;
    cursor: pointer;
    box-shadow: 4px 4px 4px rgb(85, 85, 85);
    transition: all 0.3s ease-in-out;
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
  Wrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    width: 700px;
    @media (max-width: 750px) {
      width: 90%;
      /* height: 406px; */
      margin-left: auto;
      margin-right: auto;
    }
    @media (max-width: 320px) {
      width: 90%;
      /* width: 450px; */
      margin-left: auto;
      margin-right: auto;
    }
  `,
};
