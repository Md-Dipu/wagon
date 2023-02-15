const Review = require("../models/Review");

exports.insertReview = async (data) => {
    const result = Review.create(data);
    return result;
};