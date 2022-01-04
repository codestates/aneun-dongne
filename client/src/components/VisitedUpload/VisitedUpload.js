import React, { useRef, useEffect } from "react";
import { Styled } from "./style";

function VisitedUpload({ placeImage, setPlaceImage }) {
  useEffect(() => {
    //언마운트시 메모리 누수 제거하기
    return () => window.URL.revokeObjectURL(placeImage);
  }, []);
  const inputValue = useRef(null);

  function inputFileHandler(inputValue, setPlaceImage) {
    const image = inputValue.current.files;
    setPlaceImage(image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    inputValue.current.click();
  }

  return (
    <Styled.ImageUploadBox className="image-upload-box">
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setPlaceImage)}
      />

      {typeof placeImage === "object" ? (
        <Styled.ImgDiv onClick={(e) => inputBtn(e, inputValue)}>
          <img src={URL.createObjectURL(placeImage)} />
        </Styled.ImgDiv>
      ) : (
        <Styled.ImgDiv onClick={(e) => inputBtn(e, inputValue)}>
          <img src={placeImage} />
        </Styled.ImgDiv>
      )}
      <Styled.EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </Styled.EditProfile>
    </Styled.ImageUploadBox>
  );
}

export default VisitedUpload;
