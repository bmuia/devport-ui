import React, { useState } from 'react'
import {
  LayoutDashboard,
  KeyRound,
  Terminal,
  RadioTower,
  FileClock,
  BookText,
  AppWindow,
  LogOut,
  ToggleRight,
  ToggleLeft,
} from 'lucide-react'

function Sidebar() {
  const [mode, setMode] = useState('test')

  const toggleMode = () => {
    setMode(prev => (prev === 'test' ? 'live' : 'test'))
  }

  const links = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Apps', icon: AppWindow },
    { name: 'Access Token Keys', icon: KeyRound },
    { name: 'API Explorer', icon: Terminal },
    { name: 'Webhooks', icon: RadioTower },
    { name: 'Logs', icon: FileClock },
    { name: 'Docs', icon: BookText },
  ]

  return (
    <div className="h-screen w-64 bg-white border-r shadow-sm flex flex-col justify-between p-6">
      {/* Logo / Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-8">DevPort</h1>
        
        {/* Navigation */}
        <ul className="space-y-4">
          {links.map(({ name, icon: Icon }) => (
            <li key={name}>
              <a
                href="#"
                className="flex items-center text-gray-600 hover:text-blue-600 transition font-medium text-sm px-2 py-2 rounded-lg hover:bg-gray-100"
              >
                <Icon size={18} className="mr-3" />
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom controls */}
      <div className="space-y-4">
        {/* Mode Toggle */}
        <button
          onClick={toggleMode}
          className="w-full flex items-center justify-between text-gray-700 text-sm px-3 py-2 border rounded-lg hover:bg-gray-50 transition"
        >
          <span className="font-medium">Mode: {mode === 'test' ? 'Test' : 'Live'}</span>
          {mode === 'test' ? <ToggleLeft size={18} /> : <ToggleRight size={18} />}
        </button>

        {/* Logout */}
        <button className="w-full flex items-center text-red-500 text-sm font-medium hover:text-red-600 transition">
          <LogOut size={18} className="mr-2" />
          Logout
        </button>
      </div>
    </div>
  )
}

export default Sidebar
