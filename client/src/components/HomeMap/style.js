import styled from "styled-components";

export const Styled = {
  Div: styled.div`
    padding: 10px;
    /* background: skyblue; */
    
    /* width:80%; */
      height:100%;
  
    .map-experiment {
      z-index: 9;
      position: absolute;
      bottom:20px;
      right:10px;
      border-radius:10px;
      font-size: 0.9rem;
      background: rgba(255, 255, 255, 0.6);
    }
    

  
    }
  `,
  Map: styled.div`
    margin: 5px;

    width: 100%;
    height: 100%;
    border-radius: 10px;
  `,
  MapBox: styled.div`
    width: auto;
  `,
};
