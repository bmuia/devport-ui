// context/AuthContext.js
import React, { createContext, useContext } from 'react'
import useAuth from '../hooks/UseAuth'

const AuthContext = createContext()


export function AuthProvider({ children }) {
  const auth = useAuth() 

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use it easily
export function useAuthContext() {
  return useContext(AuthContext)
}
