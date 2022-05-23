import axios from "axios"

const API_URL = "/api/users/"

// Login user
const loginUser = async (userData) => {
  const response = await axios.post(API_URL + "login", userData)

  if (response.data) {
    localStorage.setItem("token", JSON.stringify(response.data))
  }

  return response.data
}

// Logout user
const logoutUser = async () => {
  // This is a very basic way of logout (not good for actual product)
  localStorage.removeItem("user")
}

const authService = {
  loginUser,
  logoutUser
}

export default authService