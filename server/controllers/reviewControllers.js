const { insertReview } = require("../services/reviewServices");

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