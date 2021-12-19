import styled from "styled-components";
export const Styled = {
  ImageUploadBox: styled.div`
    width: 100%;
    height: 100%;
    text-align: center;
    flex-direction: column;
    .input-blind {
      display: none;
    }
  `,
  ImgDiv: styled.div`
    background: ${(props) => `url(${props.photo})`} center;

    background-size: cover;
    display: flex;
    margin-top: 50px;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    width: 400px;
    height: 200px;
    cursor: pointer;

    z-index: 999;

    @media screen and (max-height: 900px) {
      margin-top: 10px;
      height: 120px;
      width: 300px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 10px;
      height: 120px;
      width: 300px;
    }
  `,
  EditProfile: styled.div`
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
  `,
};
