const {
    insertUser,
    findUsers,
    findUserById,
    findUserByEmail,
    updateUser,
    deleteUser
} = require("../services/userServices");
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

exports.getUserById = async (req, res) => {
    try {
        const user = await findUserById(req.params.id);

        res.status(200).json({
            success: true,
            message: "User data found successfully",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to find user data",
            error: error.message
        });
    }
};

exports.getUserByEmail = async (req, res) => {
    try {
        const user = await findUserByEmail(req.params.email);

        res.status(200).json({
            success: true,
            message: "User data found successfully",
            data: user
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to find user data",
            error: error.message
        });
    }
};

exports.updateUserByEmail = async (req, res) => {
    try {
        const result = await updateUser({
            email: req.params.email
        }, req.body);

        res.status(200).json({
            success: true,
            message: "User data updated successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to update user data",
            error: error.message
        });
    }
};

exports.deleteUserByEmail = async (req, res) => {
    try {
        const result = await deleteUser({
            email: req.params.email
        });

        res.status(200).json({
            success: true,
            message: "User data deleted successfully",
            data: result
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Couldn't able to delete user data",
            error: error.message
        });
    }
};