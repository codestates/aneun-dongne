import React, { useState, useEffect } from "react";
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
  const [placeImage, setPlaceImage] = useState("");
  const [isUploaded, setIsUploaded] = useState(false);
  const [clickedBtn, setClickedBtn] = useState(false); //저장버튼 누른 후 인지 아닌지 확인하려는 용도
  const [errorMessage, setErrorMessage] = useState({
    image: "",
    memo: "",
  });

  function saveImage(e) {
    e.preventDefault();

    const formData = new FormData();
    console.log("저장버튼 들어간다.", e);
    //form-data 객체의 기존 키에 새 값을 추가하거나 키가 없으면 키를 추가한다.
    formData.append("image", placeImage);

    //서버로 axios 들어간다
    // axios
    //   .post(`endpoint/이미지업로드`, formData)
    //   .then((res) => {
    //     setIsUploaded(true);
    //   })
    //   .catch((err) => {
    //     setClickedBtn(true);
    //     setIsUploaded(false);
    //     console.log(err);
    //     if (!isUploaded && clickedBtn) {
    //       setErrorMessage({ ...errorMessage, ...{image: "이미지업로드 실패"} });
    //      }

    //   });
  }
  console.log(isUploaded && clickedBtn);
  useEffect(() => {
    //onClick으로 하니까 필요없으려나?? 우선 납둬봐
  }, [isUploaded]);

  console.log(isSavePositionOpen);
  return (
    <>
      <Styled.FormContainer>
        <Styled.CloseBtn onClick={() => setIsSavePositionOpen(false)}>
          <span>
            <i className="fas fa-times"></i>
          </span>
        </Styled.CloseBtn>
        <form
          onSubmit={(e) => {
            saveImage(e);
          }}
        >
          <h3>이미지</h3>
          <ImageUpload placeImage={placeImage} setPlaceImage={setPlaceImage} />
          <div className="alert-box">{errorMessage.image}</div>
          {/* //! 업로드버튼 하나 없애 form 두개 못하겠다 */}
          {/* <button type="submit" className="image-upload-button" onClick={saveImage}>
            업로드
          </button>
        </form>
        <form> */}
          <div className="form-memo">
            <h3>메모</h3>
            {/* <label htmlFor="memo">메모</label> */}
            <input id="memo" />
          </div>
          <div className="alert-box">{errorMessage.memo}</div>
          <button type="submit" onClick={saveImage} className="save-position-button">
            저장
          </button>
        </form>
      </Styled.FormContainer>
    </>
  );
};

export default ModalSavePosition;
