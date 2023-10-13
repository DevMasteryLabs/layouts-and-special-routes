import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Navbar from '../components/Navbar'

function OutsideLayout() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  return (
    isAuthenticated
      ? <Navigate to="/dashboard" />
      : (
          <>
            <Navbar />
            <Outlet />
          </>
        )
  )
}

export default OutsideLayout
