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
  key: "getlike",
  get: async ({ get }) => {
    return axios
      .get(`https://localhost:80/like/${get(contentid)}`, { withCredentials: "true" })
      .then((res) => {
        return { likeOrNot: res.data.data.isLiked, likeCount: res.data.data.likeCount };
      })
      .catch((err) => console.log(err));
  },
});

export const postlike = selector({
  key: "postlike",
  get: async ({ get }) => {
    return axios
      .get(`https://localhost:80/like/${get(contentid)}`, { withCredentials: "true" })
      .catch((err) => console.log(err));
  },
});

// const [like, setLike] = useRecoilState(likeNum);
// const [likeOrNot, setLikeOrNot] = useRecoilState(likeorNot);
// const getLike = useRecoilValueLoadable(getlike);
// const [contentId, setContentId] = useRecoilState(contentid);
// setContentId(parseInt(id, 10));
