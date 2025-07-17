import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      {/* Unified Sidebar */}
      <div className="w-64 bg-white border-r shadow-sm">
        <Sidebar />
      </div>

      {/* Main content area where nested routes will be rendered */}
      <div className="flex-1 p-8 overflow-auto">
        <Outlet /> {/* This is where the content of nested routes (like ProductApp) will appear */}
      </div>
    </div>
  );
}