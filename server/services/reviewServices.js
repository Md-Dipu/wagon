const Review = require("../models/Review");

exports.insertReview = async (data) => {
    const result = Review.create(data);
    return result;
};

exports.findReviews = async (filters, queries) => {
    const reviews = await Review.find(filters)
        .limit(queries.limit)
        .select(queries.fields)
        .skip(queries.skip)
        .sort(queries.sortby);
    const count = await Review.countDocuments(filters);
    return {
        reviews,
        count
    };
};