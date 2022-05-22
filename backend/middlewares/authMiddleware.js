const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const protect = asyncHandler(async (req, res, next) => {
  let token

  // Check if there is a bearer in the authorization header
  if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
    try {
      // Get token from the request header
      token = req.headers.authorization.split(" ")[1]

      // Verify token with the secret
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get user data from the database aside password using the token
      req.user = await User.findById(decoded.id).select("-password")

      next()
    } catch (err) {
      res.status(401)
      throw new Error("Not authorized request.")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("You need a token to send a request")
  }
})

module.exports = {
  protect
}