const { insertReview, findReviews } = require("../services/reviewServices");
const parseQuery = require("../utils/parseQuery");

exports.postReview = async (req, res) => {
    try {
        const result = await insertReview(req.body);

        res.status(200).json({
            success: true,
            message: "Review data inserted successfully",
            data: {
                insertedId: result._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to insert review data",
            error: error.message
        });
    }
};


exports.getReviews = async (req, res) => {
    const { filters, queries } = parseQuery(req.query);

    try {
        const result = await findReviews(filters, queries);

        res.status(200).json({
            success: true,
            message: "Reviews data found successfully",
            data: result.reviews,
            count: result.count
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to find reviews data",
            error: error.message
        });
    }
};