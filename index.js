const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config({ path: "./.env" })
const cors = require("cors")



const app = express()
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json())
// app.use(express.static(path.join(__dirname, "assets/projectImg")))
app.use(express.static("assets/projectImg"))


mongoose.connect(process.env.MONGO_URL)


// routes
app.use("/api/v1/admin", require("./routes/protectedRoute"))

app.use("*", (req, res) => {
    res.status(400).json({
        message: "response not found"
    })
})



//mongo db connection 
mongoose.connection.once("open", () => {
    console.log("DATABASE CONNECTED ")
    app.listen(process.env.PORT, console.log("SERVER CONNECTED"))
})