const express = require("express");

const bookingController = require("../controllers/bookingControllers");

const router = express.Router();

router.route("/")
    .post(bookingController.postBooking)
    .get(bookingController.getBookings);

module.exports = router;