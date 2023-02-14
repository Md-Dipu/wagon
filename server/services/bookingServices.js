const Booking = require("../models/Booking");

exports.insertBooking = async (data) => {
    const result = Booking.create(data);
    return result;
};