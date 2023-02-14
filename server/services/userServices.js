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