import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    position: relative;
    width: 100%;
    height: auto:
    margin-top: 3%;
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
  Map: styled.div`
    width: 600px; //px로 할까요?? 작은모니터 큰모니터 생각하느라 괜히사소한거에 걱정되네요 ㅋㅋ
    height: 400px;
    border-radius: 10px;
    margin: auto;
    margin-bottom: 1rem;
    @media (max-width: 768px) {
      width: 80%;
      height: 300px;
      margin: auto;
      /* margin-left: 10px; */
    }
    @media (max-width: 612px) {
      /* width: 80%; */
      margin: auto;
      /* margin-left: 10px; */
    }
  `,
  Address: styled.div`
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 15px;
    /* background: red; */
    display: flex;
    flex-direction: column;
    align-self: center;
    > a {
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 3px;
    }
    > a img {
      width: 30px;
      height: 30px;
      text-decoration: none;
      color: black;
      border-radius: 10px;
      opacity: 0.8;
      &:hover {
        transform: scale(1.1);
        opacity: 1;
      }
    }
  `,
};
