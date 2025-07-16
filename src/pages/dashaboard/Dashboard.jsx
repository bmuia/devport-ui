import React from 'react'
import Sidebar from './Sidebar'

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Unified Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Welcome to Your Dev Sandbox</h1>
        <p className="text-gray-600">This is where your API keys, logs, and integrations will show.</p>

        <div className="mt-6 p-4 bg-white border rounded-xl shadow-sm">
          <h2 className="text-lg font-medium text-gray-700 mb-2">Activity Logs</h2>
          <p className="text-sm text-gray-500">No recent activity. Make some API calls in test mode to populate this.</p>
        </div>
      </div>
    </div>
  )
}
