import React from "react";
import Sidebar from "../components/Sidebar.jsx";
import NameBar from "../components/NameBar.jsx";
import { Outlet } from "react-router-dom";

function DashboardLayout() {
  return (
    <div className="flex min-h-screen ">
      <div className="w-64 bg-gray-800 text-white">
        <Sidebar />
      </div>
      <div className="flex-1 p-6 min-h-screen">
        <NameBar />
        <main className="mt-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
