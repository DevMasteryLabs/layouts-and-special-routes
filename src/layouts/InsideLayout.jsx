import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"

function InsideLayout() {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  )
}

export default InsideLayout
