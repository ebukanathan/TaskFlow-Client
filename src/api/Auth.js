import api from "./axios";

export const signup = (data) => api.post("/signup", data);

export const login = (data) => api.post("/login", data);

export const logout = async () => {
  console.log("reaching from .authjs");
  const res = await api.post("/auth/logout");
  console.log(res);
};

export const getMe = () => api.get("/me");
