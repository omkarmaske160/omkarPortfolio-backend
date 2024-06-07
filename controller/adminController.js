const projectModel = require("../model/projectModel");
const { upload } = require("../utils/uploadImg");

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