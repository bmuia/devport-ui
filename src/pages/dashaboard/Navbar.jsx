import React, { useState } from 'react'
import { Bell, User } from 'lucide-react'

function Navbar() {
  const [mode, setMode] = useState('test') // 'test' or 'live'

  const toggleMode = () => {
    setMode((prev) => (prev === 'test' ? 'live' : 'test'))
  }

  return (
    <div className="w-full h-16 px-6 flex items-center justify-between border-b bg-white shadow-sm sticky min- top-0 left-0 z-10">
      {/* Branding */}
      <div className="text-lg font-semibold text-gray-800">
        DevPortal
      </div>

      {/* Right section */}
      <div className="flex items-center gap-6">
        {/* Mode Toggle */}
        <button
          onClick={toggleMode}
          className={`px-3 py-1 rounded-full text-sm font-medium border transition-all
            ${mode === 'test' ? 'bg-yellow-100 text-yellow-800 border-yellow-300' : 'bg-green-100 text-green-800 border-green-300'}
          `}
        >
          {mode === 'test' ? 'Test Mode' : 'Live Mode'}
        </button>

        {/* Notification + Avatar */}
        <Bell className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-700">
          <User className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
