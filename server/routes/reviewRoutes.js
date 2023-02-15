const express = require("express");

const reviewControllers = require("../controllers/reviewControllers");

const router = express.Router();

router.route("/").post(reviewControllers.postReview);

module.exports = router;