const mongoose = require("mongoose");

const certificateModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true // Array of strings for multiple languages
    },
    platform: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("certificateData", certificateModel);
