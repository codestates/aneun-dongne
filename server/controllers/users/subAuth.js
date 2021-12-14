const { isAuthorized, generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { User } = require("../../models");
const multer = require("multer");
const upload = multer({ dest: "./upload" });
const path = require("path");
const fs = require("fs");

module.exports = {
  get: async (req, res) => {
    console.log("AUTH 겟 토큰", req.headers);
    const accessTokenData = isAuthorized(req);
    console.log("토큰도착", accessTokenData);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      res.status(200).json({ data: { userInfo: accessTokenData }, message: "ok" });
    }
  },
  patch: async (req, res) => {
    console.log("리코그바디, subAuth.put", req.file, req.body);

    if (req.body.password !== req.body.checkPassword) {
      return res.status(400).send({ message: "type your password again" });
    }
    // 확인용 => password,email
    // 변경용 => nickname,password,newPassword, image
    let image = "";
    // if (req.file !== undefined) {
    //   //링크를 DB에 넣기 위한 값
    //   image = req.file.location;
    // } else {
    //   //! 없으면 기본 프사들어가는데 이걸 회원가입에서 그냥 기본값으로 해야할듯
    //   //! image =
    //   //! "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
    // }

    //요청바디에서 유저정보 획득
    const { nickname, email, password, newPassword } = req.body;

    // console.log(image, nickname, email, password, newPassword);

    console.log("리코그바디", req.body);

    const validUser = await User.findOne({
      where: {
        email,
        password,
      },
    });
    //이메일이나 비번이 일치하는 자료가 DB에 없다면 컷
    if (!validUser) {
      console.log("이것좀보자", email, password);
      return res.status(405).json({ data: null, message: "no such user in the database" });
    } else {
      // console.log(req.file.key) // 업로드시 삭제해줄 애, 지금은 운영자가 직접삭제해야함..

      // 변경하려는 프사가 없을떄
      if (req.file === undefined) {
        //기존프사가 있다면 기존프사 사용
        if (validUser.user_image_path !== null) image = validUser.user_image_path;
        //기존프사도 없다면,
        else {
          //기본 프사 사용
          image =
            "https://aneun-dongne.s3.ap-northeast-2.amazonaws.com/%E1%84%92%E1%85%A2%E1%86%B7%E1%84%90%E1%85%A9%E1%84%85%E1%85%B5+414kb.png";
        }
      } else {
        //프사 있을때
        //링크를 DB에 넣기위한 값

        image = req.file.transforms[0].location;
        console.log("바꿀이미지", image);
      }
      User.update(
        {
          nickname,
          email,
          password: newPassword,
          user_image_path: image,
        },
        { where: { email: email } }
      )
        .then((result) => {
          console.log("Result", result);
          // const accessToken = generateAccessToken(data.dataValues);
          User.findOne({
            where: {
              email,
              password: newPassword,
            },
          }).then((data) => {
            console.log("하이하이하이", image);
            if (!data) {
              res.status(400).send("invalid user");
            } else {
              delete data.dataValues.password;
              const accessToken = generateAccessToken(data.dataValues);

              res
                .cookie("jwt", accessToken)
                .json({ data: { accessToken, nickname, user_image_path: image }, message: "okkk" });
            }
          });
          // res.status(201).json({ message: "successfully changed" });
        })
        .catch((err) => {
          //아마 서버에러겠죠??
          console.log(err);
          res.status(500).json({ message: "server errorr" });
        });

      //   if (!req.file) {
      //     if(validUser)
      //   } else {
      //     img = req.file.location; // 링크를 db 넣기위한 값
      //   }
      // }
    }
  },
};
