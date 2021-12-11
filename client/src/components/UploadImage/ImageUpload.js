import React, { useRef } from "react";

import "./imageUpload.css";

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
        <div
          className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(placeImage)}')` }}
        ></div>
      ) : (
        <div className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></div>
      )}
      <span>
        <i className="fas fa-edit" onClick={(e) => inputBtn(e, inputValue)}></i>
      </span>
    </div>
  );
}

export default ImageUpload;
