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
    console.log(image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    inputValue.current.click();
  }

  // function inputImageHandler(){
  //     const image = placeImage.current.files
  // }
  console.log(placeImage);
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
        <Styled.ImgDiv
          // className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(placeImage)}')` }}
        ></Styled.ImgDiv>
      ) : (
        <Styled.ImgDiv
          className="good"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url(${placeImage})` }}
        ></Styled.ImgDiv>
      )}
      <Styled.EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </Styled.EditProfile>
    </Styled.ImageUploadBox>
  );
}

export default VisitedUpload;
