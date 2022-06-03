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

app.use(errorHandler)

app.listen(port, () => console.log(`SERVER is running at port ${port}`.cyan.bold))