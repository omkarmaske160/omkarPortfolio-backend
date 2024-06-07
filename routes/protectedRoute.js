const { addProject } = require("../controller/adminController")
const { protected } = require("../middleware/protected")


const protectedRoute = require("express").Router()

protectedRoute

    .post('/checkAdmin', protected)
    .post('/addProject', addProject)



module.exports = protectedRoute  