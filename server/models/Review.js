const mongoose = require("mongoose");
const validator = require("validator");

const reviewSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate: {
            validator: validator.isEmail,
            message: "Provide a valid email"
        }
    },
    message: {
        type: String,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
    },
    user: {
        name: String,
        email: {
            type: String,
            required: true,
            validate: {
                validator: validator.isEmail,
                message: "Provide a valid email"
            }
        }
    },
    ratingCodeWord: {
        type: String,
        enum: ["very sad", "sad", "good", "happy", "very happy"]
    }
}, {
    timestamps: true
});

reviewSchema.pre("save", function (next) {
    if (this.isModified("rating")) {
        const ratingWords = ["very sad", "sad", "good", "happy", "very happy"];
        this.ratingCodeWord = ratingWords[this.rating - 1];
    }
    next();
});

const Review = mongoose.model("Reviews", reviewSchema);

module.exports = Review;