const {
    insertApartment,
    findApartments
} = require("../services/apartmentServices");
const parseQuery = require("../utils/parseQuery");

exports.postApartment = async (req, res) => {
    try {
        const result = await insertApartment(req.body);

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

exports.getApartments = async (req, res) => {
    const { filters, queries } = parseQuery(req.query);

    try {
        const result = await findApartments(filters, queries);

        res.status(200).json({
            success: true,
            message: "Apartments data found successfully",
            data: result.apartments,
            count: result.count
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to find apartments data",
            error: error.message
        });
    }
};