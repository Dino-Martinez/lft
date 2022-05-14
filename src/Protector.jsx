import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import LoginForm from './LoginForm'

export default function Protector ({ children }) {
  const { user } = useContext(AuthContext)
  return (
    <>
      {user ? children : <LoginForm />}
    </>
  )
}
