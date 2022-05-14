import { createContext, useEffect, useState } from 'react'

export const AuthContext = createContext({})

const Provider = ({ children }) => {
  const AuthProvider = AuthContext.Provider
  const [user, setUser] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const res = await fetch('/api/user')
    const json = await res.json()
    setUser(json)
    setLoading(false)
  }

  const signup = async (username, password) => {
    const res = await fetch('/api/user/signup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) })
    const json = await res.json()
    setUser(json.message === 'Logged in')
  }

  const login = async (username, password) => {
    const res = await fetch('/api/user/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ username, password }) })
    const json = await res.json()
    setUser(json.message === 'Logged in')
  }

  const logout = async () => {
    const res = await fetch('/api/user/logout')
    const json = await res.json()
    setUser(json.message !== 'Logged out')
  }

  const store = {
    user,
    loading,
    signup,
    login,
    logout
  }

  return <AuthProvider value={store}>{children}</AuthProvider>
}

export default Provider
