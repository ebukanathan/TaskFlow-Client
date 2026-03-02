import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createProject } from "./api";

export const useCreateProject = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createProject,
    onSuccess: () => {
      queryClient.invalidateQueries(["project"]);
    },
  });
};
