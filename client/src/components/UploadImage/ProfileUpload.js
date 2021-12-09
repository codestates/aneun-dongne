import React, { useRef, useState, useEffect } from "react";
import hamtori from "../../img/hamtori.png";
import "./profileUpload.css";
import styled from "styled-components";

const ImgDiv = styled.div`
  background: ${(props) => `url(${props.photo})`} center;
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

function ProfileUpload({ imgUrl, setImgUrl }) {
  useEffect(() => {
    window.URL.revokeObjectURL(imgUrl);
  }, []); //url사용후 메모리 누수 제거하기
  const inputValue = useRef(null);
  // const [img, setImg] = useState(""); //이 컴퍼넌트안에서만 사용하는 이미지.
  // const [pending, setPending] = useState(false);
  function inputFileHandler(inputValue, setImgUrl) {
    const image = inputValue.current.files;
    console.log(image);
    setImgUrl(image[0]);
    console.log(typeof image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    // setPending(true);
    console.log("hi");
    inputValue.current.click();
  }

  // function inputImageHandler(){
  //     const image = imgUrl.current.files
  // }
  console.log(typeof imgUrl);
  console.log(imgUrl);
  return (
    <div className="profile-upload-box">
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setImgUrl)}
      />
      {/* imgUrl에 데이터일때, 파일일때 */}
      {typeof imgUrl === "object" ? (
        <ImgDiv
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(imgUrl)}')` }}
        ></ImgDiv>
      ) : (
        <ImgDiv
          // photo={imgUrl || hamtori}
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></ImgDiv>
      )}

      {/* {imgUrl ? (
        <ImgDiv
          className="img_preview"
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(imgUrl)}')` }}
        ></ImgDiv>
      ) : (
        <ImgDiv className="img_preview" onClick={(e) => inputBtn(e, inputValue)}></ImgDiv>
      )} */}
      <EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </EditProfile>
    </div>
  );
}

export default ProfileUpload;
