import React, { useState } from "react";
import axios from "axios";
import { useRecoilState } from "recoil";
import { isSavepositionOpen } from "../../recoil/recoil";
import { Styled } from "./style";
import { message } from "../../message";
import ImageUpload from "./ImageUpload";

const ModalSavePosition = () => {
  const [isSavePositionOpen, setIsSavePositionOpen] = useRecoilState(isSavepositionOpen);
  const [image, setImage] = useState(""); //전역으로 바꿀수도
  const [memo, setMemo] = useState(""); //마찬가지 전역으로 바꿀수도
  const [signUpImage, setSignUpImage] = useState("");
  const [errorMessage, setErrorMessage] = useState({
    image: "",
    memo: "",
  });

  function saveImage(e) {
    e.preventDefault();
  }

  return (
    <>
      <Styled.FormContainer>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Styled.CloseBtn className="close-btn" onClick={() => setIsSavePositionOpen(false)}>
            <span>
              <i className="fas fa-times"></i>
            </span>
          </Styled.CloseBtn>

          <ImageUpload signUpImage={signUpImage} setSignUpImage={setSignUpImage} />
          <div className="alert-box">{errorMessage.image}</div>

          <button type="submit" className="image-upload-button" onClick={saveImage}>
            업로드
          </button>
        </form>
        <form>
          <div className="form-memo">
            <label htmlFor="memo">메모</label>
            <input id="memo" />
          </div>
          <div className="alert-box">{errorMessage.memo}</div>
          <button type="submit" className="save-position-button">
            저장
          </button>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalSavePosition;
