import React, { useRef, useEffect } from "react";
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
  /* border-radius: 70%; */

  z-index: 999;
`;
const EditProfile = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
`;
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
    <div className="image-upload-box">
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setPlaceImage)}
      />

      {typeof placeImage === "object" ? (
        <ImgDiv
          // className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(placeImage)}')` }}
        ></ImgDiv>
      ) : (
        <ImgDiv
          className="good"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url(${placeImage})` }}
        ></ImgDiv>
      )}
      <EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </EditProfile>
    </div>
  );
}

export default VisitedUpload;
