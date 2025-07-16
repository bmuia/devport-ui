import React from 'react'
import Register from './components/auth/Register'
import { AuthProvider,useAuthContext } from './context/AuthContext'
import Dashboard from './pages/dashaboard/Dashboard'
import Login from './components/auth/Login'
import OAuthCallback from './components/auth/OAuthCallback'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Navigate to='/dashboard' replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App