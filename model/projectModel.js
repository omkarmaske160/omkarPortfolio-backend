const mongoose = require("mongoose");

const projectModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    languages: {
        type: [String],
        required: true // Array of strings for multiple languages
    },
    githubLink: {
        type: String,
        required: true
    },
    liveLink: {
        type: String,
        required: true
    },
    project_image: {
        type: [String],
        required: true // Array of image URLs for project images
    }
}, { timestamps: true });

module.exports = mongoose.model("ProjectData", projectModel);
