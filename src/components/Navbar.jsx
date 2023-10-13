import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div style={{ backgroundColor: 'lightgrey', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 20px' }}>
      <NavLink to='/'><i className="fa fa-home"></i>Home</NavLink>
      <div>
        <NavLink to='/login' style={{ marginRight: 50 }}>Login</NavLink>
        <NavLink to='/register'>Register</NavLink>
      </div>
    </div>
  )
}

export default Navbar