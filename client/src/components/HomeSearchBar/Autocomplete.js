import { useState, useEffect } from "react";
import styled from "styled-components";

const deselectedOptions = [
  "rustic",
  "antique",
  "vinyl",
  "vintage",
  "refurbished",
  "신품",
  "빈티지",
  "중고A급",
  "중고B급",
  "골동품",
  "#산책하기좋은",
  "#산책하기좋은ㅁ",
  "#산책하기좋은ㄴㅇ",
  "#산책하기좋은ㅋㅌㅊ",
  "#산책하기좋ㅋㅌㅊ은",
  "#산책하ㅁㄴㅇ기좋은",
  "#산책ㅌㅊ하기좋은",
  "#산책하기ㅂ좋은",
  "#절",
  "#왕릉",
  "#공원",
  "#놀이공원",
  "#데이트",
  "#자전거코스",
  "#가을",
  "#미술관",
  "#박물관",
];

const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";

export const InputContainer = styled.div`
  @media (max-width: 1023px) {
    width: 98%;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
  }
  margin: 5px 2% 5px 2%;
  height: 40px;
  width: 140px;
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  border: none;
  position: relative;
  z-index: 999;
  border-radius: ${(props) => (props.hashtag ? activeBorderRadius : inactiveBorderRadius)};
  &:focus-within {
    box-shadow: ${boxShadow};
  }

  > input {
    @media (max-width: 1024px) {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    padding: 10px;
    width: 140px;
    /* flex: 1 0 0; */
    /* background-color: red; */
    /* border: none; */
    border-radius: 5px;
    /* margin: 0; */
    /* padding: 0; */
    border: 1px gray solid;
    /* font-size: 16px; */
  }

  /* > div.delete-button {
    background: red;

    cursor: pointer;
  } */
`;

export const DropDownContainer = styled.ul`
  position: relative;
  background-color: #ffffff;
  display: block;
  margin-left: auto;
  margin-right: auto;
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
  margin-top: -1px;
  padding: 0.5rem 0;
  /* border: 1px solid rgb(223, 225, 229); */
  border-radius: 0 0 1rem 1rem;
  box-shadow: ${boxShadow};
  z-index: 999;
  /* > li { */
  .hashtag-drop-down {
    z-index: 999;
    padding: 0 1rem;

    &:hover {
      background-color: #eee;
    }

    &.selected {
      background-color: #ebe5f9;
    }
  }
`;
const DropDownWrapper = styled.div`
  position: relative;
  z-index: 999;
  border-radius: 0 0 5px 5px;
  padding: 5px;
  background: white;
`;
const DropDownValue = styled.div`
  /* background: white; */
  position: relative;
  border-bottom: 1px gray solid;
  padding: 3px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`;

export const Autocomplete = ({ hashtag, setHashtag }) => {
  // const [hashtag, setHashtag] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);
  const [selected, setSelected] = useState(-1);

  useEffect(() => {
    if (inputValue === "") {
      setHashtag("null");
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHashtag(true) : setHashtag(false);

    // updateText
    setInputValue(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");
    const resultOptions = deselectedOptions.filter((option) => option.match(filterRegex));
    setOptions(resultOptions);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(clickedOption);
    console.log(clickedOption);

    const resultOptions = deselectedOptions.filter((option) => option === clickedOption);
    setOptions(resultOptions);
  };
  useEffect(() => {
    console.log(inputValue);
  }, [inputValue]);
  const handleDeleteButtonClick = () => {
    setInputValue("");
  };

  const handleKeyUp = (event) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState#example
    // eslint-disable-next-line
    if (
      event.getModifierState("Fn") ||
      event.getModifierState("Hyper") ||
      event.getModifierState("OS") ||
      event.getModifierState("Super") ||
      event.getModifierState("Win")
    )
      return;
    if (event.getModifierState("Control") + event.getModifierState("Alt") + event.getModifierState("Meta") > 1) return;
    if (hashtag) {
      if (event.code === "ArrowDown" && options.length - 1 > selected) {
        setSelected(selected + 1);
      }
      if (event.code === "ArrowUp" && selected >= 0) {
        setSelected(selected - 1);
      }
      if (event.code === "Enter" && selected >= 0) {
        handleDropDownClick(options[selected]);
        setSelected(-1);
      }
    }
  };

  return (
    <div onClick={handleDeleteButtonClick}>
      <div className="autocomplete-wrapper" onKeyUp={handleKeyUp} onClick={(e) => e.preventDefault()}>
        <InputContainer hashtag={hashtag}>
          <input
            type="text"
            className="autocomplete-input"
            placeholder="해시태그를 입력하세요"
            onChange={handleInputChange}
            value={inputValue}
          />
          {/* onClick={handleDeleteButtonClick}*/}
        </InputContainer>
        {hashtag !== "null" ? (
          <DropDown options={options} handleDropDownClick={(e) => handleDropDownClick(e)} selected={selected} />
        ) : null}
      </div>
    </div>
  );
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
  return (
    <DropDownWrapper className="hashtag-drop-down">
      {/* <DropDownContainer> */}
      {options.map((option, idx) => (
        <DropDownValue
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? "hashtag-drop-down selected" : "hashtag-drop-down"}
        >
          {option}
        </DropDownValue>
      ))}
      {/* </DropDownContainer> */}
    </DropDownWrapper>
  );
};
