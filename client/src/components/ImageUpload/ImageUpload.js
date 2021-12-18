import React, { useRef } from "react";
import { Styled } from "./style";

function ImageUpload({ placeImage, setPlaceImage }) {
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

  return (
    <Styled.ImageUploadBox>
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setPlaceImage)}
      />

      {placeImage ? (
        <Styled.ImgDiv
          className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(placeImage)}')` }}
        ></Styled.ImgDiv>
      ) : (
        <Styled.ImgDiv className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></Styled.ImgDiv>
      )}
      <Styled.EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </Styled.EditProfile>
    </Styled.ImageUploadBox>
  );
}

export default React.memo(ImageUpload);
