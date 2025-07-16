// components/auth/OAuthCallback.jsx
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthContext } from '../../context/AuthContext'

const OAuthCallback = () => {
  const { setTokens } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    console.log('OAuthCallback: useEffect running. Location:', location.search);
    const params = new URLSearchParams(location.search)
    const access = params.get('access')
    const refresh = params.get('refresh')
    const email = params.get('email')
    const name = params.get('name')

    console.log('OAuthCallback: Params extracted - Access:', access ? 'YES' : 'NO', 'Refresh:', refresh ? 'YES' : 'NO');

    if (access && refresh) {
      setTokens({ access, refresh, email, name }) // Ensure email/name are passed to setTokens if you use them
      console.log('OAuthCallback: Tokens received, navigating to /dashboard');
      navigate('/dashboard')
    } else {
      console.error('OAuthCallback: OAuth tokens missing in URL parameters. Navigating to /login');
      navigate('/login')
    }
  }, [location, setTokens, navigate]) // Dependencies look correct

  return <p className="text-center mt-10">Logging you in via Google...</p>
}

export default OAuthCallback