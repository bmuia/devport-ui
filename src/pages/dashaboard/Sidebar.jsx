import React, { useState } from 'react';
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
} from 'lucide-react';

import { Link } from 'react-router-dom';

function Sidebar() {
  const [mode, setMode] = useState('test');

  const toggleMode = () => {
    setMode(prev => (prev === 'test' ? 'live' : 'test'));
  };

  // Added 'to' properties for all links to ensure proper navigation
  // The 'to' paths are relative to the parent route (e.g., /dashboard)
  const links = [
    { name: 'Overview', icon: LayoutDashboard, to: '/dashboard' }, // Changed to absolute path for clarity
    { name: 'Apps', icon: AppWindow, to: '/dashboard/app' },
    { name: 'Access Token Keys', icon: KeyRound, to: '/dashboard/access-keys' },
    { name: 'API Explorer', icon: Terminal, to: '/dashboard/api-explorer' },
    { name: 'Webhooks', icon: RadioTower, to: '/dashboard/webhooks' },
    { name: 'Logs', icon: FileClock, to: '/dashboard/logs' },
    { name: 'Docs', icon: BookText, to: '/dashboard/docs' },
  ];

  return (
    <div className="h-screen w-64 bg-white border-r shadow-sm flex flex-col justify-between p-6">
      {/* Logo / Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-8">DevPort</h1>

        {/* Navigation */}
        <ul className="space-y-4">
          {links.map(({ name, icon: Icon, to }) => ( // Destructure 'to' from the link object
            <li key={name}>
              <Link
                to={to} // Use the 'to' property for navigation
                className="flex items-center text-gray-600 hover:text-blue-600 transition font-medium text-sm px-2 py-2 rounded-lg hover:bg-gray-100"
              >
                <Icon size={18} className="mr-3" />
                {name}
              </Link>
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
  );
}

export default Sidebar;