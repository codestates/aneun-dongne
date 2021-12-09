const { readComments, createComments, updateComments, deleteComments } = require("../controllers/comment");
const exress = require("express");
const router = exress.Router();

router.get("/", readComments);

router.post("/", createComments);

router.patch("/", updateComments);

router.delete("/", deleteComments);

module.exports = router;
