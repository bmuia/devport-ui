import React, { useState } from 'react'
import { Mail, EyeIcon, EyeOff } from 'lucide-react'
import Google from './Google'
import axios from 'axios'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()


  const { setTokens } = useAuthContext() // ✅ STEP 2

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    const BASE_URL = 'http://localhost:8000/'

    try {
      const formData = { email, password }
      const res = await axios.post(`${BASE_URL}api/login/`, formData)

      if (res.status === 200) {
        const { access, refresh } = res.data // assuming backend returns this
        setTokens({ access, refresh }) 
        navigate("/dashboard")
        
      }
    } catch (err) {
      console.error(err)
      if (err.response?.data?.error) {
        setError(err.response.data.error)
      } else {
        setError('Login failed. Please check your credentials.')
      }
    } finally {
      setLoading(false)
    }
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  }

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center items-center p-4'>
      <form
        onSubmit={handleSubmit}
        className='bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4'
      >
        <h1 className='text-2xl font-bold text-center'>Welcome Back</h1>
        <p className='text-sm text-gray-600 text-center'>
          Log in to continue using DevPort
        </p>

        {error && (
          <div className='text-red-500 text-sm text-center bg-red-100 py-2 px-3 rounded-md'>
            {error}
          </div>
        )}

        <div className='relative'>
          <label className='block mb-1 text-sm font-medium text-gray-700'>Email address</label>
          <div className='flex items-center border rounded-md px-3'>
            <Mail className='w-4 h-4 text-gray-400 mr-2' />
            <input
              type='email'
              className='w-full py-2 focus:outline-none'
              placeholder='you@example.com'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        <div className='relative'>
          <label className='block mb-1 text-sm font-medium text-gray-700'>Password</label>
          <div className='flex items-center border rounded-md px-3'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='w-full py-2 focus:outline-none'
              placeholder='••••••••'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type='button'
              onClick={togglePassword}
              className='ml-2 text-gray-500 hover:text-gray-700'
            >
              {showPassword ? <EyeOff className='w-4 h-4' /> : <EyeIcon className='w-4 h-4' />}
            </button>
          </div>
        </div>

        <button
          type='submit'
          disabled={loading}
          className={`w-full py-2 rounded-md transition text-white ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-800'
          }`}
        >
          {loading ? 'Logging in...' : 'Log In'}
        </button>

        <div className='flex items-center gap-2 text-gray-400 text-sm'>
          <div className='flex-1 h-px bg-gray-300'></div>
          OR
          <div className='flex-1 h-px bg-gray-300'></div>
        </div>

        <Google />

        <p>
          Don't have an account yet?{' '}
          <a href='/login' className='text-blue-600 hover:underline'>
            register here
          </a>
        </p>
      </form>
    </div>
  )
}

export default Login
