import React, { useRef } from "react";

import "./imageUpload.css";

function ImageUpload({ signUpImage, setSignUpImage }) {
  const inputValue = useRef(null);

  function inputFileHandler(inputValue, setSignUpImage) {
    const image = inputValue.current.files;
    setSignUpImage(image[0]);
    console.log(signUpImage);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    inputValue.current.click();
  }

  // function inputImageHandler(){
  //     const image = signUpImage.current.files
  // }

  return (
    <div className="image-upload-box">
      <p>이미지</p>
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setSignUpImage)}
      />
      {signUpImage ? (
        <div
          className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(signUpImage)}')` }}
        ></div>
      ) : (
        <div className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></div>
      )}
    </div>
  );
}

export default ImageUpload;
