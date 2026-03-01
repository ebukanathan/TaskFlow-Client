import React from "react";

function TaskCard({ title, due, status }) {
  return (
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
}

export default TaskCard;
