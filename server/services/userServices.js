const User = require("../models/User");

exports.insertUser = async (data) => {
    const result = await User.create(data);
    return result;
};