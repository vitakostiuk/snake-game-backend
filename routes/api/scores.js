const express = require("express");

const controllers = require("../../controllers/scores");

const trycatchWrapper = require("../../helpers/trycatchWrapper");

const router = express.Router();

router.get("/", trycatchWrapper(controllers.getAll));
router.post("/", trycatchWrapper(controllers.add));

module.exports = router;
