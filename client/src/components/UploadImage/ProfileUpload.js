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
          //CSS 표현식 지양 : reflow 발생할때마다 JS표현식이 다시 계산되어 비용높은 코드가 되어버림.
          // style={{ backgroundImage: `url('${URL.createObjectURL(imgUrl)}')` }}
          photo={URL.createObjectURL(imgUrl)}
        ></Styled.ImgDiv>
      ) : (
        <Styled.ImgDiv
          onClick={(e) => inputBtn(e, inputValue)}
          photo={imgUrl}
          // style={{ backgroundImage: `url(${imgUrl})` }}
        ></Styled.ImgDiv>
      )}

      <Styled.EditProfile onClick={(e) => inputBtn(e, inputValue)}>
        <i className="fas fa-edit">이미지</i>
      </Styled.EditProfile>
    </Styled.ImageUploadBox>
  );
}
// export default ProfileUpload;
export default React.memo(ProfileUpload, (prev, next) => {
  return prev.imgUrl === next.imgUrl;
});
