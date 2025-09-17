const { addProject, getAllProject, deleteProject } = require("../controller/adminController")
const { addFeedback } = require("../controller/emailController")
const { protected } = require("../middleware/Protected")


const protectedRoute = require("express").Router()

protectedRoute

    .post('/checkAdmin', protected)
    .post('/addProject', addProject)
    .get('/getProject', getAllProject)
    .post("/add-feedback", addFeedback)
    .delete("/deleteProject/:_id", deleteProject)




module.exports = protectedRoute  