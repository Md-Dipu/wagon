const express = require("express");

const reviewControllers = require("../controllers/reviewControllers");

const router = express.Router();

router.route("/")
    .post(reviewControllers.postReview)
    .get(reviewControllers.getReviews);

module.exports = router;