const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: "Provide a valid email address"
        }
    },
    phone: {
        type: String,
        trim: true,
        validate: {
            validator: validator.isMobilePhone,
            message: "Provide a valid email address"
        }
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user"
    }
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;