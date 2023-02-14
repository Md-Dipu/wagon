const Booking = require("../models/Booking");

exports.insertBooking = async (data) => {
    const result = Booking.create(data);
    return result;
};

exports.findBookings = async (filters, queries) => {
    const bookings = await Booking.find(filters)
        .limit(queries.limit)
        .select(queries.fields)
        .skip(queries.skip)
        .sort(queries.sortby);
    const count = await Booking.countDocuments(filters);
    return {
        users: bookings,
        count
    };
};