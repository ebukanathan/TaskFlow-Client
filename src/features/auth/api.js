import api from "../../api/axios";

export const loginUser = async ({ email, password }) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
    return data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const createUser = async (details) => {
  try {
    const { data } = await api.post("/auth/register", details);
    return data;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const getUserProfile = async () => {
  try {
    const { data } = await api.get("/auth/userprofile", {
      withCredentials: true,
    });
    return data.user;
  } catch (error) {
    console.log("error getting profile:", error);
    throw error;
  }
};
