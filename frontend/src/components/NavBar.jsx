import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { reset, logoutUser } from "../features/auth/authSlice"

function NavBar() {
  const [isScrolledDown, setIsScrolledDown] = useState(false)
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useSelector((state) => state.auth)

  const logout = () => {
    dispatch(logoutUser())
    dispatch(reset())
    navigate("/login")
  }

  const handleScroll = () => {
    console.log("Sadsad")
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
      setIsScrolledDown(true)
    } else {
      setIsScrolledDown(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [])

  return (
    <div className="nav">
      <div className={ isScrolledDown ? "navbar scrolled" : "navbar"} id="navbar">
        <div className="brand">
          <Link to="/">My Application</Link>
        </div>
        <div className={ isMenuClicked ? "items responsive" : "items"}>
          <Link to="#">Skills</Link>
          <Link to="#">My Works</Link>
          <Link to="#">Background</Link>
          <Link to="#">Contact Me</Link>
          { user ? (
            <a href={void(0)} onClick={logout}>Logout</a>
          ) : (
            <Link to="/login">Login</Link>
          ) }
          <a href={void(0)} className="icon" onClick={() => setIsMenuClicked(true)}>
            <FaBars />
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar