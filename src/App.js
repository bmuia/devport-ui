import React from 'react'
import Register from './components/auth/Register'
import { AuthProvider,useAuthContext } from './context/AuthContext'
import Dashboard from './pages/dashaboard/Dashboard'
import Login from './components/auth/Login'
import OAuthCallback from './components/auth/OAuthCallback'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import ProductApp from './pages/dashaboard/ProductApp'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />

          {/* Nested routes for Dashboard */}
          <Route
            path='/dashboard' // Parent route for the dashboard layout
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          >
            {/* Default dashboard content (e.g., Overview) */}
            <Route index element={<div>Welcome to Dashboard Overview!</div>} /> {/* Add a default route for /dashboard */}
            <Route path='app' element={<ProductApp />} /> {/* Nested route for /dashboard/app */}
            {/* Add placeholder routes for other sidebar links if needed */}
            <Route path='access-keys' element={<div>Access Token Keys Content</div>} />
            <Route path='api-explorer' element={<div>API Explorer Content</div>} />
            <Route path='webhooks' element={<div>Webhooks Content</div>} />
            <Route path='logs' element={<div>Logs Content</div>} />
            <Route path='docs' element={<div>Docs Content</div>} />
          </Route>

          {/* Fallback route for any unmatched paths */}
          <Route path='*' element={<Navigate to='/dashboard' replace />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
