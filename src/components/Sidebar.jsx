import React from "react";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <aside className="w-64  bg-slate-900 text-white flex flex-col p-6 ">
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
    </aside>
  );
};

export default Sidebar;
