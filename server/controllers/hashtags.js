const { Hashtag } = require("../models");

// 현재 있는 해시태그 이름들을 배열로
const getTagNames = async () => {
  let result = [];
  await Hashtag.findAll({
    raw: true,
    attributes: ["hashtag_name"],
  })
    .then((data) => {
      result = data.map((el) => {
        return el.hashtag_name;
      });
    })
    .catch((err) => console.log(err));
  return result;
};

// const bb = async () => {
//   console.log(await getTagNames());
// };

// bb();

module.exports = async (req, res) => {
  await res.status(200).json({
    data: await getTagNames(),
  });
};
