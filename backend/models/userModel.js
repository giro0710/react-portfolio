const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, "Please add your first name to proceed."]
  },
  middle_name: {
    type: String,
    default: null
  },
  last_name: {
    type: String,
    required: [true, "Please add your last name to proceed."]
  },
  email: {
    type: String,
    required: [true, "Please add an email to proceed."]
  },
  password: {
    type: String,
    required: [true, "Please add a password to proceed."]
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("User", userSchema)