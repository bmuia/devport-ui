// components/PrivateRoute.jsx
import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'

function PrivateRoute({ children }) {
  const { isAuthenticated } = useAuthContext()

  return isAuthenticated ? children : <Navigate to='/login' replace />
}

export default PrivateRoute
