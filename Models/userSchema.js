const mongoose = require("mongoose")
const Schema = mongoose.Schema
const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String, required: true
        },
        token: {
            type: String,
            default: null,
        }

    },
    { timestamps: true, collection: "user" }
)
module.exports = mongoose.model("user", userSchema)