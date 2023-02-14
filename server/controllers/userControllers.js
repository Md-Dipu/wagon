const { insertUser } = require("../services/userServices");

exports.postUser = async (req, res) => {
    try {
        const result = await insertUser(req.body);

        res.status(200).json({
            success: true,
            message: "User data inserted successfully",
            data: {
                insertedId: result._id
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to insert user data",
            error: error.message
        });
    }
};