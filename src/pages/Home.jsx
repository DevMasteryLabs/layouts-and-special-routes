import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { login, logout } from "../store/userSlice"

function Home() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const dispatch = useDispatch()
  return (
    <div style={{ paddingTop: 20 }}>

      <h1> {isAuthenticated ? "Welcome back!" : "You are not logged in"} </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
        {
          isAuthenticated
            ? <button onClick={() => dispatch(logout())}>Log out</button>
            : <button onClick={() => dispatch(login())}>Log in</button>
        }
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", height: "80vh" }}>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Home
