const express = require("express");
const router = express.Router();
const wrapAysnc = require("../utils/wrapAysnc");
const ExpressError = require("../utils/ExpressError");
const { verifyToken, querySchema, isAuthenticate } = require("../middleware");
const {
  getQueryController,
  getQueryByIdController,
  addQueryController,
  deleteAllQueryController,
  deleteOneController,
} = require("../controllers/query.js");

const queryValidate = (req, res, next) => {
  const { error } = querySchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

router.get(
  "/query",
  isAuthenticate,
  verifyToken,
  wrapAysnc(getQueryController)
);

router.get(
  "/search/:id",
  isAuthenticate,
  verifyToken,
  wrapAysnc(getQueryByIdController)
);
router.post("/query", queryValidate, wrapAysnc(addQueryController));

router.delete(
  "/query/delete/all",
  isAuthenticate,
  verifyToken,
  wrapAysnc(deleteAllQueryController)
);
router.delete(
  "/query/delete/:id",
  isAuthenticate,
  verifyToken,
  wrapAysnc(deleteOneController)
);

module.exports = router;
