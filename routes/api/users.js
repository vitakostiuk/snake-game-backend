const express = require("express");

const controllers = require("../../controllers/users");

const trycatchWrapper = require("../../helpers/trycatchWrapper");

const router = express.Router();

router.post("/signup", trycatchWrapper(controllers.signup));

module.exports = router;
