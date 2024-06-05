const { protected } = require("../middleware/protected")


const protectedRoute = require("express").Router()

protectedRoute

    .post('/checkAdmin', protected)



module.exports = protectedRoute  