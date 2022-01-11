import { useState, useEffect } from "react";
import axios from "axios";
import { Styled } from "./style";

let deselectedOptions = [];

export const Autocomplete = ({ area, sigg, place, searchPlace, hashtag, setHashtag }) => {
  const [options, setOptions] = useState(deselectedOptions);
  const [selected, setSelected] = useState(-1);
  const [clickedSomething, setClickedSomething] = useState(false);
  const [hasHashtag, setHasHashtag] = useState(false);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/hashtagslist`, {
        headers: {
          // Authorization: `Bearer ${accessToken || kakaoToken}`,
          "Content-Type": "application/json",
        },

        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data.data);
        // setOptions(res.data.data);
        deselectedOptions = res.data.data;
      });
  }, []);

  useEffect(() => {
    if (hashtag === "") {
      setHasHashtag("null");
    }
  }, [hashtag]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    if (value.includes("\\")) return;

    // input에 텍스트가 있는지 없는지 확인하는 코드
    value ? setHasHashtag(true) : setHasHashtag(false);

    // updateText
    setHashtag(value);

    // dropdown을 위한 기능
    const filterRegex = new RegExp(value, "i");
    const resultOptions = deselectedOptions.filter((option) => option.match(filterRegex));
    setOptions(resultOptions);
  };

  const handleDropDownClick = (clickedOption) => {
    setHashtag(clickedOption);
    console.log(hashtag);
    // const resultOptions = deselectedOptions.filter((option) => option === clickedOption);
    // setOptions(resultOptions);
    setClickedSomething(true);
  };
  const handleDeleteButtonClick = () => {
    setClickedSomething(false);
    setHashtag("");
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
    if (hasHashtag) {
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
  console.log(hashtag);
  return (
    // <div onClick={handleDeleteButtonClick}>
    <div className="autocomplete-wrapper" onKeyUp={handleKeyUp} onClick={(e) => e.preventDefault()}>
      <Styled.InputContainer hasHashTag={hasHashtag}>
        <input
          type="text"
          className="autocomplete-input"
          placeholder="# 해시태그 검색"
          onChange={handleInputChange}
          value={hashtag}
          onKeyUp={(e) => {
            console.log(hashtag);
            if (e.key === "Enter") {
              searchPlace(area, sigg, place, hashtag);
            }
          }}
        />
        <i className="fas fa-times" onClick={handleDeleteButtonClick}></i>
      </Styled.InputContainer>
      {hasHashtag !== "null" ? (
        <DropDown
          options={options}
          handleDropDownClick={(e) => handleDropDownClick(e)}
          selected={selected}
          clickedSomething={clickedSomething}
          setClickedSomething={setClickedSomething}
        />
      ) : null}
    </div>
    // </div>
  );
};

export const DropDown = ({ options, handleDropDownClick, selected, clickedSomething, setClickedSomething }) => {
  return (
    <Styled.DropDownContainer>
      {!clickedSomething
        ? options.map((option, idx) => (
            <li key={idx} onClick={() => handleDropDownClick(option)} className={selected === idx ? "selected" : ""}>
              {option}
            </li>
          ))
        : null}
    </Styled.DropDownContainer>
    // <Styled.DropDownWrapper className="hashtag-drop-down">
    //   {options.map((option, idx) => (
    //     <Styled.DropDownValue
    //       key={idx}
    //       onClick={() => handleDropDownClick(option)}
    //       className={selected === idx ? "hashtag-drop-down selected" : "hashtag-drop-down"}
    //     >
    //       {option}
    //     </Styled.DropDownValue>
    //   ))}
    // </Styled.DropDownWrapper>
  );
};
