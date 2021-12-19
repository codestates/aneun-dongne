import React, { useRef, useEffect } from "react";

import { Styled } from "./style";

function ProfileUpload({ imgUrl, setImgUrl }) {
  useEffect(() => {
    //언마운트시 메모리 누수 제거하기
    return () => window.URL.revokeObjectURL(imgUrl);
  }, []);
  const inputValue = useRef(null);
  function inputFileHandler(inputValue, setImgUrl) {
    const image = inputValue.current.files;
    setImgUrl(image[0]);
  }

  function inputBtn(e, inputValue) {
    e.preventDefault();
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

export default React.memo(ProfileUpload, (prev, next) => {
  return prev.imgUrl === next.imgUrl;
});
