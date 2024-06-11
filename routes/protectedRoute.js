const { addProject, getAllProject } = require("../controller/adminController")
const { addFeedback } = require("../controller/emailController")
const { protected } = require("../middleware/protected")


const protectedRoute = require("express").Router()

protectedRoute

    .post('/checkAdmin', protected)
    .post('/addProject', addProject)
    .get('/getProject', getAllProject)
    .post("/add-feedback", addFeedback)




module.exports = protectedRoute  