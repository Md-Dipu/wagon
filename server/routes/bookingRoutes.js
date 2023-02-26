const express = require("express");

const bookingController = require("../controllers/bookingControllers");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.use(verifyToken);

router.route("/")
    .post(bookingController.postBooking)
    .get(bookingController.getBookings);

router.route("/:id")
    .get(bookingController.getBookingById)
    .patch(bookingController.updateBookingById)
    .delete(bookingController.deleteBookingById);

module.exports = router;