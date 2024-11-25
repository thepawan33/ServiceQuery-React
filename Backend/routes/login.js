const express = require("express");
const router = express.Router();
const passport = require("passport");
const {
  loginController,
  refreshTokenController,
} = require("../controllers/login");

router.post(
  "/login",
  passport.authenticate("local", { failureFlash: true }),
  loginController
);

router.post("/token", refreshTokenController);

module.exports = router;
