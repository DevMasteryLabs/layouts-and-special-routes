import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

function NeutralLayout() {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  return (
    isAuthenticated
      ? (<>
            <Sidebar />
            <Outlet />
         </>)
      : (<>
            <Navbar />
            <Outlet />
         </>)
  )
}

export default NeutralLayout
