import React, { useRef } from "react";
import styled from "styled-components";
import "./imageUpload.css";

const ImgDiv = styled.div`
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
  border: 1px gray solid;
  /* border-radius: 70%; */
  z-index: 999;
`;
const EditProfile = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
`;

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
    <div className="image-upload-box">
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setPlaceImage)}
      />

      {placeImage ? (
        <ImgDiv
          className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(placeImage)}')` }}
        ></ImgDiv>
      ) : (
        <ImgDiv className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></ImgDiv>
      )}
      <EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </EditProfile>
    </div>
  );
}

export default ImageUpload;
