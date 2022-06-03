import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { FaBars, FaArrowLeft, FaTimes } from "react-icons/fa"
import { reset, logoutUser } from "../features/auth/authSlice"

function NavBar() {
  const [brandName, setBrandName] = useState("My Portfolio")
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
    if (document.body.scrollTop > 240 || document.documentElement.scrollTop > 240) {
      setIsScrolledDown(true)
      setBrandName("Gian Roi Calvario")
    } else {
      setIsScrolledDown(false)
      setBrandName("My Portfolio")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, false)

    return () => {
      window.removeEventListener("scroll", handleScroll, false)
    }
  }, [])

  const currentLocation = useLocation().pathname;
  
  const hash = useLocation().hash 

  const handleClickToScroll = () => {
    const id = hash ? hash.substring(1) : "header"
    const element = document.getElementById(id)

    element.scrollIntoView({behavior: "smooth"})
    setIsMenuClicked(false)
  }

  const handleMenuClick = () => {
    if (isMenuClicked) {
      setIsMenuClicked(false)
    } else {
      setIsMenuClicked(true)
    }
  }

  useEffect(() => {
    if (currentLocation === "/") {
      handleClickToScroll()
    }
  }, [currentLocation, hash])

  useEffect(() => {
    if (isMenuClicked) {
      document.body.classList.add("stop-scrolling")
    } else {
      document.body.classList.remove("stop-scrolling")
    }
  }, [isMenuClicked])

  return (
    <div className="nav">
      <div className={ isScrolledDown ? "navbar scrolled" : "navbar"} id="navbar">
        <div className="brand">
          { currentLocation === "/login" ? (
            <Link to="/"><FaArrowLeft size={14}/> Back to Portfolio</Link>
          ) : (
            <Link to="/">{ brandName }</Link>
          ) }
        </div>
        <div className="items">
          { currentLocation !== "/login" ? (
            <div className={ isMenuClicked ? "menu" : "" }>
              <Link to="/#skills">Skills</Link>
              <Link to="/#background">Background</Link>
              <Link to="/#my-works">My Works</Link>
              <Link to="/#contact-me">Contact Me</Link>
              {/* { user ? (
                <a href={void(0)} onClick={logout}>Logout</a>
              ) : (
                <Link to="/login">Login</Link>
              ) } */}
            </div>
          ) : (
            <Link to="#">Register</Link>
          )}
          <a href={void(0)} className="icon" onClick={handleMenuClick}>
            { isMenuClicked ? <FaTimes /> : <FaBars /> }
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar