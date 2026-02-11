import { useState } from "react";
import api from "../api/axios.js";

const AddProjectModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  //   const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/projects", { name });

      if (!response) {
        console.log("no data");
      }
      console.log(response.data);

      setName("");

      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Project</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Project Name
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
              placeholder="e.g. Website Redesign"
            />
          </div>

          {/* <div>
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-slate-300"
              placeholder="Short project description..."
            />
          </div> */}

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-slate-900 text-white hover:bg-slate-800"
            >
              Add Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal;
