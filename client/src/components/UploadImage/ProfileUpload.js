import React, { useRef, useState, useEffect } from "react";
// import hamtori from "../../img/hamtori.png";
// import "./profileUpload.css";
import { Styled } from "./style";

function ProfileUpload({ imgUrl, setImgUrl }) {
  useEffect(() => {
    //언마운트시 메모리 누수 제거하기
    return () => window.URL.revokeObjectURL(imgUrl);
  }, []);
  const inputValue = useRef(null);
  // const [img, setImg] = useState(""); //이 컴퍼넌트안에서만 사용하는 이미지.
  // const [pending, setPending] = useState(false);
  function inputFileHandler(inputValue, setImgUrl) {
    const image = inputValue.current.files;
    setImgUrl(image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
    // setPending(true);
    inputValue.current.click();
  }

  return (
    <Styled.ImageUploadBox>
      <input
        name="image"
        className="input-blind"
        ref={inputValue}
        type="file"
        onChange={(e) => inputFileHandler(inputValue, setImgUrl)}
      />
      {/* imgUrl에 데이터일때, 파일일때 */}
      {typeof imgUrl === "object" ? (
        <Styled.ImgDiv
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url('${URL.createObjectURL(imgUrl)}')` }}
        ></Styled.ImgDiv>
      ) : (
        <Styled.ImgDiv
          // photo={imgUrl || hamtori}
          onClick={(e) => inputBtn(e, inputValue)}
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></Styled.ImgDiv>
      )}

      <Styled.EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit"></i>
      </Styled.EditProfile>
    </Styled.ImageUploadBox>
  );
}

export default React.memo(ProfileUpload);
