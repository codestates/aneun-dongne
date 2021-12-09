const multer = require("multer");
const upload = multer({ dest: "./upload" });
const path = require("path");
const fs = require("fs");
const { User } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  const accessTokenData = isAuthorized(req);
  //로그인 안되어있으면 바로 컷
  if (accessTokenData === null) {
    res.status(400).send("don't have user information");
  }
  console.log("헤더", req.headers); //제대로 입력되었는지 확인용
  console.log("쿠키", req.cookies); //쿠키
  console.log("바디", req.body.memo); //메모 입력했으면 메모 나옴

  let memo = req.body.memo;
  let image = "";
  if (!req.file) {
    //이미지 없으면 우선 빈칸. res.status(400)으로 하기로 했던가요??
    image = "";
  } else {
    console.log("사진url", req.file.location);
    image = req.file.location; //링크를 DB에 넣기 위한 값.
  }

  console.log("토큰데이터", accessTokenData);
  const { nickname } = accessTokenData;

  const userData = await User.findOne({ where: { nickname } });
  console.log("닉넴", userData.nickname);
  if (!userData) {
    //없는 유저일때
    res.status(400).send("not authorization"); //메시지 형식은 제맘대로 했어요 우선 기능위주로
  } else {
    //있는유저일떄, 메모랑 사진을 유저의 visited목록에 image추가.
    // 조인테이블 만들기..
    console.log("이거 두개 있으면 성공", "메모", memo, "/ 이미지링크", image); //여기 있는 값이 메모랑 이미지링크
    res.status(200).send({ message: "hi" });
  }
};
