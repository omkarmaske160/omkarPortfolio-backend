const { addProject, getAllProject } = require("../controller/adminController")
const { protected } = require("../middleware/protected")


const protectedRoute = require("express").Router()

protectedRoute

    .post('/checkAdmin', protected)
    .post('/addProject', addProject)
    .get('/getProject', getAllProject)



module.exports = protectedRoute  