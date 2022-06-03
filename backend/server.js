const path = require("path")
const express = require("express")
const dotenv = require("dotenv").config()
const colors = require("colors")
const { errorHandler } = require("./middlewares/errorMiddleware")
const connectDB = require("./configs/db")

const port = process.env.PORT || 8000

const app = express()

connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", require("./routes/userRoutes"))
app.use("/service/mailer", require("./routes/mailerRoutes"))

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")))
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../", "frontend", "build", "index.html")))
} else {
  app.get("/", (req, res) => res.send("Please set environment to production."))
}

app.use(errorHandler)

app.listen(port, () => console.log(`SERVER is running at port ${port}`.cyan.bold))