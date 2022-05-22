const mongoose = require("mongoose")

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI)

    console.log(`MongoDB host ${ conn.connection.host } and your application has been connected.`.cyan.underline)
  } catch (error) {
    process.log(error)
    process.exit(1)
  }
}

module.exports = connectDB