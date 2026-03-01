import React from "react";

const Sidebar = ({ activeTab, setActiveTab, handleLogout }) => {
  return (
    <aside className="fixed left-0 top-0 min-h-screen not-last:w-64  bg-slate-900 text-white flex flex-col p-6 ">
      <h1 className="text-2xl font-bold mb-10">TaskFlow</h1>

      <nav className="space-y-3">
        <button
          onClick={() => setActiveTab("projects")}
          className={`w-full text-left px-4 py-2 rounded-lg transition
            ${
              activeTab === "projects"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
          `}
        >
          📁 Projects
        </button>

        <button
          onClick={() => setActiveTab("tasks")}
          className={`w-full text-left px-4 py-2 rounded-lg transition
            ${
              activeTab === "tasks"
                ? "bg-slate-700 text-white"
                : "text-slate-300 hover:bg-slate-800"
            }
          `}
        >
          ✅ Tasks
        </button>
      </nav>
      <button
        onClick={handleLogout}
        className="w-1/2 p-3 bg-red-500 rounded-md absolute bottom-0 text-white hover:bg-red-400"
      >
        Log out
      </button>
    </aside>
  );
};

export default Sidebar;
