import { useMutation } from "@tanstack/react-query";
import { createUser } from "./api";
import { useNavigate } from "react-router-dom";

export const useCreateUser = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      console.log("success" + data);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
