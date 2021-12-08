const { isAuthorized, generateAccessToken, sendAccessToken } = require("../tokenFunctions");
const { User } = require("../../models");
module.exports = {
  get: (req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log("토큰도착", accessTokenData);

    if (!accessTokenData) {
      res.status(401).send({ data: null, message: "not authorized" });
    } else {
      res.status(200).json({ data: { userInfo: accessTokenData }, message: "ok" });
    }
  },
  put: async (req, res) => {
    console.log("리코그바디, auth.put", req.file);
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

    console.log(req.cookies);

    const validUser = await User.findOne({
      where: {
        email,
      },
    });
    //이메일 일치하는 자료가 없다면 컷
    if (!validUser) {
      res.status(400).json({ data: null, message: "no such user in the database" });
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
        image = req.file.location; //링크를 DB에 넣기위한 값
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
              password,
            },
          }).then((data) => {
            console.log("하이하이하이", data);
            if (!data) {
              res.status(404).send("invalid user");
            } else {
              delete data.dataValues.password;
              const accessToken = generateAccessToken(data.dataValues);

              res.cookie("jwt", accessToken);
              sendAccessToken(res, accessToken);
            }
          });
          // res.status(201).json({ message: "successfully changed" });
        })
        .catch((err) => {
          //아마 서버에러겠죠??
          console.log(err);
          res.status(500).json({ message: "bad request" });
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
