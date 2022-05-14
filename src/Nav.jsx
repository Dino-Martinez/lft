import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from './AuthProvider'

export default function Nav () {
  const { logout } = useContext(AuthContext)
  return (
    <div>
      <Link to='/'>Home</Link>
      <button onClick={e => logout()}>Log Out</button>
    </div>
  )
}
