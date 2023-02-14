const { insertUser, findUsers } = require("../services/userServices");
const parseQuery = require("../utils/parseQuery");

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

exports.getUsers = async (req, res) => {
    const { filters, queries } = parseQuery(req.query);

    try {
        const result = await findUsers(filters, queries);

        res.status(200).json({
            success: true,
            message: "Users data found successfully",
            data: result.users,
            count: result.count
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to find users data",
            error: error.message
        });
    }
};