import React, { useState } from "react";
import { useProject } from "../features/project/useProjects";
import { Link } from "react-router-dom";
import AddProjectModal from "./AddProject";

const MainBoard = ({ activeTab, user }) => {
  const { data, isLoading } = useProject();

  const [isModalOpen, setIsModalOpen] = useState(null);

  console.log("mainBoard data:", data);

  return (
    <div className="flex flex-col flex-1">
      {/* <div className="flex justify-end item-center shadow-md mb-6 p-3">
        {user?.name || "Guest"}
      </div> */}
      <main className="flex-1 p-8 overflow-y-auto">
        {activeTab === "projects" && (
          <div className="flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-semibold mb-6">
                Projects now
                <span className="text-xl font-light">({data?.length})</span>
              </h2>
              <button
                className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition"
                onClick={() => setIsModalOpen(true)}
              >
                + Add Project
              </button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {isLoading && <h2>Loading...</h2>}
              {data?.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id}>
                  <ProjectCard title={project.name} status="In Progress" />
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === "tasks" && (
          <>
            <h2 className="text-3xl font-semibold mb-6">Tasks</h2>

            <div className="space-y-4">
              <TaskCard
                title="Design landing page"
                due="Tomorrow"
                status="Pending"
              />
              <TaskCard
                title="Setup backend API"
                due="Next week"
                status="In Progress"
              />
            </div>
          </>
        )}
      </main>

      {isModalOpen && (
        <AddProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

const ProjectCard = ({ title, status }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <span className="text-sm text-gray-600">Status: {status}</span>
  </div>
);

const TaskCard = ({ title, due, status }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm flex justify-between items-center">
    <div>
      <h3 className="font-medium">{title}</h3>
      <p className="text-sm text-gray-500">Due: {due}</p>
    </div>

    <span
      className={`text-xs px-3 py-1 rounded-full
        ${
          status === "Pending"
            ? "bg-yellow-100 text-yellow-700"
            : "bg-blue-100 text-blue-700"
        }
      `}
    >
      {status}
    </span>
  </div>
);

export default MainBoard;
