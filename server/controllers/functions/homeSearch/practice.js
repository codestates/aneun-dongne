// const getByMapXMapYOnly = require("../functions/homeSearch/getPlaceListByMapXMapY");
// const getByMapXMapY = require("../functions/homeSearch/getPlaceListByMapXMapY");
const getByXYOrHashtagOrTitle = require("./getByXYOrHashtagOrTitle");
const getByHashtagOrTitle = require("./getByHashtagOrTitle");

const dd = async () => {
  console.log(await getByXYOrHashtagOrTitle(3, 1000, 197967.73907537223, 453252.6772048585, "", ""));
  console.log("end");
};

dd();

// node ./controllers/functions/homeSearch/practice.js
