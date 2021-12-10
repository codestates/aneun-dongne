const getByHashtagOrTitle = require("../functions/homeSearch/getByHashtagOrTitle");
const getByXYOrHashtagOrTitle = require("../functions/homeSearch/getByXYOrHashtagOrTitle");
const getByAreaOrHashtagOrTitle = require("../functions/homeSearch/getByAreaOrHashtagOrTitle");

require("dotenv").config();

// node ./controllers/home/home.js
// 로그아웃한 상태로 홈 화면에 들어오면 유저id가 필요한 함수의 id부분을 0처리한다 아이디가 0인 유저는 없어서
// 시퀄라이즈로 서치할 때 tag, searchWord는 ""로 바꾸는데 빈 스트링을 검색하면 데이터가 전원 다 뜨기 때문 : 필터링 없는 전체 데이터 검색

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  const { id } = accessTokenData;
  const { areacode, sigungucode, radius, clientwtmx, clientwtmy, tag, searchWord } = req.params;

  if (tag === null) {
    tag = "";
  }
  if (searchWord === null) {
    searchWord = "";
  }

  if (!accessTokenData) {
    if (areacode === undefined) {
      //areacode, sigungucode 값이 아예 없으면 pickpoint 요청이거나 현재위치반경 기준 관광지 정보 요청이다
      await res.status(200).json({
        data: await getByXYOrHashtagOrTitle(0, radius, clientwtmx, clientwtmy, tag, searchWord),
      });
    } else if (areacode === null) {
      //돋보기 아이콘 눌러서 검색했는데 지역선택을 전혀 안 한 경우
      await res.status(200).json({
        data: await getByHashtagOrTitle(0, tag, searchWord),
      });
    } else {
      //돋보기 아이콘 눌러서 검색하고 지역선택까지 한 경우
      await res.status(200).json({
        data: await getByAreaOrHashtagOrTitle(0, areacode, sigungucode, tag, searchWord),
      });
    }
  } else {
    if (areacode === undefined) {
      await res.status(200).json({
        data: await getByXYOrHashtagOrTitle(id, radius, clientwtmx, clientwtmy, tag, searchWord),
      });
    } else if (areacode === null) {
      await res.status(200).json({
        data: await getByHashtagOrTitle(id, tag, searchWord),
      });
    } else {
      await res.status(200).json({
        data: await getByAreaOrHashtagOrTitle(id, areacode, sigungucode, tag, searchWord),
      });
    }
  }
};

// data : [{
//   id: 4836,
//   post_addr1: '서울특별시 종로구 우정국로 59',
//   post_addr2: '(견지동)',
//   post_areacode: 1,
//   post_contentid: 250358,
//   post_contenttypeid: 12,
//   post_firstimage: 'http://tong.visitkorea.or.kr/cms/resource/51/1568051_image2_1.jpg',
//   post_firstimage2: 'http://tong.visitkorea.or.kr/cms/resource/51/1568051_image3_1.jpg',
//   post_mapx: '126.98257598170000000000',
//   post_mapy: '37.57442562470000000000',
//   post_sigungucode: 23,
//   post_title: '서울 우정총국',
//   post_wtmx: '198460.803952026620000000000000000000',
//   post_wtmy: '452764.597922417800000000000000000000',
//   post_tags: null,
//   distance: 693.7826450251167,
//   'Likes.likeCount': 0,
//   isLiked: false
// },]
