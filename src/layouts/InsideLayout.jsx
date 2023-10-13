import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import Sidebar from "../components/Sidebar"

function InsideLayout() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  return (
    isAuthenticated
      ? (
          <>
            <Sidebar />
            <Outlet />
          </>
        )
      : <Navigate to="/login" />
  )
}

export default InsideLayout
