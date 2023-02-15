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
        bookings,
        count
    };
};

exports.findBookingById = async (id) => {
    const booking = await Booking.findById(id);
    if (!booking) {
        throw new Error("Document not found");
    }

    return booking;
};

exports.updateBookingById = async (id, data) => {
    const result = await Booking.updateOne({ _id: id }, data, {
        runValidators: true
    });
    return result;
};

exports.deleteBookingById = async (id) => {
    const result = await Booking.deleteOne({ _id: id });
    return result;
};