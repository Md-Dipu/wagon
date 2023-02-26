const express = require("express");

const reviewControllers = require("../controllers/reviewControllers");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.route("/")
    .post(verifyToken, reviewControllers.postReview)
    .get(reviewControllers.getReviews);

module.exports = router;