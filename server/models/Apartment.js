const mongoose = require("mongoose");
const validator = require("validator");

const apartmentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    img: {
        type: String,
        required: true,
        trim: true,
        validate: [validator.isURL, "Provide a valid image URL"]
    },
    address: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    description: {
        fullDescription: {
            type: String,
            trim: true
        },
        shortDescription: {
            type: String,
            maxLength: 50,
            required: true,
            trim: true
        }
    },
    roomInfo: {
        roomSize: String,
        roomNumber: String,
        roomFloor: String
    },
    templateImages: [{
        type: String,
        trim: true,
        validate: [validator.isURL, "Provide a valid image URL"]
    }],
    more: [String]
}, {
    timestamps: true
});

const Apartment = mongoose.model("Apartment", apartmentSchema);

module.exports = Apartment;