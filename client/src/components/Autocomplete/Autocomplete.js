import { useState, useEffect } from "react";
import { Styled } from "./style";

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

export const Autocomplete = ({ hashtag, setHashtag }) => {
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

    const resultOptions = deselectedOptions.filter((option) => option === clickedOption);
    setOptions(resultOptions);
  };
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
        <Styled.InputContainer hashtag={hashtag}>
          <input
            type="text"
            className="autocomplete-input"
            placeholder="해시태그를 입력하세요"
            onChange={handleInputChange}
            value={inputValue}
          />
        </Styled.InputContainer>
        {hashtag !== "null" ? (
          <DropDown options={options} handleDropDownClick={(e) => handleDropDownClick(e)} selected={selected} />
        ) : null}
      </div>
    </div>
  );
};

export const DropDown = ({ options, handleDropDownClick, selected }) => {
  return (
    <Styled.DropDownWrapper className="hashtag-drop-down">
      {options.map((option, idx) => (
        <Styled.DropDownValue
          key={idx}
          onClick={() => handleDropDownClick(option)}
          className={selected === idx ? "hashtag-drop-down selected" : "hashtag-drop-down"}
        >
          {option}
        </Styled.DropDownValue>
      ))}
    </Styled.DropDownWrapper>
  );
};
