const crypto = require("crypto")
const mongoose = require('mongoose');
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const UserSchema = new mongoose.Schema({
    username: { type: String, required: 
              [true, "Please provide a username"], trim: true 
              },
    email: {
        type: String, required: [true, "Please provide an email"],
        unique: true,
        Match: [ //regex for email here,
            "Please provide a valid email"
        ]
    },
    two_fa_status: { type: String, default: 'on' },
    OTP_code: { type: String, default: null },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6, select: false
    },
    verified: { type: Boolean, default: false},
},
    { timestamps: true }
);

UserSchema.pre("save", async function (next) {
 if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

UserSchema.methods.getSignedToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRESIN })
}

UserSchema.methods.matchPasswords = async function (password) {
    return await bcrypt.compare(password, this.password);
}

const User = mongoose.model("user", UserSchema)

module.exports = User