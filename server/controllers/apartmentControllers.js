const { insertApartmentService } = require("../services/apartmentServices");

exports.postApartment = async (req, res) => {
    try {
        const result = await insertApartmentService(req.body);

        res.status(200).json({
            success: true,
            message: "Apartment data inserted successfully",
            data: {
                insertedId: result._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to insert apartment data",
            error: error.message
        });
    }
};