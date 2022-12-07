const express = require("express");

const controllers = require("../../controllers/scores");

const { isExist } = require("../../middlewares");

const trycatchWrapper = require("../../helpers/trycatchWrapper");

const router = express.Router();

router.get("/", isExist, trycatchWrapper(controllers.getAll));
router.get("/all", trycatchWrapper(controllers.getAllUsersScores));
router.post("/", isExist, trycatchWrapper(controllers.add));

module.exports = router;
