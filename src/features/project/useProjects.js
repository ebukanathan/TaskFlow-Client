import { useQuery } from "@tanstack/react-query";
import { getProject } from "./api";

export const useProject = () => {
  return useQuery({
    queryKey: ["project"],
    queryFn: getProject,
    staleTime: 1000 * 60 * 5,
  });
};
