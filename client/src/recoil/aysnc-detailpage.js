import { atom, selector } from "recoil";
import axios from "axios";

export const contentid = atom({
  key: "contentid",
  default: 0,
});

export const likeNum = atom({
  key: "likeNum",
  default: 0,
});
export const likeorNot = atom({
  key: "likeorNot",
  default: true,
});
export const getlike = selector({
  key: "likeNum",
  get: async ({ get }) => {
    return axios.get(`https://localhost:80/like/${get(contentid)}`, { withCredentials: "true" }).then((res) => {
      console.log("조하요", res.data.data.isLiked, res.data.data.likeCount);
      //   return { isLiked: res.data.data.isLikedn, likeNum: res.data.data.likeCount };
    });
  },
});

// const [like, setLike] = useRecoilState(likeNum);
// const [likeOrNot, setLikeOrNot] = useRecoilState(likeorNot);
// const getLike = useRecoilValueLoadable(getlike);
// const [contentId, setContentId] = useRecoilState(contentid);
// setContentId(parseInt(id, 10));
