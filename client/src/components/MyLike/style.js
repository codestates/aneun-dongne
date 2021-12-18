import styled from "styled-components";

// export const Styled = {
//   Lists: styled.div`
//     padding: 0px 25px;
//     @media screen and (max-width: 400px) {
//       padding: 0px 5px;
//     }
//   `,
//   PlaceCard: styled.div`
//     margin: auto;
//     margin-top: 40px;
//     border: 3px rgb(107, 217, 224) solid;
//     border-radius: 20px;
//     width: 300px;
//     box-shadow: 4px 4px 4px rgb(85, 85, 85);
//     transition: box-shadow 0.1s, transform 0.1s;
//     text-decoration: inherit;
//     &:hover {
//       transform: scale(1.1);
//       box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//         4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//       transition: all 0.3s ease;
//     }
//     /* img {
//     align-content: center;
//     width: 100%;
//     border-radius: 20px;
//   } */
//     .place-cards {
//       display: flex;
//       flex-direction: column;
//       align-content: center;
//       justify-content: center;
//       background-color: white;
//       border-radius: 20px;
//       /* width: 100%; */
//     }
//     .place-cards > img {
//       width: 80%;
//       height: 200px;
//       margin-left: auto;
//       margin-right: auto;
//       margin-top: 20px;
//       margin-bottom: 10px;
//       border-radius: 20px;
//       /* object-fit: scale-down; */
//     }
//     .place-cards-title {
//       margin-left: 10px;
//       margin-top: 6px;
//     }
//     @media screen and (max-width: 710px) {
//       width: 220px;
//       height: 350px;
//       .place-cards > img {
//         height: 150px;
//       }
//     }

//     @media screen and (max-width: 560px) {
//       width: 140px;
//       height: 310px;
//       .place-cards > img {
//         height: 120px;
//       }
//     }

//     @media screen and (max-width: 400px) {
//       font-size: 0.7rem;
//       width: 130px;
//       height: 260px;
//       .place-cards > img {
//         height: 100px;
//       }
//     }
//   `,
//   KeyWord: styled.span`
//     margin-top: auto;
//     margin-bottom: 5%;
//     text-align: center;
//     clear: both;
//     float: left;
//     /* max-width: 130px; */
//     /* max-height: 25px; */
//     margin-left: 6px;
//     margin-right: 6px;
//     box-shadow: 4px 4px 4px rgb(85, 85, 85);
//     padding: 5px;
//     border-radius: 20px;
//     border: 1px solid rgb(192, 251, 255);
//     background-color: rgba(192, 251, 255, 0.8);
//     background-image: linear-gradient(
//       to right bottom,
//       rgba(255, 255, 255, 0.9) 0,
//       rgba(0, 0, 0, 0) 60%,
//       rgba(0, 0, 0, 0) 100%
//     );

//     color: black;
//     cursor: pointer;

//     &:hover {
//       color: black;
//       box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//         4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//       transform: scale(1.1);
//       transition: all 0.3s ease;
//     }
//     &:hover:after {
//       left: 0;
//       width: 100%;
//     }
//   `,
//   KeyWordBox: styled.div`
//     margin-top: 5%;
//     display: flex;
//     justify-content: center;
//     /* background-color: red; */
//     flex-wrap: wrap;
//     /* padding: 20px; */
//     /* height: 100%; */
//     /* justify-content: space-evenly; */
//     /* background-color: pink; */

//     /* background-color: white; */
//   `,
//   LikeBtn: styled.div`
//     border: 1px red solid;
//     border-radius: 20px;

//     width: 80px;
//     height: 40px;
//     margin: 20px auto;
//     cursor: pointer;
//     text-justify: center;
//     flex-direction: row-reverse;
//     box-shadow: 4px 4px 4px rgb(85, 85, 85);
//     transition: all 0.1s ease-in-out;
//     i {
//       justify-content: center;
//       margin-left: 25px;
//       margin-right: 3px;
//       margin-top: 10px;
//     }
//     &:hover {
//       color: black;
//       box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1),
//         4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//       transform: scale(1.1);
//     }
//     &:hover:after {
//       left: 0;
//       width: 100%;
//     }

//     &:active {
//       transform: scale(1.3);
//     }
//     @media screen and (max-width: 400px) {
//       width: 60px;
//       height: 30px;
//     }
//   `,
// };
//관심사 분리
