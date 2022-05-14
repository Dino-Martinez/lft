import React, { useContext } from 'react'
import { AuthContext } from './AuthProvider'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
export default function ProtectedRoute () {
  const { user, loading } = useContext(AuthContext)
  const location = useLocation()
  if (loading) return 'Loading...'
  if (!user) return <Navigate to='/login' replace state={{ redirectUrl: location.pathname ?? '/' }} />
  return <Outlet />
}
