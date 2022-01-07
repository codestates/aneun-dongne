import styled from "styled-components";
export const Styled = {
  ImageUploadBox: styled.div`
    text-align: center;
    .input-blind {
      display: none;
    }
  `,
  ImgDiv: styled.div`
    margin-top: 50px;
    width: 250px;
    height: 250px;
    cursor: pointer;
    z-index: 999;

    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @media screen and (max-height: 900px) {
      margin-top: 10px;
      height: 200px;
      width: 200px;
    }

    @media screen and (max-width: 500px) {
      margin-top: 10px;
      height: 200px;
      width: 200px;
    }
  `,
  EditProfile: styled.div`
    cursor: pointer;
    display: inline-block;
    margin-top: 10px;
  `,
};
