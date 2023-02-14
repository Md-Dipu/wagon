const User = require("../models/User");

exports.insertUser = async (data) => {
    const result = await User.create(data);
    return result;
};

exports.findUsers = async (filters, queries) => {
    const users = await User.find(filters)
        .limit(queries.limit)
        .select(queries.fields)
        .skip(queries.skip)
        .sort(queries.sortby);
    const count = await User.countDocuments(filters);
    return {
        users,
        count
    };
};

exports.findUserById = async (id) => {
    const user = await User.findById(id);
    return user;
};

exports.findUserByEmail = async (email) => {
    const user = await User.findOne({
        email
    });

    return user;
};

exports.updateUser = async (query, data) => {
    const result = await User.updateOne(query, data, {
        runValidators: true
    });

    return result;
};