import { useState, useEffect } from 'react'

const ACCESS_TOKEN_KEY = 'access_token'
const REFRESH_TOKEN_KEY = 'refresh_token'

const getStoredItem = (key) => {
  try {
    return localStorage.getItem(key);
  } catch (error) {
    console.error("Error accessing localStorage:", error);
    return null; 
  }
};

export default function useAuth() {
  const [accessToken, setAccessTokenState] = useState(() => getStoredItem(ACCESS_TOKEN_KEY));
  const [refreshToken, setRefreshTokenState] = useState(() => getStoredItem(REFRESH_TOKEN_KEY));

  useEffect(() => {
    console.log('useAuth: useEffect running (after initial state setup)');
  }, []);

  const setTokens = ({ access, refresh, email, name }) => {
    console.log('useAuth: Setting tokens...');
    console.log('useAuth: Access:', access ? 'Present' : 'Missing');
    console.log('useAuth: Refresh:', refresh ? 'Present' : 'Missing');

    if (access) localStorage.setItem(ACCESS_TOKEN_KEY, access);
    if (refresh) localStorage.setItem(REFRESH_TOKEN_KEY, refresh);

    setAccessTokenState(access);
    setRefreshTokenState(refresh);
  }

  const clearTokens = () => {
    console.log('useAuth: Clearing tokens...');
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    setAccessTokenState(null);
    setRefreshTokenState(null);
  }

  useEffect(() => {
    console.log('useAuth: Current isAuthenticated state:', !!accessToken);
  }, [accessToken]);

  return {
    accessToken,
    refreshToken,
    isAuthenticated: !!accessToken,
    setTokens,
    clearTokens,
  }
}
