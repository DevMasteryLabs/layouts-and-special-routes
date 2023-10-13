import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

function OutsideLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default OutsideLayout
