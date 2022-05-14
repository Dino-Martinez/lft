import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from './AuthProvider'
function LoginForm () {
  const { user, loading, signup, login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { state } = useLocation()
  useEffect(() => {
    if (user && !loading) { navigate(state.redirectUrl) }
  }, [user, loading, navigate, state])
  return (
    <div>
      {!user && (
        <>
          <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
          <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
          <button onClick={e => signup(username, password)}>Sign up</button>
          <button onClick={e => login(username, password)}>Log in</button>
        </>
      )}
    </div>
  )
}

export default LoginForm
