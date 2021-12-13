// const multer = require("multer");
// const upload = multer({ dest: "../upload" });
// const path = require("path");
// const fs = require("fs");
const multer = require("multer");
const multerS3 = require("multer-s3-transform");
const sharp = require("sharp");
const s3 = require("../aws/s3");

// module.exports = {
//   post: async (req, res) => {
//     console.log(req.file);
//     if (req.body) {
//       await user.create({
//         username: req.body["username"],
//         email: req.body["email"],
//         password: req.body["password"],
//         blog: req.body["sign-up-url"],
//         /*image: req.body['image']*/
//       });
//       res.status(201).json({ message: "ok" });
//     } else {
//       res.status(409).json({ message: "This user already exists in the database" });
//     }
//   },
// };

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "ap-northeast-2", // s3 버킷 이름
    contentType: multerS3.AUTO_CONTENT_TYPE, // 파일 MIME 타입 자동 감지
    shouldTransform: true, // 리사이징 true: transforms 속성 필요
    transforms: [
      {
        id: "origin",
        key: function (req, file, cb) {
          cb(null, Date.now() + "_origin." + file.originalname.split(".").pop()); // 파일명: 현재시간.원본확장자
        },
        transform: function (req, file, cb) {
          cb(null, sharp().withMetadata()); // 원본. 메타데이터를 유지하여 이미지 회전 방지
        },
      },
      {
        id: "thumbnail",
        key: function (req, file, cb) {
          cb(null, Date.now() + "_thumbnail." + file.originalname.split(".").pop());
        },
        transform: function (req, file, cb) {
          cb(null, sharp().withMetadata().resize({ width: 300 })); // 너비 300 리사이징
        },
      },
    ],
    acl: "public-read",
  }),
});

module.exports = upload;
