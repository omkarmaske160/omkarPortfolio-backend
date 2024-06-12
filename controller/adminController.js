const projectModel = require("../model/projectModel");
const { upload } = require("../utils/uploadImg");
const mongoose = require('mongoose');

exports.addProject = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({
                    message: err.message || "Unable to upload image",
                });
            }

            if (!req.file || !req.file.filename) {
                return res.status(400).json({
                    message: "File not received or filename not provided",
                });
            }

            console.log(req.body);
            console.log(req.file.filename);
            await projectModel.create({ ...req.body, project_image: req.file.filename, });
            res.status(201).json({ message: "Project added successfully" });
        });
    } catch (error) {
        res.status(400).json({ message: error.message || "Something went wrong" });
    }
};

exports.getAllProject = async (req, res) => {
    try {
        const result = await projectModel.find()
        res.status(200).json({ message: "Project Fetch successfully", result })
    } catch (error) {
        res.status(400).json({ message: error.message || "something went wrong" })
    }
}


exports.deleteProject = async (req, res) => {
    try {
        const { _id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(_id)) {
            return res.status(400).json({ message: "Invalid project ID" });
        }

        console.log(_id);
        const result = await projectModel.findOneAndDelete({ _id });

        if (!result) {
            return res.status(404).json({ message: "Project not found" });
        }

        res.status(200).json({ message: "User Project deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message || "Something went wrong" });
    }
}


