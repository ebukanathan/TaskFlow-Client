import React from "react";
import { useProfile } from "../features/auth/useProfile";

function NameBar() {
  const { data } = useProfile();
  return (
    <div className="shadow-sm p-3 flex justify-between">
      <h1 className="text-2xl font-bold">Project Name</h1>
      <h1 className="text-xl font-semibold">{data && data.name}</h1>
    </div>
  );
}

export default NameBar;
