// 클라이언트에서 검색어 요청
// 해당하는 데이터 목록 (최대 50개) 보내기
// 시군구 정보, 도 정보, 관광지 제목, 해시태그 검색을 쿼리로 받음
// 보내야하는 데이터
// "data" : [{
//     "landmark" :  {
//        title,   // "경복궁"
//        picture,   // "http://tong.visitkorea.or.kr/cms/resource/08/27"
//        city,  // "서울"
//        mapx,  //126.99",
//        mapy,  //37.58",
//     },
//     "hashtags" :  [{
//         hashtag_id
//         hashtag_name
//         post_count
//         created_at
//     },..........],
//     "likeCount" :  0
//     },........]

const { User, Post, HashTag, Like } = require("../models");
// node ./controllers/home.js

const clientMapx
const clientMapy

axios
.get(
  `http://api.visitkorea.or.kr/openapi/service/rest/KorService/locationBasedList?ServiceKey=${process.env.REACT_APP_TOUR_API_KEY}`,
  {
    params: {
      MobileOS: "ETC",
      MobileApp: "TourAPI3.0_Guide",
      //! 관광지 개수
      numOfRows: 50,
      // areaCode:33,
      // sigunguCode:7,
      //! contentTypeId : 12:관광지,14:문화시설,15:행사,25:여행코스,28:레포츠,32:숙박,38:쇼핑,39:식당,
      contentTypeId: 12,
      // * 대분류 : 인문 
      // cat1:'A02',
      //* 중분류 : 역사지구
      // cat2:'A0201',
      //*좌표,반경
      mapX: pickPoint[1],
      mapY: pickPoint[0],
      //! 반경 몇m??
      radius: 10000,
      //*
      arrange: "A",
      listYN: "Y",
    },
  },
  { "content-type": "application/json" }
)
.then((res) => {
  console.log(res.data);
  console.log(res.data.response.body.items.item);
  let list = res.data.response.body.items.item;
  //! list : [[관광지각각의 y좌표,x좌표,제목,썸네일,주소,컨텐트id],..]
  list = list.map((el) => {
    return [Number(el.mapy), Number(el.mapx), el.title, el.firstimage, el.addr1, el.contentid];
  });
  //   dispatch(changePlaceList(list))
  setPlaceList(list); //-> 이걸 PlaceList.js에서 사용한다.
})
.catch((err) => console.log(err));


User.findAll().then((data) =>
  console.log(
    data.map((el) => {
      return el.dataValues;
    })
  )
);

module.exports = async (req, res) => {
  User.findAll().then((data) =>
    console.log(
      data.map((el) => {
        return el.dataValues;
      })
    )
  );
  //   try {
  //   } catch (err) {
  //     console.error(err);
  //     res.status(500).json({ message: "Server error" });
  //   }
};
