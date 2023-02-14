const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = mongoose.Schema({
    apartment: {
        id: {
            type: mongoose.SchemaTypes.ObjectId,
            required: true,
            ref: "Apartment"
        },
        name: String,
        price: Number
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
    buyer: {
        name: {
            type: String,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            trim: true
        },
        phone: {
            type: String,
            required: true,
            trim: true
        }
    },
    status: {
        type: String,
        enum: ["pending", "approved"],
        default: "pending"
    }
}, {
    timestamps: true
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;