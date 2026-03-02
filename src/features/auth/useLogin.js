import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { loginUser } from "./api";

export const useLogin = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/profile");
      }
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
