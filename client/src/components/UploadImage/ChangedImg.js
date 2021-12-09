import React, { useRef, useState, useEffect } from "react";
import hamtori from "../../img/hamtori.png";
import "./profileUpload.css";
import styled from "styled-components";

const ImgDiv = styled.div`
  background: ${(props) => `url(${props.photo})` || `url(${hamtori})`} center;
  background-size: cover;
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 70%;
  z-index: 999;
`;
const EditProfile = styled.div`
  cursor: pointer;
  display: inline-block;
  margin-top: 10px;
`;

function ChangedImg({ imgUrl, setImgUrl }) {
  const inputValue = useRef(null);
  const [img, setImg] = useState(""); //이 컴퍼넌트안에서만 사용하는 이미지.
  const [pending, setPending] = useState(false);
  function inputFileHandler(inputValue, setImgUrl) {
    const image = inputValue.current.files;
    setImg(image[0]);
    console.log(image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    setPending(true);
    console.log("hi");
    inputValue.current.click();
  }

  // function inputImageHandler(){
  //     const image = imgUrl.current.files
  // }

  //프사없을시 랜덤프사

  return (
    <div className="profile-upload-box">
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, img)}
      />
      {/* imgUrl에 데이터일때, 파일일때 */}

      <ImgDiv
        photo={imgUrl ? imgUrl : hamtori}
        onClick={(e) => inputBtn(e, inputValue)}
        //   style={{ backgroundImage: `url(${profile})` }}
      ></ImgDiv>

      <EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </EditProfile>
    </div>
  );
}

export default ChangedImg;
