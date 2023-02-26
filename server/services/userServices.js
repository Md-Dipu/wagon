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
    if (!user) {
        throw new Error("Document not found");
    }

    return user;
};

exports.findUserByEmail = async (email) => {
    const user = await User.findOne({
        email
    });

    if (!user) {
        throw new Error("Document not found");
    }

    return user;
};

exports.updateUser = async (filter, data) => {
    const result = await User.updateOne(filter, data, {
        runValidators: true
    });

    return result;
};

exports.deleteUser = async (filter) => {
    const result = await User.deleteOne(filter);
    if (!result.deletedCount) {
        throw new Error("Document not found");
    }
    return result;
};