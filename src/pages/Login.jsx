import { useDispatch } from 'react-redux'
import { login } from '../store/userSlice'

function Login() {
  const dispatch = useDispatch()
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <button onClick={() => dispatch(login())}>Log in</button>
    </div>
  )
}

export default Login