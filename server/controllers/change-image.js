const multer = require("multer");
const upload = multer({ dest: "./upload" });
const path = require("path");
const fs = require("fs");
const { User } = require("../../models");
const { isAuthorized } = require("../tokenFunctions");

module.exports = async (req, res) => {
  console.log("헤더", req.headers); //제대로 입력되었는지 확인용
  console.log("쿠키", req.cookies); //쿠키
  console.log("바디", req.body.memo); //메모 입력했으면 메모 나옴
};
