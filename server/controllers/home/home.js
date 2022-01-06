const getByHashtagOrTitle = require("../functions/homeSearch/getByHashtagOrTitle");
const getByXYOrHashtagOrTitle = require("../functions/homeSearch/getByXYOrHashtagOrTitle");
const getByAreaOrHashtagOrTitle = require("../functions/homeSearch/getByAreaOrHashtagOrTitle");
const { isAuthorized } = require("../tokenFunctions");

require("dotenv").config();

// node ./controllers/home/home.js
// 로그아웃한 상태로 홈 화면에 들어오면 유저id가 필요한 함수의 id부분을 0처리한다 아이디가 0인 유저는 없어서
// 시퀄라이즈로 서치할 때 tag, searchWord는 ""로 바꾸는데 빈 스트링을 검색하면 데이터가 전원 다 뜨기 때문 : 필터링 없는 전체 데이터 검색

// const bb = async () => {
//   console.log(await getByHashtagOrTitle(0, "", ""));
// };

// bb();

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  let { areacode, sigungucode, radius, clientwtmx, clientwtmy, tag, searchWord } = req.query;
  // 입력 안 했을 경우
  // pickpoint  params { tag, searchWord : ""  areacode="null", sigungucode="null"}
  // word {areacode=0, sigungucode=0, tag, searchWord : ""}: 돋보기검색버튼
  console.log("아아아아", req.body);
  radius = Number(radius);

  if (tag === "null") {
    tag = "";
  }
  if (searchWord === "null") {
    searchWord = "";
  }
  if (areacode !== "null") {
    areacode = Number(areacode);
  }
  if (sigungucode !== "null") {
    sigungucode = Number(sigungucode);
  }
  console.log("함수들어가기 전", areacode, sigungucode, searchWord, tag);

  try {
    if (!accessTokenData) {
      if (areacode === "null") {
        //areacode, sigungucode 값이 아예 없으면 pickpoint 요청이거나 현재위치반경 기준 관광지 정보 요청이다
        await res.status(200).json({
          data: await getByXYOrHashtagOrTitle(0, radius, clientwtmx, clientwtmy, tag, searchWord),
        });
      } else {
        if (areacode === 0) {
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
      }
    } else {
      const { id } = accessTokenData;
      if (areacode === "null") {
        //areacode, sigungucode 값이 아예 없으면 pickpoint 요청이거나 현재위치반경 기준 관광지 정보 요청이다
        await res.status(200).json({
          data: await getByXYOrHashtagOrTitle(id, radius, clientwtmx, clientwtmy, tag, searchWord),
        });
      } else {
        if (areacode === 0) {
          //돋보기 아이콘 눌러서 검색했는데 지역선택을 전혀 안 한 경우
          await res.status(200).json({
            data: await getByHashtagOrTitle(id, tag, searchWord),
          });
        } else {
          //돋보기 아이콘 눌러서 검색하고 지역선택까지 한 경우 -> tag,searchWord 없으면 자동으로 배제
          await res.status(200).json({
            data: await getByAreaOrHashtagOrTitle(id, areacode, sigungucode, tag, searchWord),
          });
        }
      }
    }
  } catch (err) {
    res.status(500).json({ message: "server err" });
  }
};
