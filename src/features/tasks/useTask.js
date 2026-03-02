import { useQuery } from "@tanstack/react-query";
import { getTasks } from "./api";

export const useTasks = (projectId) => {
  return useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(projectId),
    enabled: !!projectId, // Only fetch tasks if projectId is available
  });
};
