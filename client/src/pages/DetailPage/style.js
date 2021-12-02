import styled from "styled-components";

export const Styled = {
    Img : styled.img`
    width:70%;
    height:15rem;
    margin-left:auto;
    margin-right:auto;
    margin-bottom: 1rem;
    
`,
    Div : styled.div`
    display:flex;
    flex-direction: column;
    `,

    H2 : styled.h2`
        margin-left:auto;
        margin-right:auto;
        color : rgb(192, 251, 255);
        margin-bottom: 1rem;
        margin-top:1rem;
    `,
    Title : styled.div`
        margin-left:auto;
        margin-right:auto;
        
    `,
    PageURL : styled.a`
        margin-left:auto;
        margin-right:2rem;
        margin-bottom: 2rem;
    `,
    
    Overview : styled.span`
        width : 70%;
        margin-left:auto;
        margin-right:auto;  
               
        > .hide{
            display:none
        }        
    `,
    ReadMoreBtn : styled.button`
        border:none;
        background: transparent;
        width:50px;
        margin-bottom: 1rem;
        > .hide{
            display:none
        } 
    `,
    CutDownBtn : styled.button`
        border:none;
        background: transparent;
        width:50px;
        margin-bottom: 1rem;
        > .hide{
            display:none
        } 
    `


}