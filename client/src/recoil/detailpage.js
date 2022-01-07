import { atom, selector } from "recoil";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
// export const contentid = atom({
//   key: "contentid",
//   default: 0,
// });

// export const hashTagSelector = selector({
//   key: "hashTagSelector",
//   get: async ({ get }) => {
//     const contentId = get(contentid);

//     if (contentId === 0) {
//       return;
//     } else {
//       console.log(contentId);
//       const response = await axios.get(`${process.env.REACT_APP_API_URL}/post/${contentId}`, {
//         headers: {
//           Authorization: `Bearer ${cookies.get("jwt") || cookies.get("kakao-jwt")}`,
//           // Authorization: `Bearer ${accessToken || kakaoToken}`,
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       });
//       console.log(response);
//       const tags = response.data.post.post_tags ? response.data.post.post_tags.split(",").map((el) => "#" + el) : [];
//       return tags;
//     }
//   },
// });
export const defaultcomments = atom({
  key: "defaultcomments",
  default: [],
});
