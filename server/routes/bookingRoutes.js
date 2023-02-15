const express = require("express");

const bookingController = require("../controllers/bookingControllers");

const router = express.Router();

router.route("/")
    .post(bookingController.postBooking)
    .get(bookingController.getBookings);

router.route("/:id")
    .get(bookingController.getBookingById)
    .patch(bookingController.updateBookingById);

module.exports = router;