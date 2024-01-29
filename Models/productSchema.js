const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        description: {
            type: String,
            required: true,
        },

        inventory: {
            type: String
        },
        price: {
            type: Number,
            required: true,
        }

    },
    { timestamps: true, collection: "product" }
)
module.exports = mongoose.model("product", ProductSchema)