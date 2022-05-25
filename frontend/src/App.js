import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/login"  element={ <Login /> }/>
          <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
