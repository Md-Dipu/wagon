const { insertBooking } = require("../services/bookingServices");

exports.postBooking = async (req, res) => {
    try {
        const result = await insertBooking(req.body);

        res.status(200).json({
            success: true,
            message: "Booking data inserted successfully",
            data: {
                insertedId: result._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to insert booking data",
            error: error.message
        });
    }
};