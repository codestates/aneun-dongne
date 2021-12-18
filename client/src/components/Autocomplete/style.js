import styled from "styled-components";
const boxShadow = "0 4px 6px rgb(32 33 36 / 28%)";
const activeBorderRadius = "1rem 1rem 0 0";
const inactiveBorderRadius = "1rem 1rem 1rem 1rem";
export const Styled = {
  InputContainer: styled.div`
  @media (max-width: 1023px) {
    width: 80%;
      height: 30px;
      margin: 5px auto;}
      @media (max-width: 600px) {
    /* 밑에꺼쓰면 이거 주석해야함 */
    width: 200px;
      height: 30px;
      
    /* !! */
    /* 
     @media (max-width: 1023px) {width: 98%;
    margin-left: auto;
    margin-right: auto;
    height: 40px; }*/
    

      border-radius: 5px;
  }
  
    /* !! */
    /* width: 98%;
    margin-left: auto;
    margin-right: auto;
    height: 40px; */
    

      border-radius: 5px;
  }
  /* margin-top: 8rem; */
  margin: 5px 2% 5px 2%;
  height: 40px;
  width: 140px;
  /* background-color: #ffffff; */
  display: flex;
  flex-direction: row;
  /* padding: 1rem; */
  border-radius: 20px;
  /* border: 1px gray solid; */
  border: none;
  position:relative
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
`,

  DropDownContainer: styled.ul`
  position:relative
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
`,
  DropDownWrapper: styled.div`
  position:relative
  z-index: 999;
  border-radius: 0 0 5px 5px;
  padding: 5px;
  background: white;
`,
  DropDownValue: styled.div`
  /* background: white; */
  position:relative
  border-bottom: 1px gray solid;
  padding: 3px;
  z-index: 999;
  display: flex;
  flex-direction: column;
`,
};
