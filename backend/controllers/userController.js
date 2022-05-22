const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

// @desc Create user
// @route POST /api/users
// @access PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  const { user_name, first_name, middle_name, last_name, email, password } = req.body

  // Check if all required fields has value
  if (!first_name || !last_name || !email || !password) {
    res.status(400)
    throw new Error("Please fill all required fields.")
  }

  // Check if user is already exist
  const userExist = await User.findOne({ email })

  if (userExist) {
    res.status(400)
    throw new Error("Email already exist.")
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user in the database
  const user = await User.create({
    first_name,
    middle_name,
    last_name,
    email,
    password: hashedPassword
  })

  if (user) {
    res.status(200).json({ token: generateToken(user.id) })
  } else {
    res.status(400)
    throw new Error("Invalid user data")
  }
})

// @desc Login user
// @route POST /api/users/login
// @access PUBLIC
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Check require fields if has value
  if (!email || !password) {
    res.status(400)
    throw new Error("Please fill all required fields.")
  }

  // Find user
  const user = await User.findOne({ email })

  if (!user) {
    res.status(400)
    throw new Error("Email doesn't exist! Please create an account.")
  }

  // Check password if matched
  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({ token: generateToken(user.id) })
  } else {
    res.status(400) 
    throw new Error("Password is incorrect.")
  }
})

// @desc Get user data
// @route GET /api/users
// @access PRIVATE
const getMe = asyncHandler(async (req, res) => {
  res.status(200).json(req.user)
})

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "1d"
  })
}

module.exports = {
  registerUser,
  loginUser,
  getMe
}