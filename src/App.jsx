import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"
import Profile from "./pages/Profile"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import OutsideLayout from "./layouts/OutsideLayout"
import InsideLayout from "./layouts/InsideLayout"
import NeutralLayout from "./layouts/NeutralLayout"


function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<OutsideLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<InsideLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        <Route element={<NeutralLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
