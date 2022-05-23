import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { loginUser, reset } from "../features/auth/authSlice"
import Spinner from "../components/Spinner"

function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  })

  const { email, password } = userData
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isSuccess, isError, isLoading, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess && user) {
      navigate("/")
    }

    return () => {
      dispatch(reset())
    }
  }, [isError, message, isSuccess, user, navigate, dispatch])

  const handleFormChange = (e) => {
    setUserData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const login = (e) => {
    e.preventDefault()

    if (!email || !password) {
      toast.error("Please fill all required fields to proceed.")
    } else {
      dispatch(loginUser(userData))
    }
  }

  return (
    <>
      <section className="login">
        { isLoading ? (
          <Spinner />
        ) : (
          <div className="container">
            <div className="title">
              <h1>Sign in</h1>
              <p>There are lots of tools inside.</p>
            </div>
            <div className="body">
              <form onSubmit={login}>
                <div className="form-group">
                  <input type="email" name="email" id="email" placeholder="Enter your email address" value={email} onChange={handleFormChange}/>
                </div>
                <div className="form-group">
                  <input type="password" name="password" id="password" placeholder="Enter your password" value={password} onChange={handleFormChange}/>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-block">Login</button>
                </div>
              </form>
            </div>
          </div>
        ) }
          
      </section>
    </>
  )
}

export default Login