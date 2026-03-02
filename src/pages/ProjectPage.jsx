import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getItemByIdFromDb } from "../util/calls";
import AddTaskModal from "../components/AddTask";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../features/tasks/useTask";

function ProjectPage() {
  const [project, setProject] = useState(null);
  const [onClose, setOnClose] = useState(true);

  const { id } = useParams();
  console.log(id);

  const { data } = useTasks(id);
  console.log("data from projectpage:", data);

  // useEffect(() => {
  //   const fetchProject = async () => {
  //     try {
  //       const projectData = await getItemByIdFromDb("/projects", id);
  //       setProject(projectData);
  //     } catch (error) {
  //       console.error("Error fetching project:", error);
  //     }
  //   };

  //   fetchProject();
  // }, [id]);

  console.log(project, "this is the project data");
  return (
    <div>
      <div className="flex justify-between *:items-center mb-6  p-3">
        <h1>Project Page</h1>
        <button
          className="p-3 text-xl bg-amber-600 rounded-lg shadow-sm text-white hover:bg-amber-700 cursor-pointer"
          onClick={() => setOnClose(true)}
        >
          + Add Task
        </button>
      </div>

      <div className="">
        <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Project Details</h2>
          <p>
            <strong>Project Name:</strong> {project?.name || "Loading..."}
          </p>
          <p>
            <strong>Description:</strong> This is an example project
            description.
          </p>
          <p>
            <strong>Start Date:</strong> 2024-01-01
          </p>
          <p>
            <strong>End Date:</strong> 2024-12-31
          </p>
        </div>
        {/* <div className="w-1/2 p-4">
          <h2 className="text-xl font-bold mb-4">Team Members</h2>
          <ul className="list-disc list-inside">
            <li>John Doe</li>
            <li>Jane Smith</li>
            <li>Bob Johnson</li>
          </ul>
        </div> */}
      </div>

      {project?.tasks && project.tasks.length > 0 ? (
        project.tasks.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            due={task.dueDate}
            status={task.status}
          />
        ))
      ) : (
        <p className="text-gray-500">No tasks available for this project.</p>
      )}

      {onClose && <AddTaskModal onClose={() => setOnClose(false)} id={id} />}
    </div>
  );
}

export default ProjectPage;
